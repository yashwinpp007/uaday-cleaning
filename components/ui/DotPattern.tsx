export default function DotPattern({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.04,
      }}
      aria-hidden="true"
    />
  )
}
