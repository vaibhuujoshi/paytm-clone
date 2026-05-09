export default function Appbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="text-xl font-bold text-mariner-50 tracking-tight">
          Pay<span className="text-mariner-500">TM</span>
        </div>

        <div className="flex items-center">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello, User
            </div>
          <div className="bg-mariner-600 hover:bg-mariner-500 rounded-full text-white h-12 w-12 text-center text-sm font-semibold transition-all cursor-pointer">
            <h1 className="flex flex-col justify-center h-full text-xl">
                    U
                </h1>
          </div>
        </div>
      </div>
    </nav>
  )
}
