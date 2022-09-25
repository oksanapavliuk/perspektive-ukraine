<script>
  let isOpen = false;
</script>

<button
  on:click={() => (isOpen = !isOpen)}
  class="relative block w-6 h-6 md:hidden"
>
  <span class="absolute top-1 left-0 w-6 h-0.5 bg-blue" />
  <span class="absolute top-1 left-0 w-6 h-0.5 bg-blue translate-y-[7px]" />
  <span class="absolute top-1 left-0 w-6 h-0.5 bg-blue translate-y-[14px]" />
</button>
