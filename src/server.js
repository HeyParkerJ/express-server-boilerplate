import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';


const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    paremeterLimit: 50000
  })
);

app.use(cors());

app.get('/healthcheck', (req, res) => {
    res.send(200, "Healthy");
});

const port = 1337;

app.listen(port, () => {
    console.log('App listening on port ' + port + '.');
});
