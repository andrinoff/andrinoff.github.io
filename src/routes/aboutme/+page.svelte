<script>
  import Techstack from "./techstack.svelte";
</script>

<div id="root">
  <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Education:</h1>
  <br />
  <p>2024-2026: A-levels</p>
  <p id="lower">CS, Math, Econ at Projector School.</p>
  <br />
  <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">Experience:</h1>
  <div class="grid grid-cols-[40px_1fr] gap-x-2 px-4">
    <div class="flex flex-col items-center gap-1 pt-3">
      <div
        class="text-[#101418]"
        data-icon="Buildings"
        data-size="24px"
        data-weight="regular"
      >
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="5" fill="white" />
        </svg>
      </div>
      <div class="w-[1.5px] bg-[#d4dbe2] h-2 grow"></div>
    </div>
    <div class="flex flex-1 flex-col py-3">
      <p class="text-[#fff] text-base font-medium leading-normal">
        Studio Fullstack Engineer
      </p>
      <p class="text-[#5c738a] text-base font-normal leading-normal">
        2023-2024
      </p>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="w-[1.5px] bg-[#d4dbe2] h-2"></div>
      <div
        class="text-[#101418]"
        data-icon="RocketLaunch"
        data-size="24px"
        data-weight="regular"
      >
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="5" fill="white" />
        </svg>
      </div>
      <div class="w-[1.5px] bg-[#d4dbe2] h-2 grow"></div>
    </div>
    <div class="flex flex-1 flex-col py-3">
      <p class="text-[#fff] text-base font-medium leading-normal">
        Freemoviesfull.cc Backend Engineer
      </p>
      <p class="text-[#5c738a] text-base font-normal leading-normal">
        2024-2025
      </p>
    </div>
    <div class="flex flex-col items-center gap-1">
      <div class="w-[1.5px] bg-[#d4dbe2] h-2"></div>
      <div
        class="text-[#101418]"
        data-icon="RocketLaunch"
        data-size="24px"
        data-weight="regular"
      >
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="5" fill="white" />
        </svg>
      </div>

      <div class=" bg-[#d4dbe2] h-2 grow"></div>
    </div>
    <div class="flex flex-1 flex-col py-3">
      <p class="text-[#fff] text-base font-medium leading-normal">
        Freelance Fullstack Engineer
      </p>
      <p class="text-[#5c738a] text-base font-normal leading-normal">
        2022-present
      </p>
    </div>
  </div>
  <br />
  <Techstack />
  <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">See more:</h1>
  <div class="text-center flex space-between justify-center flex-col">
    <a class="underline" href="https://andrinoff.com/cv">CV</a>
    <a class="underline" href="https://andrinoff.com/appreciations"
      >Appreciations</a
    >
  </div>
</div>
<a rel="me" href="https://mastodon.social/@andrinoff">Mastodon</a>

<style>
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
  h1 {
    margin-top: 20px;
  }
  #root {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  #lower {
    margin: 0px;
    color: #818181;
  }
</style>
