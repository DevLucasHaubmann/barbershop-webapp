import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TimeSlot = { id: string; time: string; available: boolean; };

const MOCK_TIME_SLOTS: TimeSlot[] = [
  { id: '1', time: '09:00', available: true },
  { id: '2', time: '09:30', available: true },
  { id: '3', time: '10:30', available: true },
  { id: '4', time: '11:00', available: false },
  { id: '5', time: '13:30', available: true },
  { id: '6', time: '14:00', available: true },
  { id: '7', time: '15:30', available: false },
  { id: '8', time: '17:00', available: true },
];

const AVAILABLE_DAYS = [25, 26, 27, 28, 31];

export default function AvailabilitySection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(27);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOffset = 6; 

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-[#F8F7F5] border-t border-[#D1CCC5]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#231F20] tracking-tight uppercase mb-4">Find Your Time</h2>
        <p className="text-[#5C564D]">Check our availability and reserve a time that works for you.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start bg-[#FCFBFA] p-8 md:p-12 border border-[#D1CCC5]">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#D1CCC5]">
            <h3 className="text-sm uppercase tracking-widest font-medium text-[#231F20]">August 2026</h3>
            <div className="flex gap-2">
              <button className="p-2 border border-[#D1CCC5] hover:bg-[#F8F7F5] transition-colors" aria-label="Previous Month">
                <ChevronLeft size={16} />
              </button>
              <button className="p-2 border border-[#D1CCC5] hover:bg-[#F8F7F5] transition-colors" aria-label="Next Month">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} className="text-xs uppercase tracking-widest font-semibold text-[#A39E98] py-2">{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="p-3" />
            ))}
            {daysInMonth.map((day) => {
              const isAvailable = AVAILABLE_DAYS.includes(day);
              const isSelected = selectedDate === day;
              const isToday = day === 25;

              return (
                <button
                  key={day}
                  disabled={!isAvailable}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedTime(null);
                  }}
                  className={`
                    relative p-3 text-sm flex items-center justify-center transition-all border
                    ${isSelected ? 'bg-[#4A3C31] text-[#F8F7F5] border-[#4A3C31]' : 'border-transparent'}
                    ${!isSelected && isAvailable ? 'hover:border-[#D1CCC5] hover:bg-[#F8F7F5] text-[#231F20]' : ''}
                    ${!isAvailable ? 'text-[#D1CCC5] cursor-not-allowed' : ''}
                    ${isToday && !isSelected ? 'border-b-[#A67C52] border-b-2' : ''}
                  `}
                >
                  {day}
                  {isAvailable && !isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 bg-[#A67C52] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 lg:border-l lg:border-[#D1CCC5]">
          <h3 className="text-sm uppercase tracking-widest font-medium text-[#231F20] mb-8 pb-4 border-b border-[#D1CCC5]">
            {selectedDate ? `Available Times — Aug ${selectedDate}` : 'Select a Date'}
          </h3>
          
          {selectedDate ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {MOCK_TIME_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  disabled={!slot.available}
                  onClick={() => setSelectedTime(slot.time)}
                  className={`
                    py-3 text-sm tracking-wider transition-colors border
                    ${!slot.available ? 'border-[#EAE8E4] text-[#D1CCC5] cursor-not-allowed bg-[#F8F7F5]' : ''}
                    ${slot.available && selectedTime !== slot.time ? 'border-[#D1CCC5] text-[#231F20] hover:border-[#4A3C31] bg-[#FCFBFA]' : ''}
                    ${selectedTime === slot.time ? 'bg-[#4A3C31] text-[#F8F7F5] border-[#4A3C31]' : ''}
                  `}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-[#A39E98] text-sm">Please select a date from the calendar to view available appointments.</p>
          )}

          <div className={`mt-8 transition-opacity duration-300 ${selectedTime ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
            <div className="bg-[#F8F7F5] p-4 border border-[#D1CCC5] mb-4 flex justify-between items-center text-sm">
              <span className="text-[#5C564D]">Thurs, Aug {selectedDate} at {selectedTime}</span>
              <span className="text-[#A67C52] font-semibold uppercase tracking-widest text-xs">Available</span>
            </div>
            <button className="w-full bg-[#4A3C31] text-[#F8F7F5] py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#322821] transition-colors">
              Continue Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}