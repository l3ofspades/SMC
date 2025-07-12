import React, { useState } from 'react';
import MissionCard from './MissionCard';
import MissionAction from './MissionAction';
import MissionFilter from './MissionFilter';

function MissionControl({ missions }) {
  const [missionList, setMissionList] = useState(missions);
  const [filter, setFilter] = useState("All");

  const handleStatusUpdate = (id, newStatus) => {
    setMissionList(prev =>
      prev.map(m => (m.id === id ? { ...m, status: newStatus } : m))
    );
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  // **This line was missing — define filteredMissions here!**
  const filteredMissions = missionList.filter(mission =>
    filter === "All" ? true : mission.status === filter
  );

  return (
    <div>
      <h1>Space Mission Control Dashboard</h1>
      <MissionFilter onFilterChange={handleFilterChange} />
      {filteredMissions.map(mission => (
        <div key={mission.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <MissionCard mission={mission} />
          <MissionAction missionId={mission.id} onUpdateStatus={handleStatusUpdate} />
        </div>
      ))}
    </div>
  );
}

export default MissionControl;
