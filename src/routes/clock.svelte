<script>
  import { onMount, onDestroy } from 'svelte';


    /**
	 * @returns {Date}
	 */
 
  function getTbilisiTime() {
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const tbilisiOffset = 7 * 3600000; 
    const tbilisiTime = new Date(utc + tbilisiOffset);
    return tbilisiTime;
  }

  let time = getTbilisiTime();
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      time = getTbilisiTime();
    }, 1000);
  });


  onDestroy(() => {
    clearInterval(interval);
  });
  
  $: hours = time.getUTCHours().toString().padStart(2, '0');
  $: minutes = time.getUTCMinutes().toString().padStart(2, '0');
  $: seconds = time.getUTCSeconds().toString().padStart(2, '0');
</script>

<!-- 
  svelte:head allows us to insert elements into the document's <head>.
  Here, we're importing the 'Orbitron' font from Google Fonts to get a nice digital clock style.
-->
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- HTML structure for the clock -->
<div class="clock-container">
  <div class="clock-face">
    <span class="time-part">{hours}</span>
    <span class="separator">:</span>
    <span class="time-part">{minutes}</span>
    <span class="separator">:</span>
    <span class="time-part">{seconds}</span>
  </div>
  <div class="date-display">
    {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
  </div>
</div>

<!-- CSS styles for the clock -->
<style>
  .clock-container {
	margin-top: 20px;
    text-align: center;
    color: #fff;
    background: #14191f;
    padding: 40px 60px;
    border-radius: 25px;
    /* Create a layered shadow effect for depth */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
  }

  .clock-face {
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-size: 5rem; /* Large font for the time */
    font-weight: 700;
    line-height: 1;
    /* Neon glow effect for the text */
    
  }
  
  .time-part {
    min-width: 120px; /* Ensures the clock doesn't jiggle as numbers change */
    text-align: center;
  }

  .separator {
    font-size: 4rem;
    animation: blink 1s infinite; /* Blinking animation for the colon */
    margin: 0 10px;
    position: relative;
    top: -5px; /* Minor adjustment for better visual alignment */
  }

  /* Keyframe animation for the blinking effect */
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .date-display {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #ccc; /* Slightly dimmer color for the date */
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.2); /* Subtle glow */
  }
</style>
