import Image from 'next/image'
import React from 'react'

const LandingScreen1 = () => {
    return (
        <div>
           <div className = "flex flex-col lg:flex-row mt-10">
                <div className = "flex flex-1 flex-col mx-4  items-center pt-10 lg:pt-20">
                    <h2 className = "flex flex-wrap font-bold text-5xl mt-5 font-semibold text-lg text-center my-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d83c51] to-[#efb0b8]">WRITE REVIEWS AND EARN MONEY</h2>
                    <h4 className = "flex flex-wrap text-center	text-xl px-5 mt-3 ">Gone are the days when you write reviews on amazon or flipkart for free. Now write reviews and get money when your friends read your reviews and buy those products.</h4>
                </div>
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={533} height={533} src={'/Discovery.png'} alt="Candid Logo" layout = 'fixed'/>
                </div>
                <div className = "flex flex-1 flex-col mx-4  items-center pt-10 lg:pt-20">
                    <h2 className = "flex flex-wrap font-bold text-2xl mt-5 text-transparent bg-clip-text bg-gradient-to-br from-[#d83c51] to-[#efb0b8]">JOIN CANDID TODAY</h2>
                    <h4 className = "flex flex-wrap font-semibold text-lg mt-3">Download our android app</h4>
                    <a 
                        href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                        target="_blank"
                        rel="noreferrer"
                        className = "cursor-pointer "
                    >
                        <Image  
                        alt='Get it on Google Play' 
                        src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                        width = {320}
                        height = {120}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen1
