export function Button(props) {
    return (
        <div className="flex">
            <button
                type={props.type}
                onClick={() => props.function}
                className="bg-yellow text-gray-8 py-3 px-5 rounded-full font-semibold disabled:opacity-60"
            >
                {props.label}
            </button>
        </div>
    )
}