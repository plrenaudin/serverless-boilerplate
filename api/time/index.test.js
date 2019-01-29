import sut from ".";
const now = 1548726138665;

beforeAll(() => {
  Date.now = jest.fn(() => now);
});

afterAll(() => {
  Date.now.mockRestore();
});

it("returns the date", () => {
  const res = {
    end: jest.fn()
  };
  sut(null, res);
  expect(res.end.mock.calls.length).toBe(1);
  expect(JSON.parse(res.end.mock.calls[0][0])).toEqual({ now });
});
