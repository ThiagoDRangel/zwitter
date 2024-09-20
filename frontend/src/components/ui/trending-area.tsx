import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export const TrendingArea = () => {
    return (
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TrendingItem label="#Bitcoin" count={4975} />
                <TrendingItem label="#tesla" count={5124} />
                <TrendingItem label="#Brasil" count={85} />
                <TrendingItem label="#Debate" count={354} />
                <TrendingItemSkeleton />
                <TrendingItemSkeleton />
            </div>
        </div>
    );
}
