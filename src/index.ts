import express from 'express';
import { router } from './routes/routes';
import connects from './config/db';
import swaggerJsDocs from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import bodyParser from 'body-parser'

const app = express();
const PORT = 4011


const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'CRUD API Documentation',
        version: '1.0.0',
      },

    },
    apis: ['./src/routes/*.ts'], 
  };
  app.use(bodyParser.json());
  app.use('/', router)

const swaggerDocs = swaggerJsDocs(swaggerOptions)
app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))

connects();
app.listen(PORT, ():void=>(
    console.log(`Server is running on ${PORT}`)   
))
