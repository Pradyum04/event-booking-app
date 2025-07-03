const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
//const connectDB = require('./config/db'); // optional: only if you're using MongoDB

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// Home Route (Optional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
