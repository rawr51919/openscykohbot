module.exports = {
  name: "userpfp",
  description: "Shows the avatar of either you or a user you mention/provide.",

  async execute(message, args) {
    let targetUser;

    // Case 1: Mention
    if (message.mentions.users.size > 0) {
      targetUser = message.mentions.users.first();
    }
    // Case 2: ID or username in args
    else if (args.length > 0) {
      const search = args.join(" ").toLowerCase();

      // Try ID lookup
      targetUser =
        message.client.users.cache.get(search) ||
        // Try username/nickname lookup
        message.guild?.members.cache.find(
          m =>
            m.user.username.toLowerCase() === search ||
            m.displayName.toLowerCase() === search
        )?.user;
    }

    // Case 3: Default to author
    if (!targetUser) {
      targetUser = message.author;
    }

    // Special cases
    if (targetUser.id === message.author.id) {
      return message.reply(
        `Your avatar is: ${targetUser.displayAvatarURL({ size: 2048, dynamic: true })}`
      );
    }

    if (targetUser.id === message.client.user.id) {
      return message.reply(
        `My avatar is: ${targetUser.displayAvatarURL({ size: 2048, dynamic: true })}`
      );
    }

    // General case
    return message.reply(
      `${targetUser.username}'s avatar is: ${targetUser.displayAvatarURL({ size: 2048, dynamic: true })}`
    );
  },
};
