export function Checkbox(props) {

    return (
        <div className="mb-10">
            <p className="block mb-2 font-medium">
                {props.label}
            </p>

            <div className={props.custom ? 'flex flex-wrap gap-4' : ''}>
                {props.options.map((item, key) => props.custom ? (
                    <div key={key}>
                        <label htmlFor={"check-" + props.custom + '-' + (key + 1)}>
                            <input
                                type="checkbox"
                                id={"check-" + props.custom + '-' + (key + 1)}
                                name={props.id}
                                value={key}
                                onChange={props.onChange}
                                required={props.required}
                                checked={props.value.includes(key)}
                                className="sr-only hidden peer"
                            />
                            <span className="block rounded-2xl border border-gray-2 p-3 peer-checked:border-blue-600">
                                {item.label}
                            </span>
                        </label>
                    </div>
                ) : (
                    <div key={key} className="flex items-center mb-4">
                        <label htmlFor={"check-" + (key + 1)}>
                            <input
                                type="checkbox"
                                id={"check-" + (key + 1)}
                                name={props.id}
                                value={key}
                                onChange={props.onChange}
                                required={props.required}
                                checked={props.value.includes(key)}
                            />
                            <span className="ml-2">
                                {item.label}
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}