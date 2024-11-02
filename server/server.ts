import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/api/device-info', (req: Request, res: Response) => {
    const deviceInfo = req.body;
    console.log("Device Info:", deviceInfo);
    res.sendStatus(200);
});

app.post('/api/google-info', (req: Request, res: Response) => {
    const googleInfo = req.body;
    console.log("Google Info:", googleInfo);
    res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
