<link rel="stylesheet" href="input.css" />

export const Input = ({inputValue, handleInputChange, placeholder}) => {
    return(
        <input value={inputValue} onChange={(event) => handleInputChange(event.target.value)} placeholder={placeholder} type="text"></input>
    )
}