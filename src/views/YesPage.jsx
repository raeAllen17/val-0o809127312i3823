import { useState } from "react"
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

import { foods, attires, dateOptions } from "../static/foodSelection";
import { useNavigate } from "react-router-dom";

export const YesPage = () => {

    const navigate = useNavigate();

    const TOTAL_PAGES = 3;
    const [page, setPage] = useState(0);

    const [food, setFood] = useState('');
    const [attire, setAttire] = useState('');
    const [date, setDate] = useState('');

    return (
        <div className="content-center" >
            <div className="h-[720px] overflow-auto no-scrollbar flex flex-col items-center gap-5">
                <h1>Yey!</h1>

                <h3>Let's plan our date now.</h3>

                <div className="flex gap-x-5 items-center w-full justify-center">
                    <ChevronLeft
                        className="text-white cursor-pointer"
                        onClick={() => setPage(p => Math.max(p - 1, 0))}
                    />

                    {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
                        <div
                            key={index}
                            className={`size-3 rounded-full transition-all duration-300 ${page === index
                                ? "bg-white scale-125"
                                : "bg-white/40"
                                }`}
                        />
                    ))}

                    <ChevronRight
                        className="text-white cursor-pointer"
                        onClick={() => setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))}
                    />
                </div>

                {/* FOOD TAB */}
                {page === 0 && (
                    <div className="grid grid-cols-12 gap-3" >
                        <h1 className="text-accent col-span-12 text-center" >Foods</h1>

                        {foods.map(item => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    setFood(item.name);
                                    setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))
                                }}
                                className="col-span-12 md:col-span-6 p-5 border-2 rounded cursor-pointer hover:border-accent transition-all"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-50 w-full object-cover"
                                />
                                <h3 className="mt-2">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                )}

                {/* ATTIRE TAB */}
                {page === 1 && (
                    <div className="grid grid-cols-12 gap-3" >
                        <h1 className="text-accent col-span-12 text-center" >Attire</h1>
                        {attires.map(item => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    setAttire(item.name);
                                    setPage(p => Math.min(p + 1, TOTAL_PAGES - 1))
                                }}
                                className="col-span-12 md:col-span-6 p-5 border-2 rounded cursor-pointer hover:border-accent transition-all"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-50 w-full object-cover"
                                />
                                <h3 className="mt-2">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                )}

                {/* ATTIRE TAB */}
                {page === 2 && (
                    <div className="grid grid-cols-12 gap-3" >
                        <h1 className="text-accent col-span-12 text-center" >Date</h1>

                        {dateOptions.map(item => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    setDate(item.id);
                                    setPage(3)
                                }}
                                className="col-span-12 md:col-span-6 p-5 border-2 rounded cursor-pointer hover:border-accent transition-all"
                            >
                                <h1 className="text-center" >{item.date}</h1>
                                <h3 className="mt-2 text-center">{item.day}</h3>
                            </div>
                        ))}
                    </div>
                )}

                {food != '' && attire != '' && date != '' && page === 3 && (
                    <div className="flex flex-col gap-5">
                        <h1>Screenshot your results and show it to your alpha male:</h1>

                        <h3>Food: {food}</h3>
                        <h3>Attire: {attire}</h3>
                        <h3>Date: {date}</h3>

                        <h1>See you, <span className="text-red-500">baby!</span></h1>

                        <button className="btn-primary mt-5 w-1/2" onClick={() => navigate('/')}>
                            Back to start
                        </button>

                        <h1>Take a look at our images together!</h1>

                        <button className="btn-primary w-1/2" onClick={() => navigate('/our-images')}>
                            Take a look
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}