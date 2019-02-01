export const getBaseUrl = req => {
  const protocol = (req && req.headers["x-forwarded-proto"]) || "http";
  return req ? `${protocol}://${req.headers.host}` : "";
};
