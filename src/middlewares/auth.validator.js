const axios = require('axios');

const validateToken = async (req, res, next) => {
  console.log('here');
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  console.log('here');
  try {
    console.log('here');
    await axios.post('http://localhost:8000/auth/validate', {
      token,
    });
    console.log('here');
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  validateToken,
};
