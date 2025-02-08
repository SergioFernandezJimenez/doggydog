<script>
  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";
  import "@egjs/svelte-flicking/dist/flicking.css";

  export let images;
</script>

<Flicking options={{ align: "center", circular: true }}>
  {#each images as image}
    <FlickingPanel>
      <img src={image.src} alt={image.alt} />
    </FlickingPanel>
  {/each}
</Flicking>
