import getBaseUrl from "./baseurl";

it("gets the base url correctly when req is undefined", () => {
  expect(getBaseUrl()).toEqual("");
});

it("gets the base url correctly when req has no protocol", () => {
  expect(getBaseUrl({ headers: { host: "myHost" } })).toEqual("http://myHost");
});

it("gets the base url correctly when req has protocol", () => {
  expect(getBaseUrl({ headers: { host: "myHost", "x-forwarded-proto": "https" } })).toEqual("https://myHost");
});
