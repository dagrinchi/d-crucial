import Image from 'next/image'

const MainLogo = () => {
    return <Image
        src="/d-crucial-logo.svg"
        alt="Daily The Crucial"
        width={253 * 2}
        height={63 * 2}
        priority
    />
}

export default MainLogo