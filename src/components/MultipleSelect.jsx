export function MultipleSelect(props) {
    return (
        <div className="mb-10">
            <p className="block mb-2 font-medium">
                {props.label}
            </p>

            <div className="flex flex-wrap gap-4">
                {props.options.map((item, key) => (
                    <div key={key}>
                        <input
                            id={item.value}
                            type="checkbox"
                            value={item.value}
                            onChange={props.onChange}
                            disabled={props.disabled}
                            required={props.required}
                            onInvalid={e => e.target.setCustomValidity(props.validationMessage)}
                            onInput={e => e.target.setCustomValidity('')}
                            className="sr-only hidden peer"
                        />
                        <label
                            htmlFor={item.value}
                            className="block rounded-2xl border border-gray-2 p-3 peer-checked:border-blue-600 "
                        >{item.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}