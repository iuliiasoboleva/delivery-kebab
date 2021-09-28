require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// Session
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sConfig = {
  name: 'uSID',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET || 'TEST',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 10,
  },
};

// CORS
// const cors = require('cors');
// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:4000'],
//   optionsSuccessStatus: 200,
//  };

// app.use(cors(corsOptions));

// HBS
app.set('view engine', 'hbs');

// Session use
app.use(session(sConfig));
app.use(cookieParser());

// Static, req.body, json
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(require('./middlewares/defaultTitle'));
app.use(require('./middlewares/checkAutorize'));

// Routes
app.use('/', require('./routes/index.route'));
app.use('/cabinet', require('./routes/cabinet.route'));
app.use('/product', require('./routes/product.route'));

// Start
app.listen(PORT, () => {
  console.log('Run... PORT:', PORT);
});
