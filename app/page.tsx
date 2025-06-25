'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './components/ui/button';
import { useTheme } from './contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const categories = [
    { title: 'Singers', description: 'Find talented singers for your event.' },
    { title: 'Dancers', description: 'Book amazing dancers to entertain your guests.' },
    { title: 'Speakers', description: 'Invite inspiring speakers to engage your audience.' },
    { title: 'DJs', description: 'Hire professional DJs to keep the party going.' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 h-20">
        <div className="container mx-auto flex items-center justify-between px-6 h-full">
          {/* Left nav links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg font-bold text-gray-900 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Home
            </Link>
            <Link
              href="/artists"
              className="text-gray-700 dark:text-gray-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Artists
            </Link>
            <Link
              href="/onboarding"
              className="text-gray-700 dark:text-gray-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Onboarding
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Dashboard
            </Link>
          </div>

          {/* Right side theme toggle */}
          <Button
            onClick={toggleTheme}
            variant="outline"
            className="flex items-center gap-2"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="container mx-auto pt-20 pb-10 px-6 sm:px-8 lg:px-10">
        <header className="mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Find the Perfect Artist for Your Event
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Browse through artist profiles, shortlist your preferences, and raise booking requests.
          </p>
          <Button asChild variant="default">
            <Link href="/artists">Explore Artists</Link>
          </Button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ title, description }) => (
            <div
              key={title}
              className="category-card bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-300 hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

