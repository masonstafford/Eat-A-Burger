var db = require("../models");

//=Routes=============================================

module.exports = function (app) {

  app.get("/api/burgers", function (req, res) {
    db.Burgers.findAll({}).then(function (dbBurgers) {
      if (err) throw res.status(500).json(err);
        res.json(dbBurgers);
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name,
      eaten: req.body.eaten
    }).then(function (dbBurgers) {
      if (err) throw res.status(500).json(err);
        res.json(dbBurgers);
    });
  });

  app.put("/api/burgers", function (req, res) {
    db.Burgers.update({
      burger_name: req.body.burger_name,
      eaten: req.body.eaten
      }, {
        where: {
          id: req.body.id
        }
    }).then(function (dbBurgers) {
      if (err) throw res.status(500).json(err);
        res.json(dbBurgers);
    });
  });

};
//=Routes=End=============================================