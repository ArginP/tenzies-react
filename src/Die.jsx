export default function Die(props) {
    return (
        <>
            <div className="die">
                <button>
                    {props.value}
                </button>
            </div>
        </>
    )
}