// @ts-ignore
import React from "react";
import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";

const Hobby1: React.FC = () => {
    return (
        <div>
            <h2>Rock Climbing</h2>
            <img src="/rock-climbing.jpg" alt="Rock Climbing" width="300" />
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
};

export default Hobby1;
