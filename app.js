import express from 'express';
const app = express();
import tasks from './routes/tasks.js';
import connectDB from './db/connect.js';
import dotenv from "dotenv";
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// middleware

dotenv.config();

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
