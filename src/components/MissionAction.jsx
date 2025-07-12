import React from 'react';

function MissionAction({ missionId, onUpdateStatus }) {
    return (
        <div>
            <button onClick={() => onUpdateStatus(missionId, 'Scheduled')}>Schedule</button>
            <button onClick={() => onUpdateStatus(missionId, 'Launched')}>Launch Mission</button>
            <button onClick={() => onUpdateStatus(missionId, 'Aborted')}>Abort Mission</button>
            <button onClick={() => onUpdateStatus(missionId, 'Completed')}>Complete Mission</button>
        </div>
    );
}

export default MissionAction;