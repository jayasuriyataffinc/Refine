import express, { Request, Response } from 'express';
import router from './routes/routes';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", router)
// app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173',
}));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
