interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
      <div className="flex flex-col gap-1">
        <span className="font-display text-3xl font-bold text-[#E8E6E0] tracking-tight">
          {value}
        </span>
        <span className="text-xs uppercase tracking-widest text-[#E8E6E0]/40">
          {label}
        </span>
      </div>
  )
}