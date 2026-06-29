export default function Button({ children, onClick ,className="" }) {
    return (
        <button onClick={onClick} className={`cursor-pointer font-bold py-2 px-4 rounded-full ${className}`}>
            {children}
        </button>
    );
}