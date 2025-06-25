    // components/MySlowComponent.tsx
    'use client';
    import React from 'react';

    /**
    * MySlowComponent component
    * A slow loading component for testing purposes
    * @returns {JSX.Element} - The MySlowComponent component
    */
    const MySlowComponent = () => {
      // Simulate a slow loading component
      const [data, setData] = React.useState(null);

      React.useEffect(() => {
        const fetchData = async () => {
          // Simulate an API call or other time-consuming operation
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setData("Data loaded successfully!");
        };

        fetchData();
      }, []);

      if (!data) {
        return <p>Loading data...</p>;
      }

      return (
        <div>
          <p>{data}</p>
          {/* Rest of your component logic */}
        </div>
      );
    };

    export default MySlowComponent;
