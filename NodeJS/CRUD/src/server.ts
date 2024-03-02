import { log } from "console";
import express from "express";
import "express-async-errors";
import { request } from "http";
import morgan from "morgan";
import Joi, { ObjectSchema } from "joi";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});


type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required()
});

// [EXERCISE 2 EXPRESS]

app.get("/api/planets/", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));

  res.status(200).json(planet);
});

app.post("/api/planets", (req, res) => {
  const { error } = planetSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  console.log(planets);
  res.status(201).json({ msg: "Planets got updated" });
});

app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params
  const {name} = req.body
  planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p)
  console.log(planets)

  res.status(200).json({msg: 'All good'})
})

app.delete("/api/planets/:id", (req,res) => {
  const {id} = req.params
  planets = planets.filter(p => p.id !== Number(id))
  res.status(200).json({msg: 'All good'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
