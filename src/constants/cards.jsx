import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import InputX from "../components/InputX";

const CARDS = [
    { title: "InputX", description: "custom text editor, which works similar to the word but with basic functionality also supports equation and formula writig!", component: <InputX />, id: 1 },
    { title: "Card", description: "Neon styled card component!", component: <Card />, id: 2 }, 
    { title: "Dropdown", description: "Custom Dropdown using tailwind, responsive interactive and customizable", component: <Dropdown />, id: 3 }, 

];

export default CARDS;