const path = require('path');
const fs = require('fs');

const getRewardsByAddress = (req, res) => {
  try {
    const userAddress = req.params.address;
    const filePath = path.join(__dirname, '../../mock-data/rewards.json');
    const data = fs.readFileSync(filePath);
    const rewards = JSON.parse(data);

    const result = rewards[userAddress];

    if (!result) {
      return res.status(404).json({ message: "No reward data found for this address." });
    }

    res.json(result);
  } catch (error) {
    console.error('Error fetching rewards:', error);
    res.status(500).json({ error: 'Unable to fetch rewards.' });
  }
};

module.exports = { getRewardsByAddress };
