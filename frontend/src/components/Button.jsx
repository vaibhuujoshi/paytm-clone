export default function Button({label, onClick}) {
    return <button onClick={onClick} className="text-base px-3 py-3 w-full rounded-xl 
        bg-linear-to-b from-mariner-700 to-mariner-800 text-mariner-50 hover:from-mariner-600 hover:to-mariner-700
        disabled:opacity-50 disabled:hover:from-mariner-700 disabled:hover:to-mariner-800 transition-all cursor-pointer shadow-sm shadow-sky-800 text-shadow-sky-200 text-shadow-xs">{label}</button>
}