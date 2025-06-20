require('dotenv').config();
const express = require('express');
const app = express();

// Routes
const restakersRoutes = require('./src/routes/restakers');
const validatorsRoutes = require('./src/routes/validators');
const rewardsRoutes = require('./src/routes/rewards');

app.use(express.json());

app.use('/restakers', restakersRoutes);
app.use('/validators', validatorsRoutes);
app.use('/rewards', rewardsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
