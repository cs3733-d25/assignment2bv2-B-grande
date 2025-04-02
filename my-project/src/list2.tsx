import React from "react";
import "./list.css";

const List2: React.FC = () => {
    return (
        <div>
            <h3>Essential Equipment for Weightlifting</h3>
            <ul className="custom-list">
                <li>Weightlifting Shoes</li>
                <li>Barbell</li>
                <li>Plates</li>
                <li>Weight Belt</li>
                <li>Chalk</li>
            </ul>
        </div>
    );
};

export default List2;
