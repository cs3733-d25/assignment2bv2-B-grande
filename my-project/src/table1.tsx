import React from "react";

const Table1: React.FC = () => {
    return (
        <div>
            <h3>Rock Climbing Exercises</h3>
            <table>
                <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Muscles Targeted</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Hangboard Training</td>
                    <td>Fingers, Forearms</td>
                </tr>
                <tr>
                    <td>Pull-Ups</td>
                    <td>Back, Biceps</td>
                </tr>
                <tr>
                    <td>Planks</td>
                    <td>Core</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;
