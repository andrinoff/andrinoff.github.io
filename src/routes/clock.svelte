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
    Tbilisi, Georgia
  </div>
</div>

<style>
  .clock-container {
    margin-top: 20px;
    text-align: center;
    color: #fff;
    background: #14191f;
    padding: 40px 60px;
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .clock-face {
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-family: 'Orbitron', sans-serif; /* Moved font-family here to apply to all children */
    font-size: 5rem;
    font-weight: 700;
    line-height: 1;
  }

  .time-part {
    min-width: 120px;
    text-align: center;
  }

  .separator {
    font-size: 4rem;
    animation: blink 1s infinite;
    margin: 0 10px;
    position: relative;
    top: -5px;
  }

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
    color: #ccc;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }

  /* --- Styles for Mobile Devices --- */
  @media (max-width: 600px) {
    .clock-container {
      /* Reduce padding for smaller screens */
      padding: 25px 20px;
      margin: 20px 15px; /* Add some horizontal margin */
    }

    .clock-face {
      /* Decrease the main clock font size */
      font-size: 3rem;
    }

    .time-part {
      /* Adjust min-width to fit the smaller font size */
      min-width: 70px;
    }

    .separator {
      /* Scale down the separator font size */
      font-size: 2.5rem;
      margin: 0 5px; /* Reduce space around separators */
    }

    .date-display {
      /* Make the date font size slightly smaller */
      font-size: 1rem;
    }
  }
</style>