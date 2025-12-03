import { WindowControls } from "../components/WindowControls"
import { useWindowStore } from "../store/window"
import { gallery } from "../constants"
import { WindowWrapper } from "../hoc/WindowWrapper"

const Photos = () => {
    const { openWindow } = useWindowStore()

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-white">
                    <h2>Photos</h2>

                </div>

            </div>

            <div className="flex w-full">
                <div className="gallery">
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow('imgfile', {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img
                                    })
                                }
                            >
                                <img src={img}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

const PhotoWrapper = WindowWrapper(Photos, 'photos')
export default PhotoWrapper
