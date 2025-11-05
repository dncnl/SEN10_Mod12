import { jest } from "@jest/globals";
import { showUglyUIMessage } from "./app.js";

describe("UI message function", () => {
  beforeAll(() => {
    global.alert = jest.fn();
  });

  test("should be defined", () => {
    expect(showUglyUIMessage).toBeDefined();
  });

  test("should log the expected message", () => {
    const mockLog = jest.fn();
    console.log = mockLog;

    showUglyUIMessage();

    // Match the updated alert message
    expect(global.alert).toHaveBeenCalledWith("Welcome to Yale School of Art Demo!");
    expect(mockLog).toHaveBeenCalledWith("Welcome message displayed.");
  });
});
