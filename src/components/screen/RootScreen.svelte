<script lang="ts"> 
    import { onDestroy, onMount } from 'svelte';
    import { Gradient } from '../../scripts/gradient';

    const gradient = new Gradient();
    let loaded = false;
    onMount(() => {
        // @ts-ignore
        gradient.initGradient('#gradient-canvas');
        loaded = true;
    });

    $: y = 0;
    $: innerY = 100;
    $: currentPage = Math.floor((y + innerY / 1.8) / innerY);
    $: hueRotate = currentPage * 70;
    $: console.log(hueRotate);
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerY} />
<canvas
  id="gradient-canvas"
  style="filter: hue-rotate({hueRotate}deg)"
  data-transition-in
/>
<slot />

<style>
  #gradient-canvas {
    position: fixed;
    opacity: 70%;
    width: 100%;
    height: 100%;
    --gradient-color-1: #c3e4ff;
    --gradient-color-2: #6ec3f4;
    --gradient-color-3: #eae2ff;
    --gradient-color-4: #b9beff;
    z-index: -10;
    transition: 1s filter linear;
  }
</style>