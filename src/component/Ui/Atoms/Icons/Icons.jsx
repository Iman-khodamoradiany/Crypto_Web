function Icons({ Name }) {
    switch (Name) {
        case "test":
            return '';
        case "hexagonInUserTestimonialsTitle":
            return <svg width="76" height="86" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 60.049C0 63.2294 1.67764 66.1683 4.40109 67.7585L33.5989 84.8074C36.3224 86.3975 39.6776 86.3975 42.4011 84.8074L71.5989 67.7585C74.3224 66.1683 76 63.2294 76 60.049V25.9511C76 22.7706 74.3224 19.8318 71.5989 18.2415L42.4011 1.19263C39.6776 -0.397544 36.3224 -0.397544 33.5989 1.19263L4.40109 18.2415C1.67764 19.8318 0 22.7706 0 25.9511V60.049Z" fill="url(#paint0_linear_1_700)" />
                <defs>
                    <linearGradient id="paint0_linear_1_700" x1="-13.3805" y1="5.47379" x2="-30.2865" y2="86.8888" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C8E6C9" />
                        <stop offset="1" stop-color="#FFECB3" />
                    </linearGradient>
                </defs>
            </svg>
        case "rightButtonSwiper":
            return <svg width="19" height="26" viewBox="0 0 19 26" fill="#2E7D3254" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8501 13L9.72748e-05 0V26L18.8501 13Z" fill="#2E7D3254" fill-opacity="0.33" />
            </svg>

        case "leftButtonSwiper":
            return <svg width="19" height="26" viewBox="0 0 19 26" fill="#2E7D3254" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13L18.85 0V26L0 13Z" fill="#2E7D3254" fill-opacity="0.33" />
            </svg>



    }
}

export default Icons