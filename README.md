# 🤖 AI & ML Trivia Hub

A full-stack web application that serves interesting facts about Artificial Intelligence and Machine Learning.
Built as part of the Intern Technical Assessment.

## 🚀 Live Demo
**[Click here to view the Live App](http://ai-trivia-frontend-assessment.s3-website.ap-south-1.amazonaws.com/)**

## 🛠 Tech Stack
* **Frontend:** React.js (hosted on AWS S3)
* **Backend:** Python Django REST Framework (hosted on AWS Elastic Beanstalk)
* **Cloud:** Amazon Web Services (AWS)

## ⚙️ Features
* **REST API:** Django backend serves JSON data via `/api/facts/`.
* **Dynamic UI:** React frontend fetches data using `useEffect` and `fetch`.
* **Cloud Deployment:** Fully deployed on AWS infrastructure.
* **CORS Configuration:** Secure communication between S3 frontend and Elastic Beanstalk backend.

## 📦 How to Run Locally
1. Clone the repo.
2. **Backend:** `cd backend` -> `pip install -r requirements.txt` -> `python manage.py runserver`
3. **Frontend:** `cd frontend` -> `npm install` -> `npm start`