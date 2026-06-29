export default function Input({type, className,name,value,handle}){
    
    return (
        <input
            type={type}
            className={`bg-white border-1 border-gray-400 rounded-md px-2 py-1 shadow-sm shadow-mist-450 ${className}`}
            name={name}
            id={name} 
            value={value[name]}
            onChange={(e)=> handle(e.target.value)}
            placeholder={name} 
        />
    );
}