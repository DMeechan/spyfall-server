import errorHandler from "errorhandler";
import { start } from "./sockets";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Socket.IO server
 */
const http = require("http").Server(app);
const sockets = require("socket.io")(http);

start(sockets);

/**
 * Start Express server.
 */
const server = http.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
