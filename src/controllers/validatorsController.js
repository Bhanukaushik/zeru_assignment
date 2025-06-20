const path = require('path');
const fs = require('fs');

const getValidators = (req, res) => {
  try {
    const filePath = path.join(__dirname, '../../mock-data/validators.json');
    const data = fs.readFileSync(filePath);
    const validators = JSON.parse(data);
    res.json(validators);
  } catch (error) {
    console.error('Error reading validators data:', error);
    res.status(500).json({ error: 'Unable to fetch validators' });
  }
};

module.exports = { getValidators };
