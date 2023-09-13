import { fileURLToPath } from 'url';
import express, { json } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(json());

app.use((req, res, next) => {
    if (req.url.startsWith('/api')) {
      req.url = req.url.substring(4);
      console.log(req.url);
    }
    next();
  })
  

/*   app.get('/*', async function (req, res) {  UNCOMMENT IF HOSTING THE REACT FRONT END
    const homePath = path.join(__dirname, "./client/dist/index.html");
    res.sendFile(homePath);
  });
 */  
  app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
  });
  
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
  