const axios = require('axios');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    await axios.post('http://localhost:8000/auth/validate', {
      token,
    });
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  validateToken,
};
