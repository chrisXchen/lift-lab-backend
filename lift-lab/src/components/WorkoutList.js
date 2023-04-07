import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <h2>My Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
