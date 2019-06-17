require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.databasePort
});


const getHouses = (req, res) => {
  pool.query("SELECT * FROM houses ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getHousesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM houses WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createHouse = (req, res) => {
  const { name, price } = req.body;
  pool.query(
    "INSERT INTO houses (name, price) VALUES ($1, $2)",
    [name, price],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send("Home added");
    }
  );
};

const updateHouse = (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  pool.query(
    "UPDATE houses SET name = $1, price = $2 WHERE id = $3",
    [name, price, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Home modified with id: ${id}`);
    }
  );
};

module.exports = {
  getHouses,
  getHousesById,
  createHouse,
  updateHouse
};
