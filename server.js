const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql4masoN",
    database: "burgers_db",
  });
}
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
app.get("/", function (req, res) {
  connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burgers: data });
  });
});
app.put("/api/burger/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "UPDATE burgers SET ? WHERE ?",
    [
      {
        devoured: 1,
      },
      {
        id: id,
      },
    ],
    function (err, data) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      console.log(data);
      res.sendStatus(200);
    }
  );
});
app.post("/api/burger", (req, res) => {
  connection.query("INSERT INTO burgers SET ?", req.body, function (
    err,
    resaults
  ) {
    if (err) throw err;
    res.sendStatus(200);
  });
});
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
