import React from 'react';
import MissionControl from './components/MissionControl';

const missions = [
  {
    id: 1,
    name: "Apollo 11",
    status: "Scheduled",
    crew: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"]
  },
  {
    id: 2,
    name: "Voyager 1",
    status: "Launched",
    crew: []
  },
  {
    id: 3,
    name: "Mars 2020",
    status: "Scheduled",
    crew: ["Perseverance", "Ingenuity"]
  }
];

function App() {
  return (
    <div className="App">
      <MissionControl missions={missions} />
    </div>
  );
}

export default App;
