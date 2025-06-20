const path = require('path');
const fs = require('fs');

const getRestakers = (req, res) => {
  try {
    const filePath = path.join(__dirname, '../../mock-data/restakers.json');
    const data = fs.readFileSync(filePath);
    const restakers = JSON.parse(data);
    res.json(restakers);
  } catch (error) {
    console.error('Error reading restakers data:', error);
    res.status(500).json({ error: 'Unable to fetch restakers' });
  }
};

module.exports = { getRestakers };
