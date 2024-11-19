BMI Calculator Web Application
This project is a BMI calculator web application built with Node.js, Express, and MongoDB.


Description
This BMI Calculator allows users to input their weight and height (in cm) to calculate their Body Mass Index (BMI). The application will also save the BMI records to a MongoDB database, which you can view or manage using MongoDB Compass or MongoDB Shell.



Features

BMI Calculation: Calculates BMI based on the user's weight and height.

Save BMI Records: Records the BMI calculation and status (Underweight, Normal, Overweight, Obesity) in a MongoDB database.

View BMI Records: You can view saved BMI records by connecting to the database through MongoDB Compass or MongoDB Shell.




Prerequisites

Node.js installed on your machine.

MongoDB installed and running locally or remotely.

Make sure MongoDB Compass or MongoDB Shell is accessible for database management.

Getting Started
Clone the Repository

bash
Copy code
git clone https://github.com/Mounesh-13/BMI-Calculator.git
Navigate to the project directory

bash
Copy code
cd BMI-Calculator
Install Dependencies

bash
Copy code
npm install
Start the Server

bash
Copy code
npm start
Access the Application
Open your browser and go to http://localhost:3000

Use the BMI Calculator

Input your weight and height in the specified fields.
Click "Calculate BMI" to get your BMI and save the record in the database.
Database
The application saves BMI records to a MongoDB database named bmi_calculator. You can view and manage records using:

MongoDB Compass (GUI tool).
MongoDB Shell (Command-line tool).
Sample Test Cases
Case 1

Input: Weight = 70 kg, Height = 175 cm.
Output: BMI = 22.86, Status = Normal Weight.
Case 2

Input: Weight = 45 kg, Height = 160 cm.
Output: BMI = 17.58, Status = Underweight.
Case 3

Input: Weight = 90 kg, Height = 160 cm.
Output: BMI = 35.16, Status = Obesity.
Troubleshooting
If the "Failed to fetch" error occurs:
Make sure your server (http://localhost:3000) is running.
Verify that CORS middleware is properly set up in the server configuration.
Database Issues: If the records are not saving correctly, double-check the MongoDB connection settings and ensure the database bmi_calculator is available.
