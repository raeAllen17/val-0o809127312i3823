import { useNavigate } from "react-router-dom"

export const InvitationPage = () => {

    const navigate = useNavigate();

    return (
        <div className="content-center gap-5" >
            <h1>
                Hello baby, <br />
                Will you be my <span className="text-red-500" >Valentines</span> date?
            </h1>

            <img src="https://res.cloudinary.com/di1otqhjw/image/upload/v1770825940/ChatGPT_Image_Feb_10_2026_01_00_38_AM_o8udra.png" alt="" className="h-100 w-100" />

            <div className="flex items-center gap-3">
                <button className="btn-secondary" onClick={() => navigate('/she-answered-no')} >
                    No
                </button>
                <button className="btn-primary" onClick={() => navigate('/she-answered-yes')}>
                    Yes 
                </button>
            </div>
        </div>
    )
}