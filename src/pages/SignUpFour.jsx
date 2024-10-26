import uploadImg from "../assets/uploadImg.png";
import SignUpNav from "../components/signUpNav";

const SignUpFour = () => {
  return (
    <div className="min-h-screen bg-lightGreen">

        <SignUpNav />
        <div className="px-8 py-4 space-y-4">
            <h1 className="font-lora text-4xl text-darkish font-bold">Sign Up</h1>
            
            <div className="px-8 py-4 md:w-1/2">
                <form action="">
                    <label htmlFor="id-image" className="text-xl">ID Card Image:</label>
                    <div className="bg-darkish w-fit p-8 rounded-lg text-lightGreen flex flex-col justify-center items-center text-center space-y-2 mt-4 text-lg">
                        <input type="file" name="id-image" />
                        <span><img src={uploadImg} alt="upload-symbol"/></span>
                        <span>Upload the image of a valid ID card (this can be a passport, a driver's license or an ID card)</span>
                        <span>Maiximum size of <b>2MB</b></span>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <p type="submit" className="text-xl font-semibold bg-darkish text-greenish text-center rounded-lg px-4 py-2 w-32">Done</p>
                    </div>
                </form>
            </div>

        </div>

    </div>
  )
}

export default SignUpFour