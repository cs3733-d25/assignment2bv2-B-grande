import React from "react";

const Table2: React.FC = () => {
    return (
        <div>
            <h3>Weightlifting Exercises</h3>
            <table>
                <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Muscles Targeted</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Squat</td>
                    <td>Legs, Core</td>
                </tr>
                <tr>
                    <td>Bench Press</td>
                    <td>Chest, Triceps</td>
                </tr>
                <tr>
                    <td>Deadlift</td>
                    <td>Back, Legs</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table2;
