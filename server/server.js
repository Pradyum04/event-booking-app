const express = require('express');
const cors = require('cors');

// Route files
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request body

// ✅ Routes
app.get('/', (req, res) => {
  res.send('API is working — DB skipped for now');
});

app.use('/api/auth', authRoutes);           // Register & Login
app.use('/api/protected', protectedRoutes); // Protected route with JWT

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
