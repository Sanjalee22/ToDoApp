# ToDo App

## Introduction
This is an app to create a list of tasks. The user can assign task to different people and update the details of the task.
Visual Preview and User Flow

## Screens
### Home:
Displays the added tasks with color coding. Tasks which are done are green, pending are yellow and blocked are red.
 ![alt text](https://github.com/Sanjalee22/ToDoApp/blob/main/appScreens/HomeToDoApp.png "Home")

### Edit a Todo:
By clicking on Edit button on any task following form open up, with details of the task. User can edit the details and save. Close button will close the pop-up.
 ![alt text](https://github.com/Sanjalee22/ToDoApp/blob/main/appScreens/EditToDoApp.png "Edit a Todo Item")
 
### Todo Item Details:
By clicking on the Details button, a pop up with all the details of the task, like description, will open.
Close button will close the pop-up.
 ![alt text](https://github.com/Sanjalee22/ToDoApp/blob/main/appScreens/DetailsToDoApp.png "Details of a Todo Item")

### Delete an Item:
Delete button on the task will open the delete confirmation screen as shown  below. Clicking ‘Yes’ will delete the task. ‘Close’ will close the pop-up.
 ![alt text](https://github.com/Sanjalee22/ToDoApp/blob/main/appScreens/DeleteToDoApp.png "Delete a Todo Item")



## Validations
•	All the fields in the ‘Add Task’ form are required.
•	All the fields except description in ‘Edit Task’ form are required.

## Libraries and Packages
•	React – 17.0.2
•	React Testing Library
•	Lodash 
•	React Lazy
•	Tailwind CSS

## Unit Test
Unit tests for “TodoCreate” component.

## Running The Application

Download and unzip the app folder. There are two folders in the root folder:

### server: 
This is a simple json server to store the todo data.

### client: 
This folder contains the app frontend code.

Following are the steps to run the application
  1.	Browse to the server folder in command window. Run ‘npm start’.
  2.	Browse to the client folder in another command window. 
  3.	Run ‘npm install’ to install all the dependencies.
  4.	Run ‘npm start’. This will load the app in browser at localhost:3000.

To run unit tests, run "npm test" command.
  
## Future Enhancements and Improvements:
  1.	Add ‘Created Date’ field in tasks.
  2.	More unit test coverage
  3.	Improve validation messages. Messages can be customized based on the error.
  4.	Provide options to sort the tasks based on created date / due date.
  5.	Provide option to group the tasks based on status
