import type { ButtonProps } from "../types/button"

export default function button({
    type = "submit",
     buttonContainerDesign = "bg-[#3B82F6] p-[10px] text-white rounded-[6px] hover:bg-[#2563EB] transition-colors duration-200 hover:cursor-pointer",
    buttonText,
    
}: ButtonProps) {
  return (
    <button
        type={type}
        className={buttonContainerDesign}
        style={{ fontFamily: 'Roboto, sans-serif' }}
    >
        {buttonText}
    </button>
  )
}
