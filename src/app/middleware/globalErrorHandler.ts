/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express';

import { ZodError } from 'zod';
import { TErrorSource } from '../interface/error';
import handleZodError from '../error/handleZodError';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';
import handleDuplicateError from '../error/handleDuplicateError';
import AppError from '../error/appErrors';
import config from '../config';


const globalErrorhandler = (err: any, req: Request, res: Response, next: NextFunction) => {

  // set default error value

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  
  let errorSourse: TErrorSource = [{
    path: '',
    message: 'something went wrong',

  }]


  if (err instanceof ZodError) {

const simplifiedError = handleZodError(err)
   statusCode = simplifiedError?.statusCode;
   message = simplifiedError?.message;
   errorSourse = simplifiedError?.errorSourse  
  }else if(err?.name === 'ValidationError'){

    const simplifiedError= handleValidationError(err)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourse = simplifiedError?.errorSourse;
  }else if(err?.name === 'CastError'){
    const simplifiedError= handleCastError(err)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourse = simplifiedError?.errorSourse;
  }else if(err?.code === 11000){
    const simplifiedError= handleDuplicateError(err)
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSourse = simplifiedError?.errorSourse;
  } else if(err instanceof AppError){
    statusCode = err?.statusCode;
    message = err.message;
    errorSourse = [{
      path: "",
      message: err?.message,
    }];
  }else if(err instanceof Error){
    message = err.message;
    errorSourse = [{
      path: "",
      message: err?.message,
    }];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSourse,
    // err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
    
  })
}

export default globalErrorhandler


// common error handle pattern 
/*
success
message
errorSources: [
path: '' ,
message: ''
]
stack
 
*/