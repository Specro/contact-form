import Label from './Label';

export default function RadioWrapper({ label, children, onChange, error }) {
    return (
        <div className="flex flex-col gap-2">
            <Label label={label} />
            <div className="flex flex-col gap-4 md:flex-row " onChange={onChange}>{children}</div>
            {error ?
                <span className="text-red">{error}</span>
            :''}
        </div>
    );
}