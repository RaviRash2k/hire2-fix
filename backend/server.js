import express from 'express';
import cors from 'cors';
import { conn } from './config/db.js';
import 'dotenv/config'
import userRoute from './routes/userRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//DB connection
conn();

//routes
app.use("/uploads", express.static("uploads"));
app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});