# 🤖 AI & ML Trivia Hub

A full-stack web application that serves interesting facts about Artificial Intelligence and Machine Learning.
Built as part of the **Assessment Beni001**.

## 🚀 Live Demo
* **Frontend (React):** [Click here to view the App](http://ai-trivia-frontend-assessment.s3-website.ap-south-1.amazonaws.com/)
* **Backend API (Django):** [Click here to view the API](http://ai-trivia-env.eba-nkhvmyhc.us-west-2.elasticbeanstalk.com/api/facts/)

---

## 🛠 Application Development Process
Here is a step-by-step breakdown of how I built and deployed this application:

### **1. Backend Development (Django)**
* **Setup:** Initialized a Django project with a virtual environment to manage dependencies.
* **API Construction:** Created a `facts` app and used **Django REST Framework (DRF)** to serialize trivia data into JSON format.
* **Data Management:** Used SQLite for local development to store initial trivia facts about AI history.
* **CORS Configuration:** Installed `django-cors-headers` to allow the React frontend to communicate securely with the backend API.

### **2. Frontend Development (React)**
* **Initialization:** Bootstrapped the project using `create-react-app`.
* **Component Design:** Built a responsive card-based UI to display trivia facts.
* **State Management:** Used React Hooks (`useState`, `useEffect`) to fetch data asynchronously from the Django API.
* **Styling:** Implemented a dark-mode aesthetic with neon accents using raw CSS for a clean, modern look.

### **3. Cloud Deployment (AWS)**
* **Backend Deployment:**
    * Configured **AWS Elastic Beanstalk** (Python 3.11 platform) to host the Django application.
    * Created a `Procfile` to manage the Gunicorn server process.
    * Resolved dependency issues by creating a clean `requirements.txt` specifically for the Linux environment.
* **Frontend Deployment:**
    * Built the React application for production (`npm run build`).
    * Uploaded static assets to **AWS S3** and enabled static website hosting.
    * Configured a Bucket Policy to allow public read access.

---

## 💡 What I Learnt in This Exercise
This assessment was a significant learning experience in **Full Stack Cloud Deployment**. Key takeaways include:

1.  **Solving "It Works on My Machine":**
    * I learned that local environments (Mac/Windows) behave differently from cloud servers (Linux). Specifically, I learned how to debug **Cross-Platform Dependency errors** by stripping `requirements.txt` of system-specific packages like `pyobjc` or `pywin32`.

2.  **Production Server Configuration:**
    * I learned the importance of the **Procfile** in AWS Elastic Beanstalk. Unlike local development (`python manage.py runserver`), production environments require a robust WSGI server like **Gunicorn** to handle requests efficiently.

3.  **React Routing & Relative Paths:**
    * I encountered and fixed a "White Screen" issue on deployment. I learned that adding `"homepage": "."` to `package.json` is critical for ensuring React can find its static assets (JS/CSS) when hosted in a subdirectory or S3 bucket.

4.  **CORS & Security:**
    * I gained a deeper understanding of **Cross-Origin Resource Sharing (CORS)**. Connecting a frontend hosted on one domain (S3) to a backend on another (Elastic Beanstalk) requires strict whitelisting to prevent security errors.

---

## ⚙️ Local Installation Guide

If you want to run this project locally:

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/Ismaielsuttu/ai-ml-trivia-hub.git](https://github.com/Ismaielsuttu/ai-ml-trivia-hub.git)
    ```

2.  **Run the Backend:**
    ```bash
    cd backend
    pip install -r requirements.txt
    python manage.py runserver
    ```

3.  **Run the Frontend:**
    ```bash
    cd frontend
    npm install
    npm start
    ```