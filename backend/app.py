from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")

journal_entries = []

@app.route("/journal", methods=["POST"])
def add_journal_entry():
    data = request.get_json()
    text = data["text"]
    
    prompt = f"Summarize this journal and detect the mood:\n{text}\n\nSummary and mood:"
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=prompt,
        max_tokens=100
    )
    
    summary = response.choices[0].text.strip()
    
    entry = {
        "id": len(journal_entries) + 1,
        "text": text,
        "summary": summary,
        "timestamp": datetime.now().isoformat()
    }
    journal_entries.append(entry)
    return jsonify(entry), 201

@app.route("/journal", methods=["GET"])
def get_journal_entries():
    return jsonify(journal_entries)
