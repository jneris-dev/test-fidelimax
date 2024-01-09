export function Button(props) {
    return (
        <div className="flex">
            <button
                type="submit"
                disabled={props.disabled}
                className="bg-yellow text-gray-8 py-3 px-10 rounded-full font-semibold disabled:opacity-60"
            >
                {props.label}
            </button>
        </div>
    )
}