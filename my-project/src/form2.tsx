import React, { useState } from "react";

const Form2: React.FC = () => {
    const [exercise, setExercise] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Logged Exercise: ${exercise}, Weight: ${weight} lbs`);
    };

    return (
        <div>
            <h3>Log Your Weightlifting Session</h3>
            <form onSubmit={handleSubmit}>
                <label>Exercise: <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} /></label><br />
                <label>Weight (lbs): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label><br />
                <button type="submit">Log Workout</button>
            </form>
        </div>
    );
};

export default Form2;
