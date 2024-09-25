React Jira Application
This project is a Jira-like task management application developed using React. The main goal of this project was to deepen my understanding of core React concepts such as useState, useEffect, and Context API while integrating a backend to store persistent data.

Key Features:
Task Management: Users can create, update, and delete tasks. Each task is stored in a database, allowing users to maintain their task list across sessions.
Data Persistence: Even after leaving the page or refreshing, your tasks remain intact thanks to backend integration and persistent data storage.
API Integration with Axios:
I used Axios for making GET and POST requests to fetch and store data from the backend. This ensures that all tasks are dynamically loaded from the server and updates are pushed back to the database efficiently.
State Management with React Hooks: I leveraged useState and useEffect to manage component state and handle side effects, ensuring smooth rendering and task updates.
Context API for Global State: The Context API was used to pass data between components, simplifying state sharing across different levels of the app without prop drilling.
How It Works:
When the app loads, an initial GET request is made to fetch existing tasks from the backend.
Users can add a new task, which triggers a POST request to save the task to the database.
Tasks can be updated or deleted, and these actions are reflected immediately in the UI and saved to the backend.
Technologies Used:
React (for the frontend UI and state management)
Axios (for API requests to interact with the backend)
Backend (e.g., Node.js/Express, or any database to store tasks)
HTML/CSS (for responsive UI design)
This project gave me practical experience in integrating React with backend services, managing state across the app, and ensuring data persistence. Feel free to clone, explore, or contribute!
