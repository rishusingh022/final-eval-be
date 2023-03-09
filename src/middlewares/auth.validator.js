const axios = require('axios');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { data } = await axios.post('http://localhost:8000/auth/validate', {
      token,
    });
    req.user = data;
    next();
  } catch (error) {
    console.log(token);
    console.error(error);
    return res.status(401).json({ message: error.message });
  }
};

module.exports = validateToken;
