import express from 'express';
import cors from 'cors';
import { conn } from './config/db.js';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//DB connection
conn();

//routes
app.get('/', (req, res) => {
    res.send("I'm working bro...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});