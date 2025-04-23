export default function Die(props) {
    function handleClick() {
        props.hold(props.id);
    }

    return (
        <>
            <div className="die">
                <button
                    className={props.isHeld ? "die-btn held" : "die-btn"}
                    onClick={handleClick}
                    aria-pressed={props.isHeld}
                    aria-label={`Die with value ${props.value},
                    ${props.value} ? "is held" : "not held"`}
                >
                    {props.value}
                </button>
            </div>
        </>
    )
}