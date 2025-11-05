import { jest } from "@jest/globals";
import { showUglyUIMessage } from "./app.js";

describe("UI message function", () => {
  beforeAll(() => {
    // Mock alert so Jest doesn't error (since it's not in Node)
    global.alert = jest.fn();
  });

  test("should be defined", () => {
    expect(showUglyUIMessage).toBeDefined();
  });

  test("should log the expected message", () => {
    const mockLog = jest.fn();
    console.log = mockLog;

    showUglyUIMessage();

    expect(global.alert).toHaveBeenCalledWith("Ugliest UI I've seen.");
    expect(mockLog).toHaveBeenCalledWith("Ugliest UI I've seen.");
  });
});
