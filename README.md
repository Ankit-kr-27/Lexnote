# LexNote ✍️📘

> **AI-Powered Notes, Instantly Generated**  
> LexNote is a modern web application that transforms any topic into structured, high-quality study notes using AI — complete with charts, diagrams, and downloadable PDFs.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://lexnote.onrender.com/)
![License](https://img.shields.io/badge/license-proprietary-blue.svg)
![Node](https://img.shields.io/badge/node-v18%2B-green.svg)
![React](https://img.shields.io/badge/react-v18%2B-blue.svg)

---

## 📖 Project Overview

LexNote is a full-stack AI-driven web application designed to eliminate the manual effort of creating study notes. Users simply provide a topic, and the platform generates well-structured notes enriched with visual elements such as charts and diagrams. The system operates on a secure, credit-based model with integrated payments and provides a smooth, intuitive user experience.

The project demonstrates real-world SaaS concepts including authentication, payments, AI integration, and scalable backend architecture.

---

## ✨ Key Features

- **🤖 AI-Powered Note Generation**  
  Generate structured notes from any topic using AI.

- **📊 Visual Enhancements**  
  Automatically includes charts and diagrams for better understanding.

- **💳 Credit-Based Payments**  
  Users purchase credits to generate notes via integrated payment flow.

- **🔐 Secure Authentication**  
  Google OAuth-based login for seamless and secure access.

- **📄 PDF Export**  
  Download generated notes as professionally formatted PDFs.

- **🕒 Notes History**  
  Access previously generated notes and track usage.

- **🎨 Smooth User Experience**  
  Framer Motion animations for modern, polished UI interactions.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Framer Motion
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT-based session handling
- Google OAuth

### AI & Utilities
- AI-powered content generation
- Chart & diagram rendering
- PDF generation

### Deployment
- Render (Production)

---

## 🏗️ System Architecture

LexNote follows a **client–server architecture** with clear separation of concerns:

1. **Client (Frontend)**  
   Handles user input, animations, topic submission, and note visualization.

2. **Server (Backend)**  
   Manages authentication, credit validation, payments, AI requests, PDF generation, and database operations.

3. **Database**  
   Stores user profiles, generated notes, credit usage, and transaction history.

**High-Level Flow:**  
`User → React Frontend → Express API → AI Service / Database → Response`

---

## 📡 API Overview

| Module | Base Route | Description |
|------|-----------|-------------|
| **Auth** | `/auth` | Google authentication and session handling |
| **Pricing** | `/pricing` | Credit plans and payment processing |
| **Notes** | `/notes` | AI-based note generation |
| **History** | `/history` | User notes and credit usage history |

---

## 🌐 Live Demo

Experience the application here:  
🔗 **https://lexnote.onrender.com/**

> The live deployment demonstrates the complete AI workflow, payment system, and user experience.

---

## 🎯 Design & UX Focus

- Clean, distraction-free layout optimized for studying
- Motion-based feedback using Framer Motion
- Responsive design across devices
- Optimized backend calls to reduce AI generation latency

---

## 🔮 Future Enhancements

- Topic difficulty and depth selection
- Advanced note formatting controls
- Collaborative note sharing
- Multiple export formats
- Mobile-first UI improvements

---

## 🧠 Resume Highlights

- Designed and built a full-stack AI-powered SaaS-style web application
- Integrated AI-driven content generation with charts and diagrams
- Implemented secure Google OAuth authentication
- Built a credit-based payment system for controlled AI usage
- Deployed a production-ready application with modern UX principles

---

## 📄 License

This project is proprietary and intended solely for portfolio and resume demonstration purposes.
