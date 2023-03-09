const express = require('express');
const cors = require('cors');
const formRouter = require('./routes/content-form');
//const formResponsesRouter = require('./routes/content-form-responses');

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

app.use('/api/content-form', formRouter);
// app.use('/api/content-form-responses', formResponsesRouter);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
