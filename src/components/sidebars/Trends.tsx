import { Component, For } from "solid-js";

const trends = [
    {
        category: 'Sports',
        content: 'Some team won something',
        glideCount: 300
    },
    {
        category: 'Finance',
        content: 'Bitcoin glide',
        glideCount: 200
    },
    {
        category: 'Games',
        content: 'Elden Ring update',
        glideCount: 700
    },
    {
        category: 'Cooking',
        content: 'Cheesecake',
        glideCount: 100
    },
    {
        category: 'Nature',
        content: 'The gras is green',
        glideCount: 250
    }
];

const TrendsSidebar: Component = () => {

    return (
        <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
            <div class="flex-it p-4">
                <span class="text-xl font-bold">Trends</span>
            </div>


            <For each={trends}>
                { (trend) => 
                    <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                        <div class="flex-it">
                            <span class="text-gray-400 text-sm">
                                {trend.content}
                            </span>
                            <span class="text-lg font-bold">{trend.category}</span>
                            <span class="text-gray-400 text-sm">{trend.glideCount} glides</span>
                        </div>
                    </div>
                }
            </For>

            

        </div>
    );
};

export default TrendsSidebar;