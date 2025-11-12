import Button from "../../Atoms/Button/Button"
import Img from "../../Atoms/Img/Img"

function SectionPicture() {
    const Images = [
        { id: 1, src: '/image/Photo2.png' },
        { id: 2, src: '/image/Photo3.png' },
        { id: 3, src: '/image/Photo4.png' },
        { id: 4, src: '/image/Photo5.png' },
    ]
    return (
        <div className="w-full">
            <div className="w-2/3 flex justify-centere items-start flex-col gap-2">
                <div className="w-full">
                    <Img className={"w-full"} src={'/image/Photo1.png'} />
                </div>
                <div className="w-full flex justify-center items-center gap-4">
                    {Images.map((item) => (
                        <Button className={'w-1/4'}>
                            <Img className={'w-full'} src={item.src} />
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionPicture