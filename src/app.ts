import express from 'express';
import { json, urlencoded } from 'body-parser';
import { createLogger, transports, format } from 'winston';
//@ts-ignore
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Logger setup
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
    ],
});

// Middleware setup
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes setup
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Export the app
export default app;