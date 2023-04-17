import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import keys from './config/keys.js';
import './models/User.js';
import './services/passport.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import authRoutes from './routes/authRoutes.js';

mongoose.connect(keys.mongoURI)

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]// the array allows option to provide multiple keys for extra security
  })
);

app.use(passport.initialize()); // these middleware run for every request
app.use(passport.session());

authRoutes(app); // Routes from authRoutes, Directly required instead of named

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT)

