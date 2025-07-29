
// EduLoan Backend API (Node.js + Express + MongoDB)

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// Models
const LoanSchema = new mongoose.Schema({
  college: String,
  provider: String,
  type: String,
  interest: Number,
  tenure: Number,
  maxAmount: Number,
  collateral: Boolean,
  documents: [String],
  branch: String,
  branchLocation: {
    lat: Number,
    lng: Number,
  },
  contact: String,
});
const Loan = mongoose.model('Loan', LoanSchema);

// Routes
app.get('/', (req, res) => {
  res.send('UNI LOANLYTICS API');
});

app.get('/colleges', async (req, res) => {
  try {
    const colleges = await Loan.distinct('college');
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching colleges' });
  }
});

app.get('/loans/:college', async (req, res) => {
  try {
    const loans = await Loan.find({ college: req.params.college });
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching loans' });
  }
});

app.post('/loan', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Loan added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error adding loan' });
  }
});

app.post('/calculate-emi', (req, res) => {
  const { amount, interest, tenure } = req.body;
  const monthlyRate = interest / 12 / 100;
  const n = tenure * 12;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  res.json({ emi: Math.round(emi) });
});

app.get('/branches/nearest', async (req, res) => {
  const userLat = parseFloat(req.query.lat);
  const userLng = parseFloat(req.query.lng);
  try {
    const loans = await Loan.find({});
    let nearest = null;
    let minDist = Infinity;
    for (let loan of loans) {
      const { lat, lng } = loan.branchLocation || {};
      if (lat != null && lng != null) {
        const dist = Math.sqrt(Math.pow(userLat - lat, 2) + Math.pow(userLng - lng, 2));
        if (dist < minDist) {
          minDist = dist;
          nearest = loan;
        }
      }
    }
    res.json({ nearestBranch: nearest });
  } catch (err) {
    res.status(500).json({ error: 'Error finding nearest branch' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
