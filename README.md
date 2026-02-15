# 🌅 Good Morning App

A full-stack web application built to demonstrate frontend, backend, and database integration using modern tools.

Application link: https://youtu.be/4qxe7JJxqhE?si=smMp_BgAHsplF8nO
---

## 🚀 Tech Stack

### Frontend
- React.js (Vite)
- HTML5, CSS3
- Responsive UI (Desktop & Mobile)

### Backend
- Node.js
- Express.js (REST API)

### Database
- PostgreSQL (Local setup)
- SQL schema version controlled

---

## ✨ Features

- Good Morning landing page
- Responsive user form (Name, Phone, Email)
- REST API for data submission
- Secure PostgreSQL data storage
- Clean Git commit history

---

## 📂 Project Structure

---

## 🧪 API Endpoint

### POST `/api/users`

**Request Body**
```json
{
  "name": "Sujeet",
  "phone": "9999999999",
  "email": "sujeet@test.com"
}
Response

{
  "id": 1,
  "name": "Sujeet",
  "phone": "9999999999",
  "email": "sujeet@test.com",
  "created_at": "2026-02-15T12:30:00.000Z"
}
🛠️ How to Run Locally
Backend
cd server
npm install
npm run dev
Frontend
cd client
npm install
npm run dev
