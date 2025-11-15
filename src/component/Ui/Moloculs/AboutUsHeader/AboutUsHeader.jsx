function AboutUsHeader(){
    return(
        <div className="bg-[url('/public/image/ContactUsImages/Banner.png')] bg-center bg-cover min-h-72 relative z-30">
            <div className="w-11/12 mx-auto flex justify-between">
                <div className="flex flex-col gap-6 text-white justify-center">
                    <P className="text-[clamp(1.8rem,3.6vw,4rem)] max-w-2xl">
                       About us
                    </P>
                    <P className="text-[clamp(1.rem,1.8vw,2.2rem)] max-w-sm">
                        We provide a complete service for the sale,
                        purchase or rental of real estate.
                    </P>
                </div>
                <Img src="/public/image/ContactUsImages/Building.png"></Img>
            </div>
        </div>
    )
}

export default AboutUsHeader