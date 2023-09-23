import PropTypes from "prop-types";
const InputElement = ({type,placeholder}) => {
        return <input type={type} placeholder={placeholder} />;
     }

     InputElement.propTypes={
        type:PropTypes.string,
        placeholder:PropTypes.string
     }
     
export default InputElement;

// const InputElement = () => {
//     return <input type="text" placeholder="Ennter your name" />
// };