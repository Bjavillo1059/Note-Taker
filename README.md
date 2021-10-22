#Note Taker

## Description
This application will uses Express.js for the backend. A User can save and retrieve note data from a JSON file. A User can write and save notes to keep track of anything the User wants to complete

## Instructional
Screen shot of installation:

### how to start server -
<img src="./public/assets/img/SS of start instructional.PNG" alt="Snip of start"/>

### Step by Step Demo
[Demo Video](https://watch.screencastify.com/v/72jhY8Al8b6qYIhN0Xye)

## Contact Info
please contact me at [brandonjavillo@gmail.com](brandonjavillo@gmail.com)

## Process of Operations
As User I need to start my server.  Attached above is a step by step snip of the VS code install and Demo video.  You will start by opening your Note-Taker file in VS Code, ensuring that you are on the server.js file open your terminal.  In the terminal a User will type out npm install or npm i, to require all the dependencies for the application.  Once the install is complete, a User will then type npm start to start the application on localhost: PORT 3001.  The User will know the server is up when the terminal displays "App server listening on port 3001!" A User will then open a browser window and type in the url bar localhost:3001. The application will display with the homepage.  A User will then click "Get Started" and will be sent to the Note Taker application function.  A User can input a title, make notes on that title and save it.  Multiple saves can be done, but the saved notes will only show the last 5 notes that were saved.  The User can also delete notes as they see fit.


## App Criteria
### GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to "Get Started"
WHEN I click on the link "Get Started"
THEN I am presented with a page with a left-hand column for saved notes, 
plus empty fields in the right-hand column to enter a new note title and the note’s text 
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand 
column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the 
note’s text in the right-hand column
WHEN I click on the trash symbol in the left-hand column 
THEN The asscociated note will be deleted