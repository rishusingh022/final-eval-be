const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());


app.use('/api', routes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
