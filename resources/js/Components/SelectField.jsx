import {forwardRef, useEffect, useRef} from "react";

export default forwardRef( function SelectField( {type="text",id="",label="name",defaulValue="",isFocused = false,...props},ref){
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const renderOptions = (options) => {
        return options && options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)
    }



        return <div className={"custom-input"}>

    <select id={id} {...props}>
        <option value={""} disabled>Country</option>
        {renderOptions(props.options)}
    </select>
</div>
})


