import { jest } from "@jest/globals";
import { showUglyUIMessage } from "./app.js";

// Simple math function for testing
function add(a, b) {
  return a + b;
}

describe("Math Operations", () => {
  test("adds 1 + 2 to equal 3 (passing test)", () => {
    expect(add(1, 2)).toBe(3);
  });


  // test("failing test", () => {
  //   expect(true).toBe(false); // This would fail because true is not equal to false
  // });

});

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
