# chatbot

AI-Powered Chatbot System
Project Title
AI-Powered Chatbot System Using Node.js, Express.js, HTML, CSS, JavaScript and JSON Dataset
________________________________________
1. Objective
The objective of this project is to develop an AI-powered chatbot system that can answer user queries instantly through a website interface.
The chatbot uses:
•	Rule-Based Logic
•	Predefined Dataset
•	Web Interface
•	Real-Time Communication
This project satisfies all the requirements specified in Task 4.
________________________________________
2. Task Requirements and Implementation
Requirement	Implementation
Design a chatbot using AI or rule-based logic	Implemented using rule-based logic with FAQ dataset
Enable instant responses	Express API returns responses immediately
Train chatbot using predefined datasets	FAQ dataset stored in faq.json
Integrate with website interface	HTML, CSS and JavaScript frontend
Optimize performance and engagement	Dataset searched before generating response
________________________________________
3. Technologies Used
Frontend
•	HTML
•	CSS
•	JavaScript
Backend
•	Node.js
•	Express.js
Dataset
•	JSON File (faq.json)
Additional Packages
•	express
•	cors
•	dotenv
________________________________________
4. Project Structure
chatbot/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── faq.json
├── .env
├── package.json
└── server.js
________________________________________
5. Working Architecture
User
  |
  v
Website Interface
  |
  v
JavaScript Fetch Request
  |
  v
Node.js Server
  |
  v
FAQ Dataset Search
  |
  +------ Found ------+
  |                   |
  v                   |
Return Answer         |
                      |
              Not Found
                      |
                      v
             Return Default Response
________________________________________
6. Code Explanation
________________________________________
File 1: package.json
Purpose:
This file manages project dependencies.
Example:
{
  "name": "ai-chatbot",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.21.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5"
  }
}
Explanation:
name
"name":"ai-chatbot"
Project name.
version
"version":"1.0.0"
Current version.
main
"main":"server.js"
Entry point of application.
dependencies
Contains required libraries.
________________________________________
File 2: faq.json
Purpose:
Stores predefined dataset used for chatbot training.
Example:
{
  "what is ai":"Artificial Intelligence is the simulation of human intelligence in machines.",
  "what is cloud computing":"Cloud computing provides computing services over the internet.",
  "what is docker":"Docker is a containerization platform."
}
Explanation:
•	Questions act as keys.
•	Answers act as values.
•	Chatbot searches dataset before generating response.
This satisfies:
Train chatbot using predefined datasets
________________________________________
File 3: server.js
Purpose:
Acts as backend server.
________________________________________
Import Libraries
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
Explanation:
dotenv
Loads environment variables.
express
Creates web server.
cors
Allows communication between frontend and backend.
fs
Reads faq.json file.
________________________________________
Create Application
const app = express();
Creates Express application.
________________________________________
Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
Explanation:
cors()
Allows browser requests.
express.json()
Reads JSON requests.
express.static()
Serves frontend files.
________________________________________
Read Dataset
const faqData = JSON.parse(
    fs.readFileSync("faq.json","utf8")
);
Explanation:
readFileSync()
Reads faq.json.
JSON.parse()
Converts JSON text into JavaScript object.
________________________________________
Chat API
app.post("/chat",(req,res)=>{
Creates POST API.
Frontend sends user message here.
________________________________________
Read User Input
const userMessage =
req.body.message.toLowerCase();
Explanation:
Reads message entered by user.
Example:
WHAT IS AI
becomes
what is ai
for easier matching.
________________________________________
Search Dataset
if(faqData[userMessage])
{
    return res.json({
        response:
        faqData[userMessage]
    });
}
Explanation:
Checks if question exists.
Example:
User:
what is ai
Searches:
"what is ai"
Returns:
Artificial Intelligence is the simulation of human intelligence in machines.
________________________________________
Default Response
return res.json({
response:
"Sorry, I don't have information about that topic."
});
Explanation:
Displayed when question not found.
________________________________________
Start Server
app.listen(3000,()=>{
console.log("Server Running");
});
Explanation:
Starts server on port 3000.
________________________________________
File 4: index.html
Purpose:
Creates chatbot interface.
Example:
<input id="message">
<button onclick="sendMessage()">
Send
</button>
Explanation:
Input Box
Used to enter message.
Send Button
Calls JavaScript function.
________________________________________
File 5: script.js
Purpose:
Handles communication between frontend and backend.
________________________________________
Read User Message
const message =
document.getElementById("message").value;
Gets message entered by user.
________________________________________
Send Request
fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message
})
})
Explanation:
Sends message to backend.
________________________________________
Receive Response
const data =
await response.json();
Reads chatbot response.
________________________________________
Display Response
chatBox.innerHTML +=
`<div>${data.response}</div>`;
Displays answer on screen.
________________________________________
File 6: style.css
Purpose:
Improves user interface.
Example:
.chat-container{
width:500px;
margin:auto;
}
Explanation:
Creates centered chatbot window.
________________________________________
7. Project Workflow
Step 1
User enters question.
Example:
what is ai
Step 2
JavaScript sends request to backend.
Step 3
Server receives request.
Step 4
Server searches faq.json.
Step 5
If found:
Return Answer
Otherwise:
Return Default Message
Step 6
Browser displays response.
________________________________________
8. Result
The chatbot successfully:
•	Accepts user queries.
•	Searches predefined dataset.
•	Generates instant responses.
•	Works through website interface.
•	Uses rule-based chatbot logic.
________________________________________
9. Conclusion
The AI-Powered Chatbot System was successfully developed using Node.js, Express.js, HTML, CSS, JavaScript and a predefined JSON dataset. The chatbot provides instant responses to user queries through a web interface and satisfies all Task 4 requirements including chatbot design, predefined dataset training, website integration and performance optimization.
This project demonstrates the implementation of a practical chatbot system that can be further enhanced with advanced AI models such as OpenAI or other large language models in future versions.

