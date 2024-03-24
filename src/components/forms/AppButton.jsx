import AppRadio from './AppRadio'

const AppButton = ({ text, onClick, onSubmit, type }) => {
    const solid =
        'bg-catalina-blue-600 hover:bg-catalina-blue-500 duration-200 rounded-full px-10 py-3 text-center text-gray-50 shadow-lg font-semibold tracking-wide'
    const white =
        'text-catalina-blue-500 hover:bg-gray-50 duration-200 rounded-full bg-white px-10 py-3 text-center font-semibold tracking-wide shadow-lg'
    const submit =
        'flex h-7 w-7 items-center justify-center rounded-full border border-catalina-blue-300 bg-white hover:border-catalina-blue-500 duration-200'
    const clickHandler = (e) => {
        e.preventDefault()
        if (onClick) {
            onClick()
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (onSubmit) {
            onSubmit()
        }
    }
    return (
        <>
            <button
                onClick={onSubmit ? submitHandler : clickHandler}
                className={
                    type === 'solid'
                        ? solid
                        : type === 'submit'
                          ? submit
                          : white
                }
            >
                {type === 'submit' && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                        className="pointer-events-none fill-catalina-blue-500 pl-0.5"
                    >
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                    </svg>
                )}
                {type === 'submit' ? '' : text}
            </button>
            {/* {type === 'submit' && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    className="pointer-events-none absolute h-6 w-6"
                >
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
            )} */}
        </>
    )
}

export default AppButton
