"use client"
import Flickity from "react-flickity-component";

const Carousel = ({children}) => {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: true,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <>
            <Flickity className="focus:outline-0 overflow-hidden rounded-xl" options={flickityOptions}>
                {children}
            </Flickity>
        </>
    )
}

export default Carousel