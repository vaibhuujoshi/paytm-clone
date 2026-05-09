export default function Avatar({ label }) {
    return (
        <div className="bg-mariner-600 hover:bg-mariner-500 rounded-full text-white h-10 w-10 text-center text-sm font-semibold transition-all cursor-pointer">
            <h1 className="flex flex-col justify-center h-full text-xl">
                {label}
            </h1>
        </div>
    )
}