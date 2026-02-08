# AI & ML Trivia Hub 🤖

A full-stack web application that serves interesting facts about Artificial Intelligence and Machine Learning. 
Built as part of the Intern Technical Assessment.

## 🚀 Tech Stack
- **Backend:** Python (Django, Django REST Framework)
- **Frontend:** JavaScript (React.js)
- **Deployment:** Microsoft Azure

## 🛠️ How I Developed This
1. **Backend:** Created a Django REST API (`/api/facts`) that serves a JSON list of hardcoded facts about AI history.
2. **Frontend:** Built a React interface that fetches this data using `useEffect` and displays it in a responsive, dark-mode card layout.
3. **Integration:** Configured CORS (Cross-Origin Resource Sharing) to allow the React frontend to communicate securely with the Python backend.

## 💡 What I Learned
- How to connect a Python backend with a JavaScript frontend using REST APIs.
- The importance of CORS middleware when separating frontend and backend services.
- How to structure a full-stack project for cloud deployment.