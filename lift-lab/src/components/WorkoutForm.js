import React, { useState } from 'react';

const WorkoutForm = ({ onSubmit }) => {
  const [workoutName, setWorkoutName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: workoutName }),
    });
    const data = await response.json();

    onSubmit(data);

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
