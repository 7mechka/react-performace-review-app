const AppCheckbox = ({ name, id, checked, cb }) => (
    <div className="flex">
        <input
            type="checkbox"
            className="peer relative mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none
                    rounded-sm border-2 border-catalina-blue-500
                    bg-white focus:outline-none
                    "
            value={name}
            id={id}
            checked={checked}
            onChange={cb}
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="pointer-events-none absolute mt-1.5 block h-3 w-4 bg-inherit outline-none peer-checked:hidden"
        >
            <path
                className="fill-catalina-blue-500"
                d="M424-320q0-81 14.5-116.5T500-514q41-36 62.5-62.5T584-637q0-41-27.5-68T480-732q-51 0-77.5 31T365-638l-103-44q21-64 77-111t141-47q105 0 161.5 58.5T698-641q0 50-21.5 85.5T609-475q-49 47-59.5 71.5T539-320H424Zm56 240q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Z"
            />
        </svg>
        <svg
            className="pointer-events-none absolute mt-1 hidden h-4 w-4 rounded-sm bg-catalina-blue-600 stroke-white outline-none peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <label htmlFor={id} className="ml-2">
            {name}
        </label>
    </div>
)

export default AppCheckbox
