export function MultipleSelect(props) {
    return (
        <div className="mb-10">
            <label htmlFor={props.id} className="text-sm text-alternate">
                {props.label}
            </label>
            <div className="flex flex-wrap gap-4">
                {props.options.map((item, key) => (
                    <div key={key}>
                        <input className="peer sr-only" id={item.id} type="checkbox" tabIndex="-1" />

                        <label
                            htmlFor={item.id}
                            className="block w-full rounded-2xl border border-gray-2 p-3"
                            tabIndex="0"
                        >
                            <span value={item.value} label={item.label}>{item.label}</span>
                        </label>
                    </div>
                ))}

            </div>
        </div>
    )
}