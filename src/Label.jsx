export default function Label({ label, id }) {
    return (
        <label htmlFor={id} className="block">{label}<span className="text-green-600 ml-2">*</span></label>
    );
}