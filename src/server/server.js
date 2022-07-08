import express from "express";
import ReactDOMServer from "react-dom/server";

import SignIn from "../components/SignIn";

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<SignIn />);

  res.send(`
    <html>
      <head>
        <title>SignIn</title>
      </head>
      <body>
        <div id="signin">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log("Server is running..."));