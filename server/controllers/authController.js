// controllers/authController.js
const jwt = require('jsonwebtoken');

// This simulates a temporary in-memory database
const mockUsers = [];

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = mockUsers.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password // Note: plain password here, we'll hash it when we connect MongoDB
  };

  mockUsers.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey', { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
};

module.exports = { registerUser, loginUser };
