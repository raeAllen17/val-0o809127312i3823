import { images } from "@/static/images"
import { useNavigate } from "react-router-dom"

export const ImagesShow = () => {

    const navigate = useNavigate();

    return (
        <div className="content-center" >
            <button className="btn-secondary mb-3" onClick={() => navigate('/')}>
                Go back to start
            </button>
            <div className="h-[720px] overflow-auto no-scrollbar flex flex-col items-center gap-5">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`image-${index}`}
                        className="instax h-3/4 w-3/4 object-cover"
                    />
                ))}

                <button className="btn-secondary mb-3" onClick={() => navigate('/my-message')}>
                    I have a message for you
                </button>
            </div>
        </div>
    )
}