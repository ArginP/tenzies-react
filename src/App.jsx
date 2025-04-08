import Die from "./Die.jsx"
import { useState } from "react";
import { nanoid } from 'nanoid'

export default function App() {
    const [dice, setDice] = useState(generateAllNewDice());

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false
            }))
    }

    console.log(dice)

    function handleRollClick() {
        setDice(prevDice => prevDice.map( die => {
            return die.isHeld === false ? {
                ...die,
                value: Math.floor(Math.random() * 6) + 1,
            } : die;
        }));
    }

    function hold(id) {
        setDice(prevDice => prevDice.map( die =>
            die.id === id ?
                {...die, isHeld: !die.isHeld} :
                die
        ))
    }

    const DieComponents = dice.map((die) => {
        return <Die
            key={die.id}
            id={die.id}
            value={die.value}
            isHeld={die.isHeld}
            hold={hold}
        />
    })

    return (
        <>
            <main className={"game-container"}>
                <div className="text-container">
                    <h1>Tenzies</h1>
                    <p>
                        Бросайте, пока все кубики не примут одинаковое значение.
                        Щелкните по кубику, чтобы зафискировать его на текущем значении.
                    </p>
                </div>

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