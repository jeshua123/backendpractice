let nombres = [
  {
    id: 1,
    name: "eliud",
  },
  {
    id: 2,
    name: "luis",
  },
  {
    id: 3,
    name: "pepe",
  },
  {
    id: 4,
    name: "juan",
  },
  {
    id: 5,
    name: "koko",
  },
  {
    id: 6,
    name: "cholo",
  },
];

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
app.use(cors());

app.get("/", (req, res) => {
  const foo = "hola pepito";

  res.send(foo);
});
//mongodb+srv://jeshua:<password>@cluster0.0ztff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://jeshua:lamanzana@cluster0.0ztff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
app.post("/add-name", (req, res) => {
  const resp = req.body;
  const newdata = [...nombres, resp];

  res.send(newdata);
});

app.put("/edite-name/:id", (req, res) => {
  const resp = req.body;
  const id = req.params.id;

  const newdata = nombres.map((iter) => (iter.id === +id ? { ...iter, name: resp.name } : iter));
  res.send(newdata);
});

app.delete("/delete-name/:id", (req, res) => {
  const id = req.params.id;
  const deletedData = nombres.filter((iter) => iter.id !== +id);

  res.send(deletedData);
});

app.listen(5000, () => {
  console.log("Servidor funcionando en puerto 5000");
});

//Express.js
//Nodemon
//Cors
