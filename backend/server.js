import express from 'express';
import 'dotenv/config'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("I'm working bro...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});