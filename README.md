# AI-Powered Daily Journal

A full-stack journaling app with AI-generated summaries and mood detection.

## 🧠 Features

- Journal your daily thoughts
- Get an AI summary and mood analysis using OpenAI
- See all entries in a timeline

## 🚀 Tech Stack

- Flask (Backend)
- OpenAI API
- React (Frontend)
- Vercel / Render for deployment

## 💬 Sample Entry

**Journal**: "I felt a bit low today, things didn’t go my way. But I’m hopeful tomorrow will be better."

**Summary**: "The user felt down but remains hopeful."

## 🛠 Run Locally

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo "OPENAI_API_KEY=your_key" > .env
flask run
