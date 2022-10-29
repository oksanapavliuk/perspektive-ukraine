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
        <ul class="hidden lg:flex space-x-6 list-none">
          <li class="text-blue hover:text-yellow">
            <a href="/#neuigkeiten">Neuigkeiten</a>
          </li>
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
        <!-- social links, feather icons -->
        <div class="hidden lg:flex text-blue space-x-2 justify-center">
          <a
            href="https://www.facebook.com/PerspektiveUkraine"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-facebook"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/perspektive-ukraine"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
              ><path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              /><rect x="2" y="9" width="4" height="12" /><circle
                cx="4"
                cy="4"
                r="2"
              /></svg
            >
          </a>
          <a
            href="https://instagram.com/perspektiveukraine.ev"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-instagram"
              ><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
            >
          </a>
        </div>

        <button
          on:click={() => (isOpen = !isOpen)}
          class="relative block w-6 h-6 lg:hidden"
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
      <div class="lg:hidden" class:hidden={!isOpen}>
        <ul class="flex flex-col items-center space-y-6 py-8 list-none">
          <li class="text-blue hover:text-yellow">
            <a href="/#neuigkeiten">Neuigkeiten</a>
          </li>
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
          <div class="flex text-blue space-x-2 justify-center">
            <a
              href="https://www.facebook.com/PerspektiveUkraine"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-facebook"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/perspektive-ukraine"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
                ><path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                /><rect x="2" y="9" width="4" height="12" /><circle
                  cx="4"
                  cy="4"
                  r="2"
                /></svg
              >
            </a>
            <a
              href="https://instagram.com/perspektiveukraine.ev"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
                ><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
              >
            </a>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</header>
