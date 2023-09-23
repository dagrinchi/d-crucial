import Image from 'next/image'

const MainLogo = () => {
    return <Image
        src="/d-crucial-logo.png"
        alt="The Daily Crucial"
        width={253 * 2}
        height={63 * 2}
        priority
    />
}

export default MainLogo