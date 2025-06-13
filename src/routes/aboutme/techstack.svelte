<!-- App.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  // An array of items to display in the scrolling list.
  // You can replace this with any data you like.
  const items = [
    {
      Image: "typescript",
      Name: "TypeScript",
    },
    {
      Image: "svelte",
      Name: "Svelte",
    },
    {
      Image: "nextdotjs",
      Name: "Next.js",
    },
    {
      Image: "tailwindcss",
      Name: "TailwindCSS",
    },
    {
      Image: "python",
      Name: "Python",
    },
    {
      Image: "mysql",
      Name: "MySQL",
    },
    {
      Image: "rust",
      Name: "Rust",
    },
    {
      Image: "sharp",
      Name: "C#",
    },
    {
      Image: "godotengine",
      Name: "GDScript",
    },
    {
      Image: "go",
      Name: "Golang",
    },


    

  ];

  // We duplicate the items to create a seamless infinite scroll effect.
  const displayItems = [...items, ...items];

  let scroller; // Will hold the reference to our scrolling div
  let scrollHeight; // The total scrollable height of the content
  let scrollTop = 0; // The current vertical scroll position
  let isPaused = false; // Flag to pause the animation on hover
  let animationFrameId; // To store the requestAnimationFrame ID

  // This function runs once the component is mounted to the DOM.
  onMount(() => {
    // We get the actual scroll height after the component has rendered.
    scrollHeight = scroller.scrollHeight / 2; // We divide by 2 because we duplicated the items

    // The main animation loop
    const scroll = () => {
      // Only scroll if the animation is not paused
      if (!isPaused) {
        scrollTop += 0.5; // Adjust this value to change scroll speed
        // If we've scrolled past the end of the first list, reset to the top
        // to create the infinite loop effect.
        if (scrollTop >= scrollHeight) {
          scrollTop = 0;
        }
      }
      // Request the next frame to continue the animation
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation loop
    scroll();
  });

  // This function runs when the component is destroyed.
  // It's important to clean up the animation frame to prevent memory leaks.
  onDestroy(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  // Functions to handle pausing and resuming the scroll on mouse hover
  const handleMouseEnter = () => {
    isPaused = true;
  };

  const handleMouseLeave = () => {
    isPaused = false;
  };

  // This reactive statement is the fix. It runs whenever the `scrollTop`
  // variable changes, and it programmatically updates the scroll position
  // of our 'scroller' element. We check if 'scroller' is defined first
  // to avoid errors on the initial render.
  $: if (scroller) {
    scroller.scrollTop = scrollTop;
  }

</script>

<main class="flex flex-col items-center justify-center w-full  text-white font-sans p-4">
  <div class="w-full max-w-md mx-auto">
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-2">
      My tech Stack
    </h1>
    <br/>
    <br/>

    <div
      class="scroller-container h-80 w-full border border-gray-700 rounded-lg overflow-hidden shadow-lg"
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
    >

      <div
        class="scroller-content"
        bind:this={scroller}
      >
        {#each displayItems as item, i}
          <div class="p-4 border-b border-gray-700 text-lg transition-colors duration-300 hover:bg-purple-900/50 flex flex-row items-center gap-2">
            <img src="https://cdn.simpleicons.org/{item.Image}/grey" alt = "icon" width="20px"> {item.Name}
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  /* Import Tailwind CSS for styling */
  @import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

  /* Custom scrollbar for a more modern look */
  .scroller-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .scroller-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }

  /* This is the element that actually scrolls. */
  .scroller-content {
    height: 100%;
    overflow-y: scroll;
    /* This property allows for smooth programmatic scrolling on mobile */
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
    scrollbar-width: none;    /* Hide scrollbar for Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .scroller-content::-webkit-scrollbar {
    display: none;
  }
</style>
