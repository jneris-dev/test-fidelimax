export function Checkbox(props) {
    return (
        <div className="mb-10">
            <p className="block mb-2 font-medium">
                {props.label}
            </p>

            {props.options.map((item, key) => (
                <div key={key} className="flex items-center mb-4">
                    <input
                        id={props.id}
                        type="checkbox"
                        value={item.value}
                        onChange={props.onChange}
                        disabled={props.disabled}
                        required={props.required}
                        onInvalid={e => e.target.setCustomValidity(props.validationMessage)}
                        onInput={e => e.target.setCustomValidity('')}
                    />
                    <label
                        htmlFor={props.id}
                        className="ml-2 text-sm"
                    >{item.label}</label>
                </div>
            ))}
        </div>
    );
}