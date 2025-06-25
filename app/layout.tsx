// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './contexts/ThemeContext'; // Import ThemeProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artistly.com',
  description: 'Performing Artist Booking Platform',
};

/**
 * RootLayout component
 * The root layout for the entire app
 * @param {{ children: React.ReactNode }} { children } - Props for the component
 * @returns {JSX.Element} - The RootLayout component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire app with ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

