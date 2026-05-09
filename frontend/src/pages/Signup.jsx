import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function signup() {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            password,
            firstName,
            lastName
        });

        if (response.status === 200) {
            navigate('/signin');
        }
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center px-4 py-2 md:px-8 md:py-4 md:w-96 rounded-xl shadow-2xl bg-slate-950/15 border border-mariner-700/50 backdrop-blur-md mt-3">
            <Heading label={"Sign Up"} />
            {/* <SubHeading label={"Enter your information to create an account"} /> */}
            <InputBox label={"First Name"} type={"text"} placeholder={"John"} onChange={e => {
                setFirstName(e.target.value)
            }} />
            <InputBox label={"Last Name"} type={"text"} placeholder={"Doe"} onChange={e => {
                setLastName(e.target.value)
            }} />
            <InputBox label={"Username"} type={"text"} placeholder={"johndoe"} onChange={e => {
                setUsername(e.target.value)
            }} />
            <InputBox label={"Password"} type={"password"} placeholder={".........."} onChange={e => {
                setPassword(e.target.value)
            }} />
            <Button label={'Sign Up'} onClick={signup} />
            <BottomWarning label={'Already have an account?'} buttonText={'Login'} to={'/signin'} />
        </div>
    )
}