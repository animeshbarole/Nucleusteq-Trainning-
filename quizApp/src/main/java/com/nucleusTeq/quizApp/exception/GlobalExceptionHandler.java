package com.nucleusTeq.quizApp.exception;


import com.nucleusTeq.quizApp.payload.ErrorResponse;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

      @ExceptionHandler(DataIntegrityViolationException.class)
      public ResponseEntity<ErrorResponse> handleDuplicateEntry(DataIntegrityViolationException ex)

      {
            String message = ex.getMessage();
            ErrorResponse errorResponse = new ErrorResponse(message,false);
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);

      }
      @ExceptionHandler(MissingParameterException.class)
      public  ResponseEntity<ErrorResponse> handleMissingParameter(MissingParameterException ex)
      {
            String message = ex.getMessage();  // Use specific message from exception
            ErrorResponse errorResponse = new ErrorResponse(message, false);
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
      }

      @ExceptionHandler(EmptyListException.class)
      public ResponseEntity<ErrorResponse> handleEmptyList(EmptyListException ex)
      {
            String message = ex.getMessage();
            ErrorResponse errorResponse = new ErrorResponse(message,false);
            return  new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);

      }
}
