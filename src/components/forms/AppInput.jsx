const AppInput = ({placeholder, name}) => {
    return ( 
        <>
            <input type="text" className="text-catalina-blue-600 rounded-lg px-2 py-0.5 border border-catalina-blue-300 outline-catalina-blue-900"
            placeholder={placeholder}
            name={name} />
        </>

     );
}
 
export default AppInput;