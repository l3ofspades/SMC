import React from 'react';

function MissionCard({ mission }) {
    return ( 
        <div>
            <h2>{mission.name}</h2>
            <p>Status: {mission.status}</p>
            <p>Crew:</p>
            <ul>
                {mission.crew.length > 0 ? (
                    mission.crew.map((member, index) => <li key={index}>{member}</li>)
                ) : (
                    <li>No crew assigned</li>
                )}  
            </ul>
            </div>
    );
}
    
export default MissionCard;