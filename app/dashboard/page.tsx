// app/dashboard/page.tsx
'use client';

import React from 'react';
import Table from '../components/Table';
import { artistSubmissions } from '../../lib/data';
import TransitionWrapper from '../components/TransitionWrapper';

interface Submission {
  id: number;
  name: string;
  category: string;
  city: string;
  fee: string;
}

/**
 * ManagerDashboardPage component
 * Displays a dashboard for managers to view artist submissions
 * @returns {JSX.Element} - The ManagerDashboardPage component
 */
const ManagerDashboardPage = () => {
  const columns: {
    header: string;
    accessorKey: keyof Submission;
    cell?: (row: Submission) => React.ReactNode;
  }[] = [
    { header: 'Name', accessorKey: 'name' },
    { header: 'Category', accessorKey: 'category' },
    { header: 'City', accessorKey: 'city' },
    { header: 'Fee', accessorKey: 'fee' },
    {
      header: 'Action',
      accessorKey: 'id',
      cell: (row: Submission) => (
        <button
          onClick={() => alert(`Viewing submission of ${row.name} (ID: ${row.id})`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View
        </button>
      ),
    },
  ];

  return (
    <TransitionWrapper>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
        <Table data={artistSubmissions} columns={columns} />
      </div>
    </TransitionWrapper>
  );
};

export default ManagerDashboardPage;
