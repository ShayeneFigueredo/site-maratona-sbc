import React, { useState, useEffect } from "react";

export default function Stats() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const eventDate = new Date("Nov 05, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <section className="countdown-section-clean">
      <div className="container">
        <h2 className="countdown-title">A MAIOR MARATONA DE PROGRAMAÇÃO. COMEÇOU AGORA!</h2>
        <div className="countdown-grid">
          <div className="countdown-block">
            <span className="glass-neon-number">{format(timeLeft.days)}</span>
            <span className="label">DIAS</span>
          </div>
          <div className="countdown-block">
            <span className="glass-neon-number">{format(timeLeft.hours)}</span>
            <span className="label">HORAS</span>
          </div>
          <div className="countdown-block">
            <span className="glass-neon-number">{format(timeLeft.minutes)}</span>
            <span className="label">MINUTOS</span>
          </div>
          <div className="countdown-block">
            <span className="glass-neon-number">{format(timeLeft.seconds)}</span>
            <span className="label">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}