# Nutritional Analysis App

## Introduction
A calorie counting app without any of the fluff. Track recipe calorie values with ease by using the NutritionX database to analyze and calculate calories for any recipe.

## Technical Architecture

Our project is built completely with javascript. We used react native to develop our frontend, and node.js to develop our backend. All of our data is saved within a MongoDB database that is contacted by the backend.

## Installation Instructions

### Backend
To run the backend server, please ensure that node.js is installed on your computer.

CD into th`e backend folder and run `npm install` to install all necessary dependencies.

From there, run `node .` to start the backend server, which can be reached on the specified localhost port.

**NOTE** a .env file is needed to properly access a mongoDB runtime, please create one with the following credentials:
- MONGO_USERNAME
- PASSOWORD
- PORT


### Frontend
To run the frontend service, please ensure that expo go is installed on a mobile device.

CD into the frontend folder and `run npm install` to install all necessary dependencies.

From there, running `npx expo start` should launch the expo go runtime, which can be accessed by scanning a QR code on the mobile device with expo go installed.

**NOTE:** A .env file is needed to properly call backend features. Please create one with the following credentials:
- ENDPOINT


## Group Members
Developed by Anila Chundi(basic page setup + nutritionix api call/ data parsing), Navomi Byju (basic page setup + api calls from frontend), Jericho Calago (login context + basic backend CRUD), Linnea Marsh (basic backend CRUD + frontend recipe struct modeling)