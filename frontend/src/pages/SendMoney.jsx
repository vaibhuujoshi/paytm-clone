import axios from "axios";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function SendMoney() {
    const [searchParams] = useSearchParams();
    const recipientId = searchParams.get("id");
    const recipientName = searchParams.get("name");

    const [amount, setAmount] = useState(0);

    const navigate = useNavigate();

    function transferMoney() {
        axios.post("http://localhost:3000/api/v1/account/transfer", {
            to: recipientId,
            amount: amount
        }, { withCredentials: true }
        ).then(navigate('/dashboard'));

    }

    return (
        <div className="w-full max-w-md bg-neutral-950/50 border border-mariner-700/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white text-center">Send Money</h2>

                <div className="flex items-center gap-4 bg-black/30 p-4 rounded-2xl border border-mariner-600/30">
                    <Avatar label={recipientName[0]} />
                    <div>
                        <p className="text-mariner-200 text-sm">Sending to</p>
                        <p className="text-white font-semibold text-lg">{recipientName}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-mariner-200 text-sm ml-1">Amount (USD)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-mariner-400">$</span>
                        <input
                            type="number"
                            placeholder="0.00"
                            className="w-full bg-transparent border-2 border-mariner-600/50 rounded-2xl py-3 pl-10 pr-4 text-3xl font-bold text-white focus:border-mariner-500 focus:outline-none transition-all placeholder:text-mariner-800"
                            onChange={e => setAmount(parseInt(e.target.value))}
                        />
                    </div>
                </div>

                <Button onClick={transferMoney} label={"Initiate Transfer"} />
            </div>
        </div>
    )
}
