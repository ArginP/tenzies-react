export default function Die(props) {
    return (
        <>
            <div className="die">
                <button className={"die-btn"}>
                    {props.value}
                </button>
            </div>
        </>
    )
}