const CarouselItem = ({data}) => {
    return <div className={'flex flex-col w-80 mr-3 gap-1'}>
        <div className={'relative'}>
            <img src={data.images.webp.image_url}
                 alt={data.title} className={'rounded-xl object-cover w-full h-52'}/>
            <h1 className={'text-white absolute top-2 left-2 bg-[#6E28D8] px-2 py-1 rounded-lg'}>{`Episodes ${data.episodes}`}</h1>
            <h1 className={'text-white absolute top-2 right-2 bg-[#6E28D8] px-2 py-1 rounded-lg'}>{data.type}</h1>
        </div>
        <h1 className={'text-white text-xl'}>{data.title}</h1>
    </div>
}

export default CarouselItem;