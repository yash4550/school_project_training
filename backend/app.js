const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
