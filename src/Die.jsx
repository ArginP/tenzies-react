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
                >
                    {props.value}
                </button>
            </div>
        </>
    )
}