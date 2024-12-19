export default function RadioWrapper({ label, children, onChange, error }) {
    return (
        <div className="flex flex-col gap-2">
            <legend className="block">{label}<span className="text-green-600 ml-2">*</span></legend>
            <div className="flex flex-col gap-4 md:flex-row " onChange={onChange}>{children}</div>
            {error ?
                <span className="text-red">{error}</span>
            :''}
        </div>
    );
}