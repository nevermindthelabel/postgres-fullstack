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
  pool.query("SELECT * FROM house ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getHousesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM house WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createHouse = (req, res) => {
  console.log(req.body)
  const { address, price, square_feet, num_bed, num_bath, garage, num_stories, swimming_pool, available, city } = req.body;
  pool.query(
    "INSERT INTO house (address, price, square_feet, num_bed, num_bath, garage, num_stories, swimming_pool, available, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [address, price, square_feet, num_bed, num_bath, garage, num_stories, swimming_pool, available, city],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ msg: "home added"});
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

const removeHouse = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM house WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).json({ msg: "house deleted"})
  })
}

module.exports = {
  getHouses,
  getHousesById,
  createHouse,
  updateHouse,
  removeHouse
};
