import Die from "./Die.jsx"

export default function App() {
    return (
        <>
            <main className={"game-container"}>
                <div className="dice-container">
                    <Die value={"1"} />
                    <Die value={"2"} />
                    <Die value={"3"} />
                    <Die value={"4"} />
                    <Die value={"5"} />

                    <Die value={"6"} />
                    <Die value={"6"} />
                    <Die value={"6"} />
                    <Die value={"6"} />
                    <Die value={"6"} />
                </div>
            </main>
        </>
    )
}