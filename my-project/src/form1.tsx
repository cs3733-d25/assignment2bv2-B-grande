import React, { useState } from "react";

const Form1: React.FC = () => {
    const [route, setRoute] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Logged Route: ${route}, Difficulty: ${difficulty}`);
    };

    return (
        <div>
            <h3>Log Your Rock Climbing Session</h3>
            <form onSubmit={handleSubmit}>
                <label>Route Name: <input type="text" value={route} onChange={(e) => setRoute(e.target.value)} /></label><br />
                <label>Difficulty: <input type="text" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} /></label><br />
                <button type="submit">Log Climb</button>
            </form>
        </div>
    );
};

export default Form1;
