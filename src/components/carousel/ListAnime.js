import Carousel from "@/components/carousel/index";
import CarouselItem from "@/components/carousel/CarouselItem";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

const ListAnime = ({title, data, buttonLink, loading}) => {
    return <div className={'flex flex-col gap-3'}>
        <div className={'flex flex-row justify-between text-white text-xl font-bold'}>
            <h1>{loading ? <Skeleton/> : title}</h1>
            {
                buttonLink
                &&
                <button className={'bg-[#6E28D8] rounded-lg px-2 py-0.5'}>Lihat Semua</button>
            }
        </div>
        <Carousel>
            {data && data.data.map(item => (
                <Link href={}
            ))}
        </Carousel>
    </div>;
}

export default ListAnime