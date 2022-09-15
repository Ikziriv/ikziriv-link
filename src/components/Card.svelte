<script lang="ts">
    import { destroy_component, each } from "svelte/internal";

    type Link = {
        title: string;
        url: string;
        description: string;
    }

    const LinkList: Link[] = [
        {
            title: 'Site',
            url: 'https://ikziriv.com',
            description: ' Official Site'
        },
        {
            title: 'Instagram',
            url: 'https://instagram.com/ikziriv.art',
            description: ' Instagram Link'
        },
        {
            title: 'Behance',
            url: 'https://behance.com/ikziriv.art',
            description: ' Behance Link'
        },
        {
            title: 'Dribbble',
            url: 'https://dribble.com/ikziriv.art',
            description: ' Dribble Link'
        },
    ]
</script>

{#each LinkList as link}
<div class="col-span-full flex justify-between items-center w-auto h-auto py-2 shadow-md hover:shadow-lg rounded-xl">
    <div class="flex flex-col justify-center items-start px-8 w-64 h-16">
        <span class="font-bold text-xl">
            {link.title}
        </span>
        <p class="text-xs w-full h-auto -mt-1">
            {link.description}
        </p>
    </div>
    <div class="w-auto h-auto">
    </div>
</div>
{/each}