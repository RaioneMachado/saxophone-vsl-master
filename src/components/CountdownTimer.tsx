import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set countdown to 24 hours from now
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-3 min-w-[80px] glow-blue">
        <span className="text-4xl md:text-5xl font-bold text-primary glow-text-blue font-display">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/20 z-50 py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm md:text-base text-center text-foreground/80">
            ⚡ <span className="font-semibold text-primary">OFERTA EXCLUSIVA</span> termina em:
          </p>
          <div className="flex gap-3 md:gap-6">
            <TimeBlock value={timeLeft.hours} label="Horas" />
            <div className="flex items-center text-3xl md:text-4xl text-primary font-bold">:</div>
            <TimeBlock value={timeLeft.minutes} label="Minutos" />
            <div className="flex items-center text-3xl md:text-4xl text-primary font-bold">:</div>
            <TimeBlock value={timeLeft.seconds} label="Segundos" />
          </div>
        </div>
      </div>
    </div>
  );
};
