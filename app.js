const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('CI/CD with Jenkins + Docker Works!'));
app.listen(port, () => console.log(`App running on port ${port}`));

