import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export default function Signup() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center px-4 py-2 md:px-8 md:py-4 md:w-96 rounded-xl shadow-2xl bg-slate-950/15 border border-mariner-700/50 backdrop-blur-md mt-3">
            <Heading label={"Sign Up"} />
            {/* <SubHeading label={"Enter your information to create an account"} /> */}
            <InputBox label={"First Name"} placeholder={"John"} onChange={""} />
            <InputBox label={"Last Name"} placeholder={"Doe"} onChange={""} />
            <InputBox label={"Username"} placeholder={"johndoe"} onChange={""} />
            <InputBox label={"Password"} placeholder={""} onChange={""} />
            <Button label={'Sign Up'} onClick={""} />
            <BottomWarning label={'Already have an account?'} buttonText={'Login'} to={'/signin'} />
        </div>
    )
}