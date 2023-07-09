import InputField from "@/Components/InputField";
import {useForm} from "@inertiajs/react";
import SelectField from "@/Components/SelectField";
import InputError from "@/Components/InputError";

export default function Registration({countries}){

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        country_id:'',
        birthdate:''
    });
    const handleClick = () => {
        post(route('register'));
    }

    return<>
        <form action="">
            <h1 className={"register-header"}>Add a User</h1>
            <p style={{
                color: "#4B4F4E",
                textAlign: "center",
                fontSize: "18px",
                fontFamily: "SF Compact",
                fontStyle: "normal",
                fontWeight: "457",
                lineHeight: "44.744px",
            }}>Type in your info</p>
            <InputField
            type={"text"}
            id={"name"}
            isFocused={true}
            value={data.name}
            placeholder={"Name"}
            onChange={(e) => setData('name', e.target.value)}

        />
            <InputError message={errors.name} className="mt-2" />
        <InputField
            type={"email"}
            id={"email"}
            isFocused={false}
            value={data.email}
            placeholder={"Email"}
            onChange={(e) => setData('email', e.target.value)}
        />

            <InputError message={errors.email} className="mt-2" />
        <InputField
            type={"password"}
            id={"password"}
            isFocused={false}
            value={data.password}
            placeholder={"Password"}
            onChange={(e) => setData('password', e.target.value)}
        />

            <InputError message={errors.password} className="mt-2" />
        <SelectField
            options={countries}
            id={"country"}
            value = {data.country_id}
            onChange = {(e)=>setData("country_id",e.target.value)}
        ></SelectField>

            <InputError message={errors.country_id} className="mt-2" />
        <InputField
            type={"date"}
            id={"date"}
            isFocused={false}
            value={data.birthdate}
            placeholder={"Birth Date"}
            onChange={(e) => setData('birthdate', e.target.value)}
        />

            <InputError message={errors.birthdate} className="mt-2" />
        <button onClick={handleClick} type={"button"} className={"saveButton"}>ccc</button>
        </form>
    </>

}
