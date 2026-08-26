import { MapPin, Clock, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#D1CCC5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-serif text-[#231F20] tracking-tight uppercase mb-12">Visit The Shop</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#A67C52] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-sm uppercase tracking-widest font-semibold text-[#231F20] mb-2">Location</h4>
                <p className="text-[#5C564D] text-sm leading-relaxed">
                  124 Premium Avenue<br />
                  Suite 200<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-[#A67C52] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-sm uppercase tracking-widest font-semibold text-[#231F20] mb-2">Hours</h4>
                <div className="text-[#5C564D] text-sm space-y-1">
                  <div className="flex justify-between w-48"><span>Mon - Fri</span><span>9:00 - 19:00</span></div>
                  <div className="flex justify-between w-48"><span>Saturday</span><span>9:00 - 17:00</span></div>
                  <div className="flex justify-between w-48 text-[#A39E98]"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#A67C52] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-sm uppercase tracking-widest font-semibold text-[#231F20] mb-2">Contact</h4>
                <p className="text-[#5C564D] text-sm">
                  +1 (555) 123-4567<br />
                  hello@theproper.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EAE8E4] w-full min-h-[400px] border border-[#D1CCC5] flex items-center justify-center relative">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <span className="text-[#A39E98] text-sm uppercase tracking-widest font-medium z-10">Map Integration Container</span>
        </div>
      </div>
    </section>
  );
}