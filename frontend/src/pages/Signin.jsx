import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";

export default function Signin() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center px-4 py-2 md:px-8 md:py-8  md:w-96 rounded-xl shadow-2xl bg-slate-950/15 border border-mariner-700/50 backdrop-blur-md mt-3">
            <Heading label={"Sign In"} />
            <InputBox label={"Username"} placeholder={"johndoe"} onChange={""} />
            <InputBox label={"Password"} placeholder={""} onChange={""} />
            <Button label={'Sign In'} onClick={""} />
            <BottomWarning label={'Don"t have an account?'} buttonText={'Sign Up'} to={'/signup'} />
        </div>
    )
}