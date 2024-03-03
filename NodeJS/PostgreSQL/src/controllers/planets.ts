import Joi from "joi";
import { Request, Response } from "express";
import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:Luos123@localhost:5432/planets");

console.log(db);

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets(
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    )`);

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);

  const planets = await db.many(`SELECT * FROM planets`);
  console.log(planets);
};

setupDb();

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets`);
  res.status(200).json(planets);
};

const getOneByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.one(`SELECT * FROM planets WHERE id=$1`, Number(id));

  res.status(200).json(planet);
};

const create = async (req: Request, res: Response) => {
  const { error } = planetSchema.validate(req.body);
  const { name } = req.body;

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);

  res.status(201).json({ msg: "Planets got updated" });

  const planets = await db.many(`SELECT * FROM planets`);
  console.log(planets);
};

const updateByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  await db.none(`UPDATE planets SET name = $1 WHERE id=$2`, [name, id]);

  res.status(200).json({ msg: "All good" });

  const planets = await db.many(`SELECT * FROM planets`);
  console.log(planets);
};

const deleteByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`, id);
  res.status(200).json({ msg: "All good" });

  const planets = await db.many(`SELECT * FROM planets`);
  console.log(planets);
};

const createImage = async (req: Request, res: Response) => {
  console.log(req.file);
  const { id } = req.params;
  const fileName = req.file?.path;

  await db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName]);

  if (fileName) {
    res.status(201).json({ msg: "planet image uploaded successfully" });
  } else {
    res.status(400).json({ msg: "Error: no file" });
  }
  const planets = await db.many(`SELECT * FROM planets`);
  console.log(planets);
};

export { getAll, getOneByID, create, updateByID, deleteByID, createImage };
