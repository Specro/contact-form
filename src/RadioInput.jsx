export default function RadioInput({ label, name, value, onChange, checked }) {
    const handleKeyboard = e => {
        if (e.keyCode===32) {
            onChange({target:{value}});
        }     
    };
    return (
        <label onKeyDown={handleKeyboard} className={`group border px-5 py-2 w-full border-gray-500 rounded-md flex items-center gap-4 hover:cursor-pointer focus-visible:outline-none focus-visible:border-green-600 focus-visible:bg-green-200 ${checked?'border-green-600 bg-green-200':''}`} tabIndex={0}>
            <input name={name} value={value} id={value} onChange={onChange} checked={checked} tabIndex={-1} className="outline outline-2 outline-gray-500 appearance-none w-3 h-3 rounded-full outline-offset-2 group-focus-visible:outline-green-600 checked:border-none checked:outline-2 checked:outline-green-600 checked:bg-green-600" type="radio" />
            <span>{label}</span>
        </label>
    );
}