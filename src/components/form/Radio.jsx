export function Radio(props) {
    return (
        <div className="mb-10">
            <fieldset>
                <label className={`block mb-2 ${props.custom ? props.custom : 'font-medium'}`}>{props.label}</label>
                <p className='mb-3 text-sm'>{props.description}</p>
                <div className={`w-full flex ${props.custom ? 'justify-between' : 'gap-5'}`}>
                    {props.options.map((item, key) => {
                        return (
                            <div key={key} className={`flex ${props.id === 'two' ? 'flex-col' : 'gap-2'}`}>
                                <input
                                    type="radio"
                                    tabIndex={-1}
                                    id={"radio-" + (key + 1)}
                                    name={props.id}
                                    value={props.index ? key : (key + 1)}
                                    onChange={props.onChange}
                                    checked={props.index? key : (key +1 ) === Number(props.value)}
                                    required={props.required}
                                    data-tag={props.id}
                                />
                                <label
                                    htmlFor={"radio-" + (key + 1)}>
                                    {item.label}
                                </label>
                            </div >
                        )
                    })}
                </div>
            </fieldset>
        </div>
    )
}