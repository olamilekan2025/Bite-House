import "./NotFound.css"
import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()

    const gohame = () => {
        navigate("/")
    }
    return (
        <main className="not-found">
            <div className="not-found-container">
                <img src="https://res.cloudinary.com/divio4grm/image/upload/v1765392307/error-removebg-preview_tidkbj.png" alt="" />
            </div>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <button className="back-button" onClick={gohame}>BACK HOME</button>
        </main>
    )
}

export default NotFound
