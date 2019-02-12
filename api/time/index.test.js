import sut from ".";

it("returns the date", () => {
  const res = {
    end: jest.fn()
  };
  sut(null, res);
  expect(res.end.mock.calls.length).toBe(1);
  expect(JSON.parse(res.end.mock.calls[0][0]).now).toBeDefined();
});
