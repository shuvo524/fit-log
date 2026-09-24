# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion. Browse a library of twelve lifts, open a workout to see its full breakdown, lock it into today's plan, save it for later, and watch your minutes and calories add up.

**Live Link:** https://fit-log-website.vercel.app/
**Repository:** https://github.com/shuvo524/fit-log

## ✨ Features

1. **Workout Library:** twelve workouts fetched from a live API, shown as cards with muscle-group tags, equipment, duration, calories and rating.
2. **Detailed Workout Page:** a two-column layout with a large image, description, spec table (equipment, difficulty, sets, reps, duration, calories, rating) and step-by-step instructions.
3. **Today's Plan and Saved lists:** add a lift to today's plan or save it for later, with live counters in the navbar and toast notifications.
4. **My Plan dashboard:** live stats for exercises, minutes and calories, tabs for Today's Plan and Saved, and a friendly empty state.
5. **Mark as Done, Remove and Sort By:** finish or remove lifts from your plan and sort the list by duration, calories or rating.
6. **5-lift daily cap:** the "Add to today's plan" button is disabled once the plan has five lifts.
7. **Persistent data:** plan, saved and done lists are stored in `localStorage`, so they survive a page reload.
8. **Fully responsive:** works on mobile, tablet and desktop, with a custom 404 page and loading states.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- [react-hot-toast](https://react-hot-toast.com/) for toast notifications
- React Context API for state management
- Deployed on Vercel

## 🚀 Getting Started

```bash
git clone https://github.com/<your-username>/fitlog.git
cd fitlog
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/            # Routes: home, workout details, my-plan, 404
├── components/     # Navbar, Hero, WorkoutCard, PlanItem, etc.
├── context/        # PlanContext (plan, saved, done state)
├── lib/            # API helpers
├── types/          # TypeScript types
└── assets/         # Logo and banner images
```
