import Die from "./Die.jsx"
import { useState } from "react";
import { nanoid } from 'nanoid'
import Confetti from "./Confetti.jsx";

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice());

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false
            }))
    }

    function handleRollClick() {
        if (!gameWon) {
            setDice(prevDice => prevDice.map( die => {
                return die.isHeld === false ? {
                    ...die,
                    value: Math.floor(Math.random() * 6) + 1,
                } : die;
            }));
        } else {
            setDice(generateAllNewDice());
        }

    }

    function hold(id) {
        setDice(prevDice => prevDice.map( die =>
            die.id === id ?
                {...die, isHeld: !die.isHeld} :
                die
        ))
    }

    function checkIfGameWon(dice) {
        // Проверяем, все ли кости удержаны
        const allHeld = dice.every(die => die.isHeld === true);

        // Проверяем, одинаковы ли значения всех костей
        const allSameValue = dice.every(die => die.value === dice[0].value);

        // Если оба условия выполнены, игра завершена
        if (allHeld && allSameValue) {
            console.log('Game is Won');
            return true;
        } else {
            return false;
        }
    }

    let gameWon = checkIfGameWon(dice);

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
            {gameWon && <Confetti/>}

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
                    <button className="roll-btn" onClick={handleRollClick}>
                        {gameWon ? "Новая игра" : "Бросить"}
                    </button>
                </div>
            </main>
        </>
    )
}