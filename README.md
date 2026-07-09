# Qurbani Hat 🐄

**The Smartest Way to Book Your Qurbani.**

A modern, full-featured web application for browsing, filtering, and booking animals for Qurbani (Eid al-Adha sacrifice). Built with Next.js 16, Tailwind CSS, and MongoDB.

Live Demo: [https://qurbani-hat-nine.vercel.app/](https://qurbani-hat-nine.vercel.app/)

## ✨ Features

- **Beautiful UI/UX** with dark/light theme support
- **Animal Browsing** - View all available animals with details (price, weight, category, etc.)
- **Filtering & Sorting** - Filter by category (Cow, Goat, etc.) and sort by price
- **User Authentication** - Login/Register with Better Auth + MongoDB
- **Responsive Design** - Mobile-first design with smooth animations
- **Profile Management** - User dashboard
- **Toast Notifications** - Real-time feedback
- **Modern Tech Stack** - Latest Next.js App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + HeroUI components
- **Authentication**: Better Auth with MongoDB adapter
- **Database**: MongoDB
- **UI Library**: @heroui/react
- **Icons**: React Icons + Gravity UI
- **Animations**: Animate.css + React Spring
- **Notifications**: React Toastify

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/md-moynul/qurbani-hat.git
   cd qurbani-hat
2. **Install dependencies**
   ```bash
   npm install
3. **Environment Variables**
   ```bash
   MONGODB_URI=your_mongodb_connection_string_here
   # Add any other required environment variables
3. **Run the development server**
   ```bash
   npm run dev
## 📁 Project Structure
   ```bash
   qurbani-hat/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth pages
│   │   ├── (main)/             # Main app pages
│   │   │   ├── animals/        # Animals listing
│   │   │   └── page.jsx        # Homepage
│   │   ├── layout.js
│   │   └── globals.css
│   ├── components/             # Reusable components
│   │   ├── home/               # Banner, TopAnimal, etc.
│   │   ├── allAnimals/         # Category, sorting
│   │   └── shared/             # Navbar, AnimalCard, Footer
│   ├── lib/                    # Data, utilities, auth
│   ├── providers/              # Theme & other providers
│   └── assets/                 # Images, logos
├── public/                     # Static files
└── package.json
