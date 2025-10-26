import Button from "../../button"
import { useState } from "react"
import SuggestionGroupClickModal from "./suggestionGroupClickModal"

export default function suggestionGroup() {
    
    const [clickSuggestionGroup, setClickSuggestionGroup] = useState<boolean>(false)

    const handleClickSuggestionGroup = (e: React.FormEvent) => {
        e.preventDefault()

        setClickSuggestionGroup(true)
    }

    return (
    <form action="" onSubmit={handleClickSuggestionGroup}>
        <Button 
            type="submit"
            buttonContainerDesign="bg-[#3B82F6] p-[6px] w-full text-white rounded-[6px] hover:bg-[#2563EB] transition-colors duration-200 hover:cursor-pointer"
            buttonText="Suggest Group"
            onClick={() => setClickSuggestionGroup(true)}
        />
        {clickSuggestionGroup && (<SuggestionGroupClickModal onClose={() => setClickSuggestionGroup(false)}/>)}
    </form>
  )
}
