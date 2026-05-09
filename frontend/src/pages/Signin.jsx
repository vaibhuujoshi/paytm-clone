import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function signin() {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
            username,
            password
        }, { withCredentials: true });
        
        if (response.status === 200) {
            navigate('/dashboard')
        }
    }

    return (
        <div className="flex flex-col gap-6 items-center justify-center px-4 py-2 md:px-8 md:py-8  md:w-96 rounded-xl shadow-2xl bg-slate-950/15 border border-mariner-700/50 backdrop-blur-md mt-3">
            <Heading label={"Sign In"} />
            <InputBox label={"Username"} type={"text"} placeholder={"johndoe"} onChange={e => {
                setUsername(e.target.value)
            }} />
            <InputBox label={"Password"} type={"password"} placeholder={"............"} onChange={e => {
                setPassword(e.target.value)
            }} />
            <Button label={'Sign In'} onClick={signin} />
            <BottomWarning label={'Don"t have an account?'} buttonText={'Sign Up'} to={'/signup'} />
        </div>
    )
}