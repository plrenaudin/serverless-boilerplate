/* eslint-disable */
const express = require("express");
const next = require("next");

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * Use this only on dev mode for running lambdas locally without having to deploy to now
 */

app
  .prepare()
  .then(() => {
    const server = express();

    // run lambdas locally
    server.get("/api/:service", (req, res) => {
      require(`./api/${req.params.service}`)(req, res);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
