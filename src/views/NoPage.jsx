import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export const NoPage = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div className="content-center gap-5">
            <h1 className="text-center">Unfortunately, you answered <span className="text-red-500">NO</span>.</h1>

            {timeLeft > 0 && (
                <div>
                    <h3>Your device will now explode within</h3>
                    <p className="text-foreground text-9xl text-center">
                        {timeLeft}
                    </p>
                </div>
            )}

            {timeLeft === 0 && (
                <div className="flex flex-col items-center gap-2">
                    <img src="/atomic-cat.jpg" alt="" className="size-100" />
                    <h1>KA-BOOOM!!!</h1>
                    <h3>Want to change your mind?</h3>

                    <button className="btn-primary" onClick={() => navigate('/she-answered-yes')} >
                        Yes
                    </button>

                    <h3>Say YES now.</h3>
                </div>
            )}
        </div>
    )
}