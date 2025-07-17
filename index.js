const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A API está funcionando na cloud da AWS com deploy automatizado!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});