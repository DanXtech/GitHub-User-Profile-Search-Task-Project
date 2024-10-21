# GitHub User Profile Search

This project is a web application that allows users to search for GitHub profiles and view user information along with their repositories. It's built using Next.js and TypeScript, with a beautiful UI powered by Tailwind CSS and shadcn/ui components.

## Features

- Search for GitHub users by username
- Display user profile information including avatar, name, bio, and location
- List user's public repositories with pagination
- Show repository details such as description, star count, and fork count
- Responsive design for various screen sizes
- Error handling for API requests and user-friendly error messages

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - React components used throughout the application
- `lib/` - Utility functions and shared code
- `public/` - Static assets

Key components:

- `SearchForm.tsx` - Handles user input for GitHub username search
- `UserProfile.tsx` - Displays user profile information
- `RepositoryList.tsx` - Fetches and displays user repositories with pagination

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/github-user-profile-search.git
   ```

2. Install dependencies:

   ```
   cd github-user-profile-search
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project can be easily deployed to Vercel Simply connected to my GitHub repository.

