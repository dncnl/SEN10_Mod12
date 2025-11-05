// Import Jest's helpers explicitly for ESM support
import { jest } from "@jest/globals";
import { showUglyUIMessage } from "./app.js";

describe("UI message function", () => {
  test("should be defined", () => {
    expect(showUglyUIMessage).toBeDefined();
  });

  test("should log the expected message", () => {
    // Mock console.log
    const mockLog = jest.fn();
    console.log = mockLog;

    // Call the function
    showUglyUIMessage();

    // Verify that console.log was called correctly
    expect(mockLog).toHaveBeenCalledWith("Ugliest UI I've seen.");
  });
});
