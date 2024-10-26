import SignUpNav from "../components/signUpNav"

const SignUpFive = () => {
  return (
    <div className="bg-lightGreen min-h-screen">

        <SignUpNav />

        <div className="px-8 py-4 space-y-4">
        <h1 className="font-lora text-4xl text-darkish font-bold">Sign Up</h1>

            <div className="pl-4">
                <h2 className="text-xl font-semibold">Password setup</h2>
                <p>For your password to be secure it must;</p>
                <div className="pl-4">
                    <ul className="list-disc list-inside">
                        <li>have one capital letter</li>
                        <li>have one small letter (a-z)</li>
                        <li>have one digit (0-9)</li>
                        <li>have one symbol (!@#$%^&*?)</li>
                        <li>be at least 8 characters loong</li>
                    </ul>
                </div>

                <div className="md:w-3/4">
                    <form action="">
                        <div className="mt-4 flex flex-col space-y-2">
                            <label htmlFor="password" className="text-xl text-darkish font-semibold">Password:</label>
                            <input type="password" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                            <p></p>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                            <label htmlFor="confirmPassword" className="text-xl text-darkish font-semibold">Confirm Password:</label>
                            <input type="password" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                            <p></p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p type="submit" className="text-xl font-semibold bg-darkish text-greenish text-center rounded-lg px-4 py-2 w-32">Done</p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default SignUpFive