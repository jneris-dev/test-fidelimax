export function Checkbox(props) {

    const New = props.value

    const Old = props.defaultValue

    console.log();

    return (
        <div className="mb-10">
            <p className="block mb-2 font-medium">
                {props.label}
            </p>

            <div className={props.custom ? 'flex flex-wrap gap-4' : ''}>
                {props.options.map((item, key) => props.custom ? (
                    <div key={key}>
                        <input
                            type="checkbox"
                            id={"check-" + (key + 1)}
                            name={props.id}
                            value={key}
                            onChange={props.onChange}
                            required={props.required}
                            checked={Number(props.value) === key}
                            className="sr-only hidden peer"
                        />
                        <label
                            htmlFor={"check-" + (key + 1)}
                            className="block rounded-2xl border border-gray-2 p-3 peer-checked:border-blue-600 "
                        >{item.label}</label>
                    </div>
                ) : (
                    <div key={key} className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id={"check-" + (key + 1)}
                            name={props.id}
                            value={key}
                            onChange={props.onChange}
                            required={props.required}
                            checked={props.value === key}
                        />
                        <label
                            htmlFor={"check-" + (key + 1)}
                            className="ml-2"
                        >{item.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}