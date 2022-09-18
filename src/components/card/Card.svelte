<script lang="ts">
    type Link = {
        title: string;
        url: string;
        description: string;
        iconName: string;
    }

    export let iconActive: boolean;
    const LinkList: Link[] = [
        {
            title: 'Site',
            url: 'https://ikziriv.com',
            description: ' Official Site',
            iconName: 'bi:globe',
        },
        {
            title: 'Instagram',
            url: 'https://instagram.com/ikziriv.art',
            description: ' Instagram',
            iconName: 'bi:instagram',
        },
        {
            title: 'Behance',
            url: 'https://behance.com/ikziriv.art',
            description: ' Behance',
            iconName: 'bi:behance',
        },
        {
            title: 'Dribbble',
            url: 'https://dribble.com/ikziriv.art',
            description: ' Dribble',
            iconName: 'bi:dribbble',
        },
    ]
</script>

{#each LinkList as link}
<a href={link.url} target="_blank" class="col-span-full bg-zinc-100 dark:bg-zinc-900 flex justify-between items-center w-auto h-auto py-2 shadow-md hover:shadow-lg shadow-zinc-200 dark:shadow-zinc-800 rounded-xl">
    <div class="flex flex-row w-auto h-auto space-x-4">
        {#if iconActive}
        <div class="w-12 h-12 flex justify-center items-center border">
            <!-- <Icon class="w-6 w-6 text-zinc-100" name={link.iconName} /> -->
        </div>
        {/if}
        <div class="flex flex-col justify-center items-start px-8 w-64 h-16">
            <span class="font-bold text-xl">
                {link.title}
            </span>
            <p class="text-xs w-full h-auto -mt-1">
                <span class="font-medium">Link :</span> {link.description}
            </p>
        </div>
    </div>
    <div class="w-auto h-auto px-4">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    </div>
</a>
{/each}