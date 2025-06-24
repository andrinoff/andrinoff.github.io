<script>
  import { onMount, onDestroy } from "svelte";

  const items = [
    { image: "typescript", name: "TypeScript" },
    { image: "svelte", name: "Svelte" },
    { image: "nextdotjs", name: "Next.js" },
    { image: "tailwindcss", name: "TailwindCSS" },
    { image: "python", name: "Python" },
    { image: "mysql", name: "MySQL" },
    { image: "go", name: "Golang" },
    { image: "git", name: "Git" },
    { image: "nodedotjs", name: "Node.js" },
    { image: "react", name: "React" },
    { image: "javascript", name: "JS" },
    { image: "rust", name: "Rust" },
  ];

  const NUM_COLUMNS = 4;
  let columns = [];

  // Distribute and shuffle items into columns for a more random look
  for (let i = 0; i < NUM_COLUMNS; i++) {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    // Duplicate for seamless looping
    columns.push([...shuffled, ...shuffled, ...shuffled]);
  }

  let columnElements = [];
  let animationFrameIds = [];

  onMount(() => {
    columnElements.forEach((columnEl, i) => {
      if (!columnEl) return;

      const isScrollingDown = i % 2 === 0;
      const scrollHeight = columnEl.scrollHeight / 3;
      let scrollTop = isScrollingDown ? 0 : scrollHeight;
      const speed = 0.3 + Math.random() * 0.4; // Random speed for each column

      const animate = () => {
        if (isScrollingDown) {
          scrollTop += speed;
          if (scrollTop >= scrollHeight) {
            scrollTop = 0;
          }
        } else {
          // Scrolling Up
          scrollTop -= speed;
          if (scrollTop <= 0) {
            scrollTop = scrollHeight;
          }
        }

        if (columnEl) {
          columnEl.scrollTop = scrollTop;
        }
        animationFrameIds[i] = requestAnimationFrame(animate);
      };

      animate();
    });
  });

  onDestroy(() => {
    animationFrameIds.forEach((id) => cancelAnimationFrame(id));
  });
</script>

<div class="tech-stack-container">
  <h1 class="section-title">My Tech Stack</h1>
  <div class="scroller-waterfall-container">
    {#each columns as columnItems, i}
      <div class="scroller-column">
        <div class="scroller-content" bind:this={columnElements[i]}>
          {#each columnItems as item}
            <div class="tech-item" title={item.name}>
              <img
                src="https://cdn.simpleicons.org/{item.image}/white"
                alt="{item.name} icon"
                class="tech-icon"
              />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .tech-stack-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-title {
    /* Assuming this class is defined in a parent/global style */
    /* If not, add styles here e.g.: */
    font-size: 2rem;
    color: #c9d1d9;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #30363d;
  }

  .scroller-waterfall-container {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    height: 400px;
    width: 100%;
    max-width: 500px; /* Adjust width as needed */
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );
    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );
  }

  .scroller-column {
    height: 100%;
    width: 100px; /* Width of each column */
  }

  .scroller-content {
    height: 100%;
    overflow-y: scroll;
    /* Hide scrollbars */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scroller-content::-webkit-scrollbar {
    display: none;
  }

  .tech-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 16px;
    margin-bottom: 1.5rem;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  .tech-item:hover {
    background-color: #21262d;
    transform: scale(1.05);
  }

  .tech-icon {
    width: 48px;
    height: 48px;
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    .scroller-waterfall-container {
      gap: 1rem;
      max-width: 100%;
    }
    .scroller-column {
      width: 80px;
    }
    .tech-item {
      width: 80px;
      height: 80px;
    }
    .tech-icon {
      width: 40px;
      height: 40px;
    }
  }
</style>
