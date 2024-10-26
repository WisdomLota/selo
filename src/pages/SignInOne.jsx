import SignUpNav from "../components/signUpNav"

const SignInOne = () => {
  return (
    <div className="min-h-screen bg-lightGreen">

        <SignUpNav />
        <div className="px-8 py-4">
            <h1 className="font-lora text-4xl text-darkish font-bold">Sign In</h1>

            <div className="md:w-3/4">
                <form action="">

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="email" className="text-xl text-darkish font-semibold">Email Address:</label>
                        <input type="email" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                    </div>

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="password" className="text-xl text-darkish font-semibold">Password:</label>
                        <input type="password" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                    </div>

                    <p className="text-xl text-darkish m-4">Forgot password?</p>

                    <div className="flex justify-end mx-4">
                        <p type="submit" className="text-xl font-semibold bg-darkish text-greenish text-center rounded-lg px-4 py-2 w-32">Sign In</p>
                    </div>

                </form>

                <div className="m-4 flex flex-col space-y-2">
                    <p className="text-xl text-darkish m-4 text-center">Or</p>
                    <p className="text-xl font-semibold bg-darkish text-greenish text-center rounded-lg px-4 py-2">Sign in with Google</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignInOne