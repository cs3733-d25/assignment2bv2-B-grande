// @ts-ignore
import React from "react";
import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";

const Hobby2: React.FC = () => {
    return (
        <div>
            <h2>Weightlifting</h2>
            <img src="/weightlifting.jpg" alt="Weightlifting" width="300" />
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
};

export default Hobby2;
