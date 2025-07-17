const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Implantação de API simples em Cluster ECS na AWS e deploy automatizado com Code Pipeline (CI/CD)');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});