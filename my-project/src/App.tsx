// @ts-ignore
import React from "react";
import Title from "./title.tsx";
import Intro from "./intro.tsx";
import Hobby1 from "./hobby1.tsx";
import Hobby2 from "./hobby2.tsx";

function App() {
    return (
        <div>
            <Title teamNumber="55" hobby1="Rock Climbing" hobby2="Weightlifting" />
            <Intro name1="Michael Napoleone" name2="Brian Grande" />
            <Hobby1 />
            <Hobby2 />
        </div>
    );
}

export default App;
