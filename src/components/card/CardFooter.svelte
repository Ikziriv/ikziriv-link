<script lang="ts">
    export let classes: string;
</script>

<div class="w-12 h-12 flex justify-center items-center border {classes}">
    <slot />
</div>