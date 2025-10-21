import CardContainer from "../components/cardContainer"
import Register from "./auth/register"

export default function landingPage() {
  return (
    <div
        className="flex justify-center items-center bg-[#1F1B4F] w-full h-full"
    >
        <CardContainer
            cardContainerDesign="bg-white shadow-lg rounded-lg p-4 min-w-[300px]"
        >
            <Register/>
        </CardContainer>
    </div>
  )
}
