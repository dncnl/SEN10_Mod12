import { showUglyUIMessage } from "./app.js";

describe("UI message function", () => {
    test("should be defined", () => {
        expect(showUglyUIMessage).toBeDefined();
    });

    test("should log the expected message", () => {
        console.log = jest.fn();
        showUglyUIMessage();
        expect(console.log).toHaveBeenCalledWith("Ugliest UI I've seen.");
    });
});
