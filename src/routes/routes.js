const authValidator = require('../middlewares/auth.validator');
const router = require('express').Router();

router.get('/', authValidator, (req, res) => {
  console.log(req.user.data.username);
  res.sendStatus(200);
});

module.exports = router;
