import Joi from "joi";
import { Request, Response } from "express";

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
  name: Joi.string().required(),
});

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneByID = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));

  res.status(200).json(planet);
};

const create = (req: Request, res: Response) => {
  const { error } = planetSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  console.log(planets);
  res.status(201).json({ msg: "Planets got updated" });
};

const updateByID = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));
  console.log(planets);

  res.status(200).json({ msg: "All good" });
};

const deleteByID = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: "All good" });
};

export { getAll, getOneByID, create, updateByID, deleteByID };
