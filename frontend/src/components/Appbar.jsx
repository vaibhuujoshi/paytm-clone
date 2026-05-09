import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import axios from "axios";

export default function Appbar() {
  const [name, setName] = useState("User");

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/user/me', { withCredentials: true })
      .then(response => setName(response.data.firstName));
  })

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <div className="text-xl font-bold text-mariner-50 tracking-tight">
          Pay<span className="text-mariner-500">TM</span>
        </div>

        <div className="flex items-center">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello, {name}
            </div>
          <Avatar label={name[0]} />
        </div>
      </div>
    </nav>
  )
}
