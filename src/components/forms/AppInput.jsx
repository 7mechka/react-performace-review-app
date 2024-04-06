const AppInput = ({placeholder, name, type, onInput, defaultValue, required, style}) => {
    return ( 
        <>
            <input type={!type ? 'text' : type} className={`text-catalina-blue-600 rounded-lg px-2 py-0.5 border border-catalina-blue-300 outline-catalina-blue-900 ${style}`}
            placeholder={placeholder}
            name={name}
            onInput={onInput} 
            defaultValue={defaultValue}
            required={required}
            />
        </>

     );
}
 
export default AppInput;