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
            String message = "Duplicate entry 'General Knowledge' for key";
            ErrorResponse errorResponse = new ErrorResponse(message);

            return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);

      }
}
