import SignUpNav from "../components/signUpNav"

const SignUpTwo = () => {
  return (
    <div className="min-h-screen bg-lightGreen">

        <SignUpNav />
        
        <div className="px-8 py-4 space-y-4">
            <h1 className="font-lora text-4xl text-darkish font-bold">Sign Up</h1>
            <p className="text-darkish text-2xl">How would you like to sign up?</p>
            <div className="space-y-16 pt-16">
                <p className="text-center bg-darkish text-greenish rounded-lg py-4 px-8 text-1xl ">Sign Up Manually</p>
                <p className="text-center bg-darkish text-greenish rounded-lg py-4 px-8 text-1xl ">Sign Up With Google</p>
            </div>
        </div>
    </div>
  )
}

export default SignUpTwo