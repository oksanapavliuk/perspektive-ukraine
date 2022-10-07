<script>
  let isOpen = false;
</script>

<header>
  <div class="h-2.5 bg-blue" />
  <div class="h-2.5 bg-yellow" />
  <div class="bg-darkblue">
    <nav class="container mx-auto px-4 py-2">
      <div class="flex items-center justify-between">
        <a class="shrink-0" href="/">
          <img src="/logo.svg" class="w-36" alt="logo" />
        </a>
        <ul class="hidden md:flex space-x-6 list-none">
          <li class="text-blue hover:text-yellow">
            <a href="/#veranstaltungen">Veranstaltungen</a>
          </li>
          <li class="text-blue hover:text-yellow">
            <a href="/#projekte">Projekte</a>
          </li>
          <li class="text-blue hover:text-yellow">
            <a href="/#spenden">Spenden</a>
          </li>
          <li class="text-blue hover:text-yellow">
            <a href="/#mitarbeiten">Mitarbeiten</a>
          </li>
        </ul>
        <button
          on:click={() => (isOpen = !isOpen)}
          class="relative block w-6 h-6 md:hidden"
        >
          <span class="absolute top-1 left-0 w-6 h-0.5 bg-blue" />
          <span
            class="absolute top-1 left-0 w-6 h-0.5 bg-blue translate-y-[7px]"
          />
          <span
            class="absolute top-1 left-0 w-6 h-0.5 bg-blue translate-y-[14px]"
          />
        </button>
      </div>
      <div class="md:hidden" class:hidden={!isOpen}>
        <ul class="flex flex-col items-center space-y-6 py-8 list-none">
          <li class="text-blue hover:text-yellow">
            <a href="/#veranstaltungen">Veranstaltungen</a>
          </li>
          <li class="text-blue hover:text-yellow">
            <a href="/#projekte">Projekte</a>
          </li>
          <li class="text-blue hover:text-yellow">
            <a href="/#spenden">Spenden</a>
          </li>
          <li class="text-blue hover:text-yellow">
            <a href="/#mitarbeiten">Mitarbeiten</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
