# 21 Meals


![21 Meals](https://user-images.githubusercontent.com/35597953/44659842-e34f8d00-aa05-11e8-8f6e-dcf432928d0f.png)21Meals is a meal planner and a shopping organizer that makes creates 21 meals(one week) based one dietary needs, restrictions, calorie requirements and many more.

## Getting started

### Prerequisites

- [Node](https://nodejs.org/en/)
- [mySQL](https://www.mysql.com/)
- [npm](https://www.npmjs.com/)



### Running the server

1. #### Clone the repo.

   ```
   $ git clone https://github.com/isadorabk/21meals-server.git  
   $ cd 21meals-server
   ```

2. #### Install dependancies

   ```
   $ npm install
   ```

3. #### Connect mySQL database

   In the terminal, run:

   ```
   $ mysql --password -u <your username>
   ```



   When prompted, enter your mySQL password.



   Now create a new database:

   ```
   $ CREATE DATABASE <database name>;
   ```

4. #### Set up your .env file

   Set up your **.env** file following the structure of the **.env.example** file



## Usage

1. ### Start the server:

```
 $ cd 21meals-server  
 $ npm start
```



2. ### Postman collection

   Use the [21Meals.postman_collection.json](https://github.com/isadorabk/21meals-server/blob/develop/_docs/21meals.postman_collection.json) to test all API endpoints.


3. ### Set up the front end

   Go to [21Meals - client](https://github.com/isadorabk/21meals-client) and follow the instructions in the README.md file.
The original project which can be found [here](https://github.com/ctfrancia/21meals-server) provides excellent documentation on how to get the project up and running, including, photos of how the application looks.

While the original application was written using React and Redux, the application has been maintained as a mobil app, however, [Zain](https://github.com/zain-ali-syed) and myself decided to add additional functionality and make use of Angular7 and Material UI to enrich user experience, while altering very little of the existing back end structure to assist the new front end experience.

## Technologies used

Angular 7 - Material UI
