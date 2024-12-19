export default function Button({ title, onClick }) {
    return (
        <button onClick={onClick} className="text-white font-bold bg-green-600 rounded-md py-4 w-full hover:bg-dark-green focus-visible:outline-none focus-visible:bg-dark-green">{title}</button>
    );
}