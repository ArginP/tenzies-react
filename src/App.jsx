import Die from "./Die.jsx"
import { useState } from "react";

export default function App() {
    const [dice, setSice] = useState(generateAllNewDice());

    function generateAllNewDice() {
        const allDice = [];

        for (let i = 0; i < 10; i++) {
            const randomDie = Math.floor(Math.random() * 6) + 1;
            allDice.push(randomDie)
        }

        return allDice;
    }

    const DieComponents = dice.map((die) => {
        return <Die value={die} />
    })

    return (
        <>
            <main className={"game-container"}>
                <div className="dice-container">
                    {DieComponents}
                </div>
            </main>
        </>
    )
}