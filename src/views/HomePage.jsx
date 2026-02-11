import { Outlet } from "react-router-dom"

// STARS BACKGROUND
const STARS_COUNT = 150;
const stars = Array.from({ length: STARS_COUNT }, () => {
    const size = Math.random() * 3 + 1;

    return {
        top: Math.random() * (100 - size),
        left: Math.random() * (100 - size),
        size,
        delay: Math.random() * 5
    };
});

export const HomePage = () => {
    return (
        <div className="h-screen overflow-x-hidden overflow-y-auto m-0 p-0 bg-black relative flex justify-center">
            <div className="fixed inset-0 top-0 left-0">
                {stars.map((star, idx) => (
                    <div
                        key={idx}
                        className="star"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="content-wrapper bg-transparent z-1"> 
                <Outlet />
            </div>
        </div>
    )
}
