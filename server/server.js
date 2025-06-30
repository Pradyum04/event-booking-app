const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // 👈 ADD THIS LINE

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is working — DB skipped for now');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
