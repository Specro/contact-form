import Label from './Label';

export default function TextArea({ label, id, onChange, value, error }) {
    return (
        <div className="flex flex-col gap-2">
            <Label id={id} label={label} />
            <textarea onChange={onChange} value={value} id={id} className={`w-full px-5 py-2 text-gray-900 border border-gray-500 rounded-md hover:border-green-600 focus-visible:outline-none focus-visible:border focus-visible:border-green-600 ${error?'border-red':''}`} rows={3}></textarea>
            {error ?
                <span className="text-red">{error}</span>
            :''}
        </div>
    );
}