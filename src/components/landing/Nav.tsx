export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex items-center justify-between border-b border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-[12px]">
      <div className="font-display font-extrabold text-[18px] tracking-[-0.5px] text-[#E8E6E0]">
        jay<span className="text-[#7F77DD]">.</span>platform
      </div>
      <ul className="flex items-center gap-8 list-none">
        <li>
          <a
            href="#"
            className="text-[13px] text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors no-underline tracking-[0.3px]"
          >
            Architecture
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[13px] text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors no-underline tracking-[0.3px]"
          >
            Observability
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[13px] text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors no-underline tracking-[0.3px]"
          >
            Load Tests
          </a>
        </li>
      </ul>
      <a
        href="#"
        className="text-[13px] font-medium text-[#E8E6E0] border border-white/20 px-5 py-2 rounded-md hover:border-[#7F77DD] hover:bg-[#7F77DD]/10 transition-all no-underline"
      >
        Try the demo →
      </a>
    </nav>
  )
}
