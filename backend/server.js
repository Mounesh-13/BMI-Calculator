const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// CORS Configuration
app.use(cors());  // Allow all origins for local development
// You can restrict CORS to only allow certain origins like this:
 // app.use(cors({ origin: 'http://localhost:8080' }));  // If your frontend is served on port 8080

app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bmi_calculator', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to local MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define Schema and Model
const bmiSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  bmi: Number,
  status: String,
  date: { type: Date, default: Date.now },
});

const BMIRecord = mongoose.model('BMIRecord', bmiSchema);

// BMI Calculation Route
app.post('/calculate-bmi', async (req, res) => {
  const { height, weight } = req.body;

  console.log('Received height:', height, 'weight:', weight);  // Log the received values

  if (!height || !weight) {
    return res.status(400).json({ error: 'Height and Weight are required' });
  }

  const heightInMeters = height / 100; // Convert height from cm to meters
  const bmi = weight / (heightInMeters * heightInMeters); // BMI formula

  let status = '';
  if (bmi < 18.5) status = 'Underweight';
  else if (bmi >= 18.5 && bmi < 24.9) status = 'Normal weight';
  else if (bmi >= 25 && bmi < 29.9) status = 'Overweight';
  else status = 'Obesity';

  const record = new BMIRecord({ height, weight, bmi, status });

  try {
    const savedRecord = await record.save();
    res.status(201).json({
      message: `BMI Calculated and saved! Status: ${status}`,
      bmi: bmi.toFixed(2),  // Return BMI with two decimal places
    });
  } catch (error) {
    console.error('Error saving BMI record:', error); // Log error if saving fails
    res.status(500).json({ error: 'Failed to save BMI record' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
