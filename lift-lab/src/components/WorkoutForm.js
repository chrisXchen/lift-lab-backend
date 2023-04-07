import React, { useState } from 'react';

const WorkoutForm = ({ onSubmit }) => {
  const [workoutName, setWorkoutName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(workoutName);
    setWorkoutName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Workout</h2>
      <label htmlFor="workout-name">Workout Name:</label>
      <input
        id="workout-name"
        type="text"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default WorkoutForm;
