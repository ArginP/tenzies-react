import Die from "./Die.jsx"
import { useState } from "react";
import { nanoid } from 'nanoid'

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice());

    function generateAllNewDice() {
        return new Array(10)
            .fill({
                value: 0,
                isHeld: false,
            })
            .map(() => ({
                id: nanoid(),
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false
            }))
    }

    console.log(dice)

    function handleRollClick() {
        setDice(generateAllNewDice());
    }

    const DieComponents = dice.map((die) => {
        return <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
        />
    })

    return (
        <>
            <main className={"game-container"}>
                <div className="text-container"></div>

                <div className="dice-container">
                    {DieComponents}
                </div>

                <div className="button-container">
                    <button className="roll-btn" onClick={handleRollClick}>Roll</button>
                </div>
            </main>
        </>
    )
}