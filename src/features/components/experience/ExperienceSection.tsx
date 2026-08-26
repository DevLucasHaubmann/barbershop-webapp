
export default function ExperienceSection() {
  const principles = [
    { title: "Precision", desc: "Every detail is considered, measured, and perfected." },
    { title: "Experience", desc: "Classic techniques combined with a modern, tailored approach." },
    { title: "Consistency", desc: "The exact same premium standard, every single visit." },
    { title: "Confidence", desc: "You will always leave looking sharper than you arrived." }
  ];

  return (
    <section className="bg-[var(--color-brown-dark)] text-[#F8F7F5] py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight uppercase mb-6 leading-tight">Craft Over<br />Everything.</h2>
          <p className="text-[#A39E98] mb-8 leading-relaxed">
            We don't rush. We don't cut corners. We believe that a great haircut is the foundation of a man's confidence.
          </p>
          <button className="text-[#F8F7F5] text-xs uppercase tracking-widest font-medium border-b border-[#F8F7F5] pb-1 hover:text-[#A67C52] hover:border-[#A67C52] transition-colors">
            Read Our Story
          </button>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {principles.map((p, idx) => (
            <div key={idx} className="border-t border-[#4A3C31] pt-6">
              <h3 className="text-lg text-[#F8F7F5] uppercase tracking-widest mb-3">{p.title}</h3>
              <p className="text-[#A39E98] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}