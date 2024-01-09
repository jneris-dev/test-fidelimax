export function Textarea(props) {
    return (
        <div className="mb-10">
            <label htmlFor={props.id} className="block mb-2 font-medium" dangerouslySetInnerHTML={{ __html: props.label }}/>
            <textarea
                className="w-full h-[136px] resize-none block p-2.5 text-sm border border-gray-4 rounded-lg placeholder:text-gray-5"
                placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                rows={props.rows}
            ></textarea>
        </div>
    )
}
