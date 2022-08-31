const express = require('express');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routers/userRoutes');
const globalErrorHandler = require('./controllers/errorControler');
const AppError = require('./utils/appError');
const app = express();
app.use(express.json());
const cors = require('cors');

//////////////////

app.get(helmet());

// app.get(cors());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  const limiter = rateLimit({
    max: 100,
    windowsMS: 60* 60 * 1000,
    message: 'request kotaniz acmistir'
  });
  app.use('/api', limiter);

app.use('/api/v1/users', userRouter);




app.all('*',(req, res, next) => {
    // res.status(404).json({
    //     status: 'basarisiz',
    //      message: `${req.originalUrl} bulunmamaktadir`
    //  });
    // const err = new Error(`${req.originalUrl} bulunmamaktadir`);
    // err.status = 'basarisiz';
    // err.statusCode = 404;
    next(new AppError(`${req.originalUrl} bulunmamaktadir`, 404));
});



app.use(globalErrorHandler );

module.exports = app;
