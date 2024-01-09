export function Radio(props) {
    return (
        <div className="mb-10">
            <fieldset>
                <label className={`block mb-2 ${props.custom ? props.custom : 'font-medium'}`}>{props.label}</label>
                <p className='mb-3 text-sm'>{props.description}</p>
                <div className="flex flex-wrap gap-5">
                    {props.options.map((option, key) => {
                        return (
                            <div key={key} className="flex flex-wrap items-center gap-1">
                                <input
                                    tabIndex={-1}
                                    type="radio"
                                    id={option.id}
                                    value={option.value}
                                    onChange={props.onChange}
                                    checked={props.value === option.value ? true : false}
                                    disabled={option.disabled}
                                    required={props.required}
                                    alt={option.label}
                                    data-tag={props.id}
                                />
                                <label htmlFor={option.id}>
                                    {option.label}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </fieldset>
        </div>
    )
}