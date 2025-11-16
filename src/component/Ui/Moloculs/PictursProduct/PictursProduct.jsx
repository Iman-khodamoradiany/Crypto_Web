import Button from "../../Atoms/Button/Button";
import Img from "../../Atoms/Img/Img";

function PictureProduct({setImgselect}) {
    const Images = [
        { id: 1, src: '/image/Photo2.png' },
        { id: 2, src: '/image/Photo3.png' },
        { id: 3, src: '/image/Photo4.png' },
        { id: 4, src: '/image/Photo5.png' },
    ]
    return (
        <div className="w-full h-[25%] flex justify-center items-center gap-4">
            {Images.map((item) => (
                <Button onClick={() => setImgselect(item.src)} className={'w-1/4 z-20'}>
                    <Img className={'w-full h-full'} src={item.src} />
                </Button>
            ))}
        </div>
    )
}

export default PictureProduct