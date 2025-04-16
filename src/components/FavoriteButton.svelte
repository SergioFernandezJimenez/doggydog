<script>
  let filled = false;

  function toggleHeart() {
    filled = !filled;
  }
</script>

<button class="heart-button" on:click={toggleHeart} aria-label="Me gusta">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="2"
    fill={filled ? "#ff0000" : "none"}
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
</button>

<style>
  .heart-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    color: #ff0000;
    transition: transform 0.2s;
  }

  .heart-button:hover {
    transform: scale(1.1);
  }

  .heart-button:active {
    transform: scale(0.9);
  }
</style>
