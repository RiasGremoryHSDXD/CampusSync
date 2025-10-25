import Button from "../button"
import { useState } from "react"

export default function suggestionGroup() {
    
    const [clickSuggestionGroup, setClickSuggestionGroup] = useState<boolean>(false)

    const handleClickSuggestionGroup = (e: React.FormEvent) => {
        e.preventDefault()

        alert("Click Suggestion Group")
    }

    return (
    <form action="" onSubmit={handleClickSuggestionGroup}>
        <Button 
            type="submit"
            buttonContainerDesign="bg-[#3B82F6] p-[6px] w-full text-white rounded-[6px] hover:bg-[#2563EB] transition-colors duration-200 hover:cursor-pointer"
            buttonText="Suggest Group"
            onClick={() => setClickSuggestionGroup(true)}
        />
        {clickSuggestionGroup && ("")}
    </form>
  )
}
