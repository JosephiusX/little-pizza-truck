import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
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
  session({ // Use session here
    secret: keys.cookieKey, // Use your secret key here
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 1000, // Set cookie maxAge
    },
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

