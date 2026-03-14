# NotesApp

A simple, full-stack Notes Application built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **MongoDB**.

## 🚀 Features

- **Create Notes:** Easily draft and save notes with a title and content.
- **RESTful API:** Dedicated Next.js Route Handlers (`app/api/notes`) to manage backend functionality.
- **MongoDB Integration:** Schema validation and database connection handled via `mongoose`.
- **Modern UI:** Clean, responsive styling utilizing Tailwind CSS.
- **Next.js App Router:** Built using the latest App Router paradigm.

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** Next.js API Routes (Route Handlers)
- **Database:** [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)

## 📂 Project Structure

- `app/api/notes`: Contains the backend API endpoints (`GET` and `POST` requests).
- `app/page.js`: The main server component rendering the home page.
- `components/`: Contains interactive React client components like `<NotesClient />`.
- `models/`: Mongoose schemas defining the structure of a `Note` document.
- `lib/`: Utility files including the MongoDB connection script `db.js`.

## ⚙️ Getting Started

### Prerequisites

You will need the following installed on your machine:
- **Node.js** (v18.x or newer recommended)
- **MongoDB** (A local instance or a MongoDB Atlas URI)

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd notesapp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Environment Variables**:
   Create a `.env` (or `.env.local`) file in the root directory and add your MongoDB connection string.
   ```env
   MONGODB_URI=your_mongodb_connection_string_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the App**:
   Navigate to [http://localhost:3000](http://localhost:3000) with your browser to explore the app.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is open-source and available under the MIT License.
