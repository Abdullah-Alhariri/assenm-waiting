const path = require("path");
const express = require("express");
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "public")));

// routes setting
app.get("/", (req, res) => {
  res.render("index.html");
});
app.get("/*", (req, res) => {
  res.redirect("/");
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
