export default function Balance({ value }) {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
            <h2 className="text-mariner-200 text-sm font-medium uppercase tracking-wider">Your Balance</h2>
            <div className="text-4xl font-bold text-white mt-1">{value}</div>
        </div>
    )
}