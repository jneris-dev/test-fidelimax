export function Check(props) {
    return (
        <div className="mb-10">
            <label htmlFor={props.id} className="text-sm text-alternate">
                {props.label}
            </label>

            {props.options.map((item, key) => (
                <div key={key} className="flex items-center mb-4">
                    <fieldset>
                        <input id={key} type="checkbox" value={item.value} />
                        <label htmlFor={key} className="ms-2">{item.label}</label>
                    </fieldset>
                </div>
            ))}
        </div>
    )
}