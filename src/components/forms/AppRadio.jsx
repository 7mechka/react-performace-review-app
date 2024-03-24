const AppRadio = ({ name }) => (
    <div className="flex">
        <input
            type="radio"
            className="peer relative mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none
                    rounded-lg border-2 border-catalina-blue-500
                    bg-white focus:outline-none active:border-catalina-blue-600"
            name={name}
        />
        <span
            className="pointer-events-none absolute ml-[5px] mt-[9px] hidden h-1.5 w-1.5 rounded-lg
         bg-catalina-blue-500 peer-checked:block peer-active:bg-catalina-blue-600"
        ></span>
    </div>
)

export default AppRadio
