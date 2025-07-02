<!-- Mock change -->

<script>
    import { onMount, onDestroy } from "svelte";

    /**
     * @returns {Date}
     */

    function getTbilisiTime() {
        const now = new Date();
        const localTime = now.getTime();
        const localOffset = now.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        // Corrected offset for Tbilisi (GMT+4)
        const tbilisiOffset = 8 * 3600000;
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

    $: hours = time.getUTCHours().toString().padStart(2, "0");
    $: minutes = time.getUTCMinutes().toString().padStart(2, "0");
    $: seconds = time.getUTCSeconds().toString().padStart(2, "0");
</script>

<!-- The component now assumes it will be placed inside a styled container,
     so it only contains the clock elements themselves. -->
<div class="clock-container">
    <div class="clock-face">
        <span class="time-part">{hours}</span>
        <span class="separator">:</span>
        <span class="time-part">{minutes}</span>
        <span class="separator">:</span>
        <span class="time-part">{seconds}</span>
    </div>
    <div class="date-display">Tbilisi, Georgia</div>
</div>

<style>
    /* The component is now unstyled by default, inheriting font from its parent.
       This makes it a reusable "widget". */
    .clock-container {
        text-align: center;
        color: #eceff4; /* Brighter text for the clock time */
        width: 100%;
    }

    .clock-face {
        display: flex;
        align-items: baseline;
        justify-content: center;
        /* Inherits 'JetBrains Mono' from the global style */
        font-family: inherit;
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1;
        color: #eceff4;
    }

    .time-part {
        min-width: 80px;
        text-align: center;
    }

    .separator {
        font-size: 3rem;
        animation: blink 1.5s infinite;
        margin: 0 5px;
        position: relative;
        top: -3px;
        color: #88c0d0; /* Use theme accent color */
    }

    @keyframes blink {
        50% {
            opacity: 0.3;
        }
    }

    .date-display {
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1px;
        color: #81a1c1; /* Use theme subtext color */
    }

    /* --- Styles for Mobile Devices --- */
    @media (max-width: 600px) {
        .clock-face {
            font-size: 2.5rem;
        }

        .time-part {
            min-width: 55px;
        }

        .separator {
            font-size: 2rem;
        }

        .date-display {
            font-size: 0.9rem;
        }
    }
</style>
