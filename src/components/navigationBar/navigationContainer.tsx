import { useState } from "react"
import Notification from "./notification"
import WebsiteLogo from "./websiteLogo"
import Profile from "./profile"
import SearchBar from "../searchBar"
import SuggestionGroup from "./suggestionGroup/suggestionGroup"
import LogoHoverMessage from "./logoHoverMessage"
import NotificationClickModal from "./notificationClickModal"
import ProfileClickModal from "./profileClickModal"

export default function navigationContainer() {
    
    const [searchBarValue, setSearchBarValue] = useState<string>("")
    // const [clickSuggestionGroup, setClickSuggestionGroup] = useState<boolean>(false)
    const [clickNotification, setClickNotification] = useState<boolean>(false)
    const [clickProfile, setClickProfile] = useState<boolean>(false)

    const handleNotificationClick = () => {
        setClickNotification(!clickNotification)
        setClickProfile(false)
    }

    const handleProfileClick = () => {
        setClickProfile(!clickProfile)
        setClickNotification(false)
    }

  return (
    <div
        className="flex justify-between bg-[#F9BF3B] w-full h-18 py-2 px-10"
    >
        <div
            className="flex"
        >
            <WebsiteLogo />
        </div>
        <div
            className="w-[80vw] flex justify-between items-center"
        >
            <div
                className="flex gap-x-3 items-center"
            >
                <SearchBar 
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    placeholder="Search post, event, or item"
                />

                <SuggestionGroup />
            </div>

            {/* Right Section - Icons */}
            <div className="flex gap-x-6 items-center">
                <div className="relative group">
                <Notification 
                    badgeCount={5}
                    onClick={handleNotificationClick}
                />
                <LogoHoverMessage message="Notification" />
                </div>

                <div className="relative group">
                <Profile onClick={handleProfileClick}/>
                <LogoHoverMessage message="Profile" />
                </div>
            </div>
        </div>

        {clickNotification && <NotificationClickModal />}
        {clickProfile && <ProfileClickModal />}
        
    </div>
  )
}
