import selo from "../assets/seloImage.png";
import menu from "../assets/menu.png";

const SignUpNav = () => {
  return (
    <div className="bg-darkish flex justify-between px-8 py-4">
        <div>
            <img src={selo} alt="selo-image" />
        </div>
        <div>
            <img src={menu} alt="menu-bar" />
        </div>
    </div>
  )
}

export default SignUpNav