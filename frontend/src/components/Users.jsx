import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Balance from "./Balance";

export default function Users() {
    const [users, setUsers] = useState([""]);
    const [filter, setFilter] = useState("");

    const [value, setValue] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, { withCredentials: true })
            .then(response => {
                setUsers(response.data);
            })

        axios.get("http://localhost:3000/api/v1/account/balance", { withCredentials: true })
            .then(response => {
                setValue(response.data)
            })
    }, [filter, value])

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <Balance value={Math.round(value * 100) / 100} />
                <SearchBar onChange={(e) => setFilter(e.target.value)}/>
            </div>
            <div className="flex flex-col gap-4 items-center justify-between p-4 border border-white/5 rounded-2xl transition-colors group">
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <User key={user._id || index} user={user} />
                    ))
                ) : (
                    <p>No users found or loading...</p>
                )}
            </div>
        </div>
    )
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex w-full items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-colors group">
            <div className="flex items-center gap-2">
                <Avatar label={user?.firstName?.[0] || "?"} />
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="">
                <Button onClick={() => {
                    navigate(`/send?id=${user._id}&name=${user.firstName}`);
                }} label={"Send Money"} />
            </div>
        </div>
    )
}

function SearchBar({onChange}) {
    return (
        <>
            <h3 className="text-2xl font-bold text-white">Users</h3>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search users..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-mariner-200/50 focus:outline-none focus:ring-2 focus:ring-mariner-500/50 transition-all"
                onChange={onChange}
            />
        </>
    )
}