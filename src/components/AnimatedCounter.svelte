<script>
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export const targetNumber = 1000;
  export const duration = 3000;

  const counter = tweened(0, {
    duration: duration,
    easing: cubicOut,
  });

  onMount(() => {
    counter.set(targetNumber);
  });
</script>

<span>{Math.round($counter)}</span>
