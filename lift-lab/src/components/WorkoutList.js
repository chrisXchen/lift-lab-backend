import React, { useEffect, useState } from 'react';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000/api/workouts');
      const data = await response.json();
      setWorkouts(data);
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>My Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;

