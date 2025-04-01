const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello from John Doe's Web App");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
