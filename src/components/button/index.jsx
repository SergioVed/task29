<link rel="stylesheet" href="button.css" />

export const Button = (props) => {

    return(
        <>
            <button type="button" onClick={props.onClickFunc}>{props.sign}</button>
        </>
    )

}




















// import PropTypes from "prop-types"
// export function Student(props) {
//     return(
//         <div>{props.name}{props.group}{props.greet}</div>
//     )
// }
// Student.propTypes = {
//     name: PropTypes.string.isRequired,
//     group: PropTypes.string,
//     greet: PropTypes.func
// }
// Student.defaultProps = {
//     group: "AFE-30"
// }