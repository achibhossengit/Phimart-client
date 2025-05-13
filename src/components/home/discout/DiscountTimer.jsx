import { useEffect, useState } from "react";

const DiscountTimer = () => {
    const targetDate = new Date().getTime() + (1000 * 60 * 60 * 24 * 25);
    const getRemaininigTime = () =>{
        const now = new Date().getTime();
        const diff = targetDate - now;
        return{
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            mins: Math.floor((diff / (1000 * 60)) % 60),
            secs: Math.floor((diff / (1000)) % 60)
        };
    }

    const [timeLeft, setTimeLeft] = useState(getRemaininigTime())
    
    useEffect(()=>{
        const timer = setInterval(() => {
            setTimeLeft(getRemaininigTime())
        }, 1000);

        // clean up timer for avoiding leek memeroy issues
        return () => clearInterval(timer);
    }, [])

  return (
    <div className="flex  justify-center gap-5">
      <div className="font-bold">
        <span className="text-pink-500 text-3xl">{timeLeft.days}</span> <br />
        Days
      </div>
      <div className="font-bold">
        <span className="text-pink-500 text-3xl">{timeLeft.hours}</span> <br />
        Hrs
      </div>
      <div className="font-bold">
        <span className="text-pink-500 text-3xl">{timeLeft.mins}</span> <br />
        Min
      </div>
      <div className="font-bold">
        <span className="text-pink-500 text-3xl">{timeLeft.secs}</span> <br />
        Sec
      </div>
    </div>
  );
};

export default DiscountTimer;
