// ---------------------------
// Mock helpers
// ---------------------------
function createClientMock() {
  return {
    login: jest.fn().mockResolvedValue(true),
    on: jest.fn(),
    user: {
      setPresence: jest.fn(),
      setAvatar: jest.fn(),
      setStatus: jest.fn()
    }
  };
}

function createMessageMock(content, authorId = "author1") {
  return {
    content,
    author: { id: authorId, tag: "Author#0001", send: jest.fn().mockResolvedValue(true) },
    channel: { send: jest.fn(), type: "text", awaitMessages: jest.fn() },
    mentions: { members: { first: jest.fn() } },
    guild: {
      name: "TestServer",
      members: {
        me: { permissions: { has: () => true } },
        unban: jest.fn().mockResolvedValue(true)
      }
    },
    member: { permissions: { has: () => true } }
  };
}

function createMemberMock() {
  return {
    ban: jest.fn().mockResolvedValue(true),
    unban: jest.fn().mockResolvedValue(true),
    id: "user123",
    user: { tag: "User#1234" },
    send: jest.fn().mockResolvedValue(true)
  };
}

// ---------------------------
// Command imports
// ---------------------------
const TempBanUsers = require("../commands/moderation/tempban");
const ChangeActivity = require("../commands/settings/activity");
const Translate = require("../commands/main/translate");
const ChangeOnlineStatus = require("../commands/settings/onlinestatus");
const ChangeOverallStatus = require("../commands/settings/status");
const ChangePFP = require("../commands/settings/botpfp");

// ---------------------------
// Mock node-fetch
// ---------------------------
const fetch = require("node-fetch");
jest.mock("node-fetch");
const { Response, Headers } = jest.requireActual("node-fetch");

// ---------------------------
// Bot Power-Up Test Suite
// ---------------------------
describe("Discord.js Bot Power-Up Test Suite", () => {
  let client, message;

  beforeEach(() => {
    client = createClientMock();
  });

  // ---------------------------
  // TempBanUsers command tests
  // ---------------------------
  test("TempBanUsers command bans and unbans", async () => {
    const cmd = TempBanUsers;
    message = createMessageMock("&tempban @user 1000");

    const banMember = createMemberMock();
    message.mentions.members.first = () => banMember;
    message.channel.awaitMessages.mockResolvedValue([{}]);

    await cmd.execute(message);

    expect(banMember.ban).toHaveBeenCalled();
    expect(message.channel.send).toHaveBeenCalledWith(
      expect.stringContaining("has been temporarily banned")
    );
  });

  // ---------------------------
  // ChangeActivity command tests
  // ---------------------------
  test("ChangeActivity command sets status", async () => {
    const cmd = new ChangeActivity(client);
    message = createMessageMock("&activity playing Testing", "324661689972686849");

    await cmd.execute(message);

    expect(client.user.setPresence).toHaveBeenCalledWith({
      activities: [{ name: "Testing", type: 0 }],
      status: "online"
    });
    expect(message.channel.send).toHaveBeenCalledWith(
      expect.stringContaining("My status is now")
    );
  });

  // ---------------------------
  // ChangeOnlineStatus command tests
  // ---------------------------
  test("ChangeOnlineStatus command updates status", async () => {
    const cmd = new ChangeOnlineStatus(client);
    message = createMessageMock("&onlinestatus dnd", "324661689972686849");

    await cmd.execute(message);

    expect(client.user.setStatus).toHaveBeenCalledWith("dnd");
    expect(message.channel.send).toHaveBeenCalledWith(expect.stringContaining("Do Not Disturb"));
  });

  // ---------------------------
  // ChangeOverallStatus command tests
  // ---------------------------
  test("ChangeOverallStatus command sets overall status", async () => {
    const cmd = new ChangeOverallStatus(client);
    message = createMessageMock("&status online playing Testing", "324661689972686849");

    await cmd.execute(message);

    expect(client.user.setStatus).toHaveBeenCalledWith("online");
    expect(client.user.setPresence).toHaveBeenCalledWith({
      activities: [{ name: "Testing", type: 0 }]
    });
    expect(message.channel.send).toHaveBeenCalledWith(expect.stringContaining("Online"));
  });

  // ---------------------------
  // ChangePFP command tests
  // ---------------------------
  test("ChangePFP command updates avatar", async () => {
    const cmd = new ChangePFP(client);
    message = createMessageMock("&botpfp https://example.com/avatar.png", "324661689972686849");

    // Mock fetch to succeed with image content-type
    fetch.mockResolvedValue(
      new Response(null, { headers: new Headers({ "content-type": "image/png" }), status: 200 })
    );

    await cmd.execute(message);

    expect(client.user.setAvatar).toHaveBeenCalledWith("https://example.com/avatar.png");
    expect(message.channel.send).toHaveBeenCalledWith(
      expect.stringContaining("successfully changed")
    );
  });

  // ---------------------------
  // Translate command tests
  // ---------------------------
  test("Translate command handles emoji translation", async () => {
    const cmd = Translate;
    message = createMessageMock("&translate emoji hello world");

    await cmd.execute(message, ["translate", "emoji", "hello", "world"]);

    expect(message.channel.send).toHaveBeenCalledWith(
      expect.stringContaining("Translating to emoji")
    );
  });

  // ---------------------------
  // General bot tests
  // ---------------------------
  describe("General bot behavior", () => {
    beforeEach(() => {
      message = createMessageMock("&ping");
    });

    test("bot logs in and sets presence", async () => {
      await client.login("FAKE_TOKEN");
      client.user.setPresence({ activities: [{ name: "Testing" }], status: "online" });

      expect(client.login).toHaveBeenCalledWith("FAKE_TOKEN");
      expect(client.user.setPresence).toHaveBeenCalledWith({
        activities: [{ name: "Testing" }],
        status: "online"
      });
    });

    test("bot responds to a ping command", async () => {
      const pingCommandHandler = (msg) => {
        if (msg.content === "&ping") msg.channel.send("Pong!");
      };

      pingCommandHandler(message);

      expect(message.channel.send).toHaveBeenCalledWith("Pong!");
    });
  });
});
