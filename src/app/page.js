import ListAnime from "@/components/carousel/ListAnime";

export async function getRecommended() {
    const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=10&type=tv', {
        next: {revalidate: 3600}
    });
    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();
}

export default async function Page() {
    const recommendedData = getRecommended();

    const [recommended] = await Promise.all([recommendedData]);

    return (
        <div className={'container pt-5 flex flex-col gap-4'}>
            <ListAnime title={'Recomended Anime'} buttonLink={'/'} data={recommended}/>
        </div>
    );
}