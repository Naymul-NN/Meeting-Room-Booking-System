import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorhandler from './app/middleware/globalErrorHandler';
import notFoundRoute from './app/middleware/notFound';

const app: Application = express();

// parsar
app.use(express.json());
app.use(cors());


// application routes
app.use('/api', router);

const getAController =  (req: Request, res: Response) => {
  res.send("i love you allah");
}

app.get('/', getAController);

// error handle 
app.use(globalErrorhandler);

// not found error

app.use(notFoundRoute)

export default app;
