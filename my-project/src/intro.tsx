import React from "react";

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return <p>Hello! We are {name1} and {name2}, working on this React project.</p>;
};

export default Intro;
