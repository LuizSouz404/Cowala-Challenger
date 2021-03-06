import express from 'express';
import swaggerUI from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import { handleErrors } from './middleware/middleware';

import { router } from './routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);
app.use(handleErrors);

app.listen(3333, () => console.log('Server is running on port 3333'));
