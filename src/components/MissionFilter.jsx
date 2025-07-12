import React from 'react';

const statuses = ['All', 'Scheduled', 'Launched', 'Aborted', 'Completed'];

function MissionFilter({ onFilterChange }) {
  return (
    <div>
      <h3>Filter Missions by Status:</h3>
      {statuses.map(status => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          style={{ marginRight: '0.5rem' }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default MissionFilter;
