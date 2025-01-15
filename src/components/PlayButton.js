import "./PlayButton.css"

export default function PlayButton({onClick}) {
    return (
        <div className="text-center my-5">
            <button className="btn btn-play" onClick={onClick}>Play</button>
        </div>
    )
}