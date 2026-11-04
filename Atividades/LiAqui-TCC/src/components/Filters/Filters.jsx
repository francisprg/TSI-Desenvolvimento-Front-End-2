function Filters() {
    return (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
            <button className="!rounded-full !border !border-slate-800 !bg-slate-800 !px-4 !py-2 text-sm font-medium text-white shadow-lg shadow-slate-800/25 transition-all duration-200">
                Todos
            </button>

            <button className="!rounded-full !border !border-stone-300 !bg-transparent !px-4 !py-2 text-sm font-medium text-slate-800 transition-all duration-200 hover:!border-slate-800 hover:!bg-white/60">
                Recentes
            </button>

            <button className="!rounded-full !border !border-stone-300 !bg-transparent !px-4 !py-2 text-sm font-medium text-slate-800 transition-all duration-200 hover:!border-slate-800 hover:!bg-white/60">
                Português
            </button>

            <button className="!rounded-full !border !border-stone-300 !bg-transparent !px-4 !py-2 text-sm font-medium text-slate-800 transition-all duration-200 hover:!border-slate-800 hover:!bg-white/60">
                Inglês
            </button>
        </div>
    );
}

export default Filters;