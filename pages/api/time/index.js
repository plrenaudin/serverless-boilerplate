module.exports = (req, res) => {
  res.end(JSON.stringify({ now: Date.now() }));
};
