interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
      <div className="bg-[#0E0E16] p-8 hover:bg-[#11111A] transition-colors">
        <div className="w-9 h-9 rounded-lg bg-[#7F77DD]/15 flex items-center justify-center mb-5 text-base">
          {icon}
        </div>
        <h3 className="font-display font-bold text-[15px] text-[#E8E6E0] mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-[13px] leading-relaxed text-[#E8E6E0]/45">
          {description}
        </p>
      </div>
  )
}