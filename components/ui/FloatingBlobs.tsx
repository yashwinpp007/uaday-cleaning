export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large green blob */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-40 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, #d4eebc 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Yellow blob */}
      <div
        className="absolute top-1/4 -right-24 w-80 h-80 rounded-full opacity-30 animate-float"
        style={{
          background: 'radial-gradient(circle, #fef9c3 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '2s',
        }}
      />
      {/* Small green blob bottom */}
      <div
        className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full opacity-30 animate-float-reverse"
        style={{
          background: 'radial-gradient(circle, #d4eebc 0%, transparent 70%)',
          filter: 'blur(40px)',
          animationDelay: '4s',
        }}
      />
    </div>
  )
}
