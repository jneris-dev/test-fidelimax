export function Rating(props) {
    return (
        <div className="mb-10">
            <label className={`block mb-2 ${props.custom ? props.custom : 'font-medium'}`}>{props.label}</label>
            <p className='mb-3 text-sm'>{props.description}</p>
            {[...Array(5)].map((item, key) => {
                return (
                    <label key={key} htmlFor={"rating-" + (key + 1)}>
                        <input
                            type="radio"
                            tabIndex={-1}
                            id={"rating-" + (key + 1)}
                            name={props.id}
                            value={key + 1}
                            onChange={props.onChange}
                            checked={Number(props.value) === (key + 1)}
                            className="absolute invisible peer"
                        />
                        <span className={`text-5xl ${key + 1 < Number(props.value) || key + 1 === Number(props.value) ? 'text-yellow' : 'text-zinc-600'}`}>&#9733;</span>
                    </label>
                )
            })}
        </div>
    )
}