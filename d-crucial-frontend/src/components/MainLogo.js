import Image from 'next/image'

const MainLogo = () => {
    return <Image
        src="/d-crucial-logo.png"
        alt="The Daily Crucial"
        width={253}
        height={63}
        priority
    />
}

export default MainLogo