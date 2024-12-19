import Label from './Label';

export default function Input({ label, value, id, error, onChange }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <Label id={id} label={label} />
            <input type="text" id={id} value={value} onChange={onChange} className={`w-full px-5 py-2 text-gray-900 border border-gray-500 rounded-md hover:border-green-600 focus-visible:outline-none focus-visible:border focus-visible:border-green-600 ${error?'border-red':''}`} />
            {error ?
                <span className="text-red">{error}</span>
            :''}
        </div>
    );
}