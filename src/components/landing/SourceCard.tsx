export interface SourceCardProps {
  title: string
  icon: string
  description: string
  link: string
}

export function SourceCard({ icon, title, description, link }: SourceCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0E0E16] border border-white/[0.06] rounded-[10px] p-6 flex items-center justify-between hover:border-[#7F77DD]/30 hover:bg-[#7F77DD]/[0.05] transition-colors group"
    >
      <div className="flex items-center gap-[14px]">
        <div className="w-[38px] h-[38px] rounded-lg bg-white/[0.05] flex items-center justify-center text-base">
          {icon}
        </div>
        <div>
          <div className="font-display font-bold text-[14px] text-[#E8E6E0] mb-[3px]">{title}</div>
          <div className="text-[12px] text-[#E8E6E0]/40">{description}</div>
        </div>
      </div>
      <span className="text-[18px] text-[#E8E6E0]/20 group-hover:text-[#7F77DD] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
        ↗
      </span>
    </a>
  )
}
