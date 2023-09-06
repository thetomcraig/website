import ascii_pic from "../assets/ascii_pic.png"
import "./image.css"

function ImageComponent() {
  return (
    <div className="image-container">
        <img
        className="tom-pic"
        src={ascii_pic}
        alt="Tom Craig ASCII Art"
        ></img>
    </div>
  )
}

export default ImageComponent
