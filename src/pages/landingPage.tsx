import { useState } from "react"
import CardContainer from "../components/cardContainer"
import Login from "../pages/auth/login"
import Register from "./auth/register"

export default function landingPage() {

  const [userSignIn, setUserSignIn] = useState<boolean>(true)

  return (
    <div
        className="flex justify-center items-center bg-[#1F1B4F] w-full h-full"
    >   
      {userSignIn ? (
        <>
          <div
            className="flex flex-col justify-center items-center gap-y-2"
          >
            <h1 className="text-[#F9BF3B] sm:text-[45px] text-[35px] font-bold">CampusSync</h1>
            <h3 className="sm:text-[32] text-[22px] font-bold text-white">Sign In</h3>
            <CardContainer
              cardContainerDesign="bg-white shadow-lg rounded-lg p-4 min-w-[300px]"
            >
              <Login/>
            </CardContainer>
            <h4 
              className="text-white"
              style={{fontFamily: 'Roboto, sans-serif'}}
            >
              Create an account?
              <button 
                className="hover:text-[#F9BF3B] hover:underline cursor-pointer ml-1"
                onClick={() => setUserSignIn(false)}
              >
                Sign Up
              </button>
            </h4>
          </div>
        </>
      ) : (
        <>
          <div
            className="flex flex-col justify-center items-center gap-y-2"
          >
            <h1 className="text-[#F9BF3B] sm:text-[45px] text-[35px] font-bold">CampusSync</h1>
            <h3 className="sm:text-[32] text-[22px] font-bold text-white">Sign Up</h3>
            <CardContainer
                cardContainerDesign="bg-white shadow-lg rounded-lg p-4 min-w-[300px]"
            >
                <Register/>
            </CardContainer>
            <h3 
              className="text-white "
              style={{fontFamily: 'Roboto, sans-serif'}}
            >
              Already have an account?
              <button 
                className="hover:text-[#F9BF3B] hover:underline cursor-pointer ml-1"
                onClick={() => setUserSignIn(true)}
              >
                Sign in
              </button>
            </h3>
          </div>
        </>
      )}
    </div>
  )
}
