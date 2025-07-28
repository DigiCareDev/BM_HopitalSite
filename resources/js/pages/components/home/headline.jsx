import React from 'react'

function Headline({translations}) {
    return (
        <>
            <marquee  scrollamount="3" scrolldelay="50"direction="left" className="block lg:hidden text-md font-semibold text-red-700" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()}>
               <span>  {translations?.news || ' "बीएम अस्पताल 14 सितंबर 2025 को सुबह 10 बजे से शाम 5 बजे तक शीर्ष विशेषज्ञ डॉक्टरों के साथ नि:शुल्क चिकित्सा शिविर का आयोजन करेगा। "'}</span>
            </marquee>
        </>
    )
}

export default Headline
