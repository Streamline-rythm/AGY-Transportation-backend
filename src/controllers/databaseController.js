const pool = require('../db')

exports.getAllDriversData = async (req, res) => {
  try {
    console.log("getAllDriversData request received");
    const [rows] = await pool.query('SELECT * FROM drivers');
    res.json(rows);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
}

exports.test = async (req, res) => {
  try {
    res.json({ "test": "success" });
  } catch (error) {
    res.status(500).json({ error: 'test is failed' });
  }
}
