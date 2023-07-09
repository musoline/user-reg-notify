import {forwardRef, useEffect, useRef} from "react";

export default forwardRef( function InputField( {type="text",id="",label="name",defaulValue="",isFocused = false,...props},ref){
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return <div className={"custom-input"}>
    <input {...props} type={type} ref={input} id={id} />
</div>
})


