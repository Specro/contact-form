import Label from './Label';

export default function Checkbox({ label, name, error, onChange, checked }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
                <input id={name} name={name} onChange={onChange} checked={checked} type="checkbox" className="w-4 h-4 appearance-none border-2 rounded-sm border-gray-500 bg-center checked:bg-checkbox checked:border-green-600 focus-visible:outline-none focus-visible:border-green-600" />
                <Label id={name} label={label} />
            </div>
            {error ?
                <span className="text-red">{error}</span>
            :''}
        </div>
    );
}