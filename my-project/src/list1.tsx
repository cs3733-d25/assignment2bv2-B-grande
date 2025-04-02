import React from "react";
import "./list.css";

const List1: React.FC = () => {
    return (
        <div>
            <h3>Essential Gear for Rock Climbing</h3>
            <ul className="custom-list">
                <li>Climbing Shoes</li>
                <li>Harness</li>
                <li>Chalk Bag</li>
                <li>Carabiners</li>
                <li>Rope</li>
            </ul>
        </div>
    );
};

export default List1;
