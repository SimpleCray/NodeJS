import { UserService } from "../../src/services";
const userService = new UserService();

describe("Test Jest package", () => {
  it("Testing should pass", async () => {
    await expect(userService.index()).resolves.toBeTruthy();
  });
});
