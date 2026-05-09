import Appbar from "../components/Appbar";
import Users from "../components/Users"

export default function Dashboard() {
    return (
        <>
        <Appbar />
            <div className="flex flex-col gap-3 mt-4 w-7xl mx-auto px-4">
                <Users />
            </div>
        </>
    )
}