// This page contains the sign up page for asking user if he/she is signing up as an agent or not
import SignUpNav from "../components/signUpNav"
const SignUpOne = () => {
  return (
    <div className="min-h-screen bg-lightGreen">
        <SignUpNav />

        <div className="px-8 py-4 space-y-4">
            <h1 className="font-lora text-4xl text-darkish font-bold">Sign Up</h1>
            <p className="text-darkish text-2xl">Are you signing up as a house agent?</p>
            <div className="flex justify-between w-1/4 pt-4 space-x-8">
                <p className="text-center bg-darkish text-greenish rounded-lg py-2 px-6 text-1xl">Yes</p>
                <p className="text-center bg-darkish text-greenish rounded-lg py-2 px-6 text-1xl">No</p>
            </div>
        </div>

    </div>
  )
}

export default SignUpOne