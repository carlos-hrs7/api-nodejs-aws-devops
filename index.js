const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A API está executando na Cloud AWS! Deploy automatizado com CodePipeline!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});