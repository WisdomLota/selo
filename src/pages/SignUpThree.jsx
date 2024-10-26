import SignUpNav from "../components/signUpNav"

const SignUpThree = () => {
  return (
    <div className="min-h-screen bg-lightGreen">

        <SignUpNav />

        <div className="px-8 py-4">
            <h1 className="font-lora text-4xl text-darkish font-bold">Sign Up</h1>

            <div className="md:w-3/4">
                <form action="">

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="firstName" className="text-xl text-darkish font-semibold">First Name:</label>
                        <input type="text" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                        <p></p>
                    </div>

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="firstName" className="text-xl text-darkish font-semibold">Last Name:</label>
                        <input type="text" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                        <p></p>
                    </div>

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="gender" className="text-xl text-darkish font-semibold">Gender:</label>
                        <select name="gender" id="gender" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <p></p>
                    </div>

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="email" className="text-xl text-darkish font-semibold">Email Address:</label>
                        <input type="email" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                    </div>

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-xl text-darkish font-semibold">Mobile Number:</label>
                        <input type="tel" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                    </div>

                    <div className="m-4 flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-xl text-darkish font-semibold">WhatsApp Number:</label>
                        <input type="tel" className="border-2 border-darkish p-2 rounded-lg bg-lightGreen"/>
                    </div>

                    <div className="flex justify-end mx-4">
                        <p type="submit" className="text-xl font-semibold bg-darkish text-greenish text-center rounded-lg px-4 py-2 w-32">Done</p>
                    </div>

                </form>
            </div>

        </div>
    </div>
  )
}

export default SignUpThree