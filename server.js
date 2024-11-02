const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/api/device-info', (req, res) => {
    const deviceInfo = req.body;
    console.log("Device Info:", deviceInfo);
    res.sendStatus(200);
});

app.post('/api/google-info', (req, res) => {
    const googleInfo = req.body;
    console.log("Google Info:", googleInfo);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
