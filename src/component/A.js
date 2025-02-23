import React,{useRef} from "react";
const A = ({handleSubmit}) => {
    const inputRef = useRef();
    const handleSub = (e) => {
        e.preventDefault();
        handleSubmit(inputRef.current.value)
    }
    return (
        <>
            <input ref={inputRef} type="text"></input>
            <button onClick={()=>handleSubmit(22)}>Submit</button>
            </>
    )
}
export default A;