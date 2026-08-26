export default function BarbersSection() {
  const barbers = [
    { name: "Marcus", role: "Master Barber", spec: "Classic cuts & skin fades", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800" },
    { name: "Daniel", role: "Senior Barber", spec: "Beard sculpting & modern cuts", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { name: "James", role: "Barber", spec: "Scissor work & styling", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="barbers" className="py-24 px-6 max-w-7xl mx-auto bg-[#F8F7F5]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#231F20] tracking-tight uppercase mb-4">Meet The Barbers</h2>
        <p className="text-[#5C564D]">Masters of their craft.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {barbers.map((barber, idx) => (
          <div key={idx} className="group relative border border-[#D1CCC5] bg-[#FCFBFA] p-4">
            <div className="aspect-[4/5] overflow-hidden mb-6 bg-[#EAE8E4]">
              <img 
                src={barber.img} 
                alt={barber.name} 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="text-center px-4 pb-4">
              <h3 className="text-xl font-serif text-[#231F20] uppercase tracking-tight mb-1">{barber.name}</h3>
              <p className="text-[#A67C52] text-xs uppercase tracking-widest font-semibold mb-3">{barber.role}</p>
              <p className="text-[#5C564D] text-sm mb-6">{barber.spec}</p>
              <button className="w-full border border-[#231F20] text-[#231F20] py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#231F20] hover:text-[#F8F7F5] transition-colors">
                Book {barber.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}