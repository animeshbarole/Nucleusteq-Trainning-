# SpringBoot Quiz Application #

## Introduction ##
This project is a Spring Boot backend for a quiz application. It provides an API for Creating Categories , Creating Questions 
and get the questions on the basis of Difficulty level and CategoryID.

## Features ##

- RESTful API : Built End Points for Creating and Posting questions 
- Database Integration : Seamless integration with database .
- Exceptional Handling : Robust error handling .

## Prerequisites ##

* Java 11 or higher
* Maven 3.6.0 or higher
* A running instance of MySQL (or any other supported database)

## Installation ##

1.**Clone the  Repository :**
```sh
git clone https://github.com/yourusername/NucleusTeq-Trainning 
cd capstoneProject1/quizApp
```
2. **Build the project using Maven:**
```sh
mvn clean install

```

## Configuration ##
Create application.properties in the resources package and 
Update the application.properties file located in src/main/resources with your database credentials:
```sh
spring.datasource.url=jdbc:mysql://localhost:3306/quizApp
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

```
## Running the Application ##
To run the application, use the following command:
```sh
mvn spring-boot:run

```
The application will start on http://localhost:8080.

## API Endpoints ##
Here are some of the main API endpoints available in the application:

* Categories APIs
   * Post : /api/v1/categories/save
   * Get  : /api/v1/categories/getAll

* Questions Apis
   * Post : /api/v1/questions/save
   * Get : /api/v1/questions/filter?difficultyLevel=""&categoryId=""

    

 




