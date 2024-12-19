import { useState } from 'react';

export default function Notification({ title, timeout, children }) {
    const [transition, setTransition] = useState(false);
    setTimeout(() => {
        setTransition(true);
    }, timeout-500);

    return (
        <div className={`bg-dark-green p-6 text-white rounded-xl top-4 fixed z-10 mx-6 ${transition?'animate-fade-out':'animate-fade-in'}`}>
            <h2 className="font-bold mb-2 flex items-center gap-2"><img src="./images/icon-success-check.svg" alt="success icon" className="" />{title}</h2>
            <div className="text-green-200">{children}</div>
        </div>
    );
}