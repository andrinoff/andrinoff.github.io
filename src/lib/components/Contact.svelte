<script>
    let name = "";
    let email = "";
    let content = "";
    let status = "idle"; // idle | sending | success | error
    let responseMessage = "";

    async function handleSubmit() {
        status = "sending";
        responseMessage = "Sending...";

        try {
            const response = await fetch(
                "https://emails.andrinoff.com/api/andrinoff",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, content }),
                },
            );

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            await response.json();

            status = "success";
            responseMessage = "Message sent successfully! ✨";

            // Clear the form
            name = "";
            email = "";
            content = "";
        } catch (error) {
            console.error("Failed to send message:", error);
            status = "error";
            responseMessage = "Something went wrong. Please try again.";
        }
    }
</script>

<section class="contact-section">
    <h2 class="widget-title">~/contact</h2>
    <form class="contact-form" on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="name">name</label>
            <input
                type="text"
                id="name"
                required
                bind:value={name}
                disabled={status === "sending"}
                placeholder="your_name"
            />
        </div>
        <div class="form-group">
            <label for="email">email</label>
            <input
                type="email"
                id="email"
                required
                bind:value={email}
                disabled={status === "sending"}
                placeholder="you@domain.com"
            />
        </div>
        <div class="form-group">
            <label for="content">message</label>
            <textarea
                id="content"
                rows="5"
                required
                bind:value={content}
                disabled={status === "sending"}
                placeholder="Your message here..."
            ></textarea>
        </div>

        <button
            type="submit"
            class="submit-btn"
            disabled={status === "sending"}
        >
            {#if status === "sending"}
                [ sending... ]
            {:else}
                [ submit ]
            {/if}
        </button>

        {#if responseMessage && status !== "sending"}
            <p class="response-message {status}">{responseMessage}</p>
        {/if}
    </form>
</section>

<style>
    /* The component's root is now styled by the :global(.widget-card) class in the parent page */
    .contact-section {
        /* Inherits all widget-card styles from parent */
    }

    .widget-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #88c0d0; /* Accent color for titles */
        margin-top: 0;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #4c566a;
    }
    /* Add a little shell prompt character to the title */
    .widget-title::before {
        content: "$ ";
        color: #a3be8c; /* Green for prompt */
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: #81a1c1; /* Lighter blue for subtext */
        text-transform: lowercase;
    }

    input,
    textarea {
        background-color: #2e3440;
        color: #d8dee9;
        border: 1px solid #4c566a;
        border-radius: 6px;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        font-family: inherit;
        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
    }

    input::placeholder,
    textarea::placeholder {
        color: #4c566a;
        opacity: 1;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #88c0d0;
        box-shadow: 0 0 0 2px rgba(136, 192, 208, 0.2);
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    .submit-btn {
        font-family: inherit;
        background-color: #81a1c1;
        color: #2e3440;
        font-weight: 700;
        font-size: 1rem;
        text-transform: lowercase;
        padding: 0.75rem;
        border: 1px solid #434c5e;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-top: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
        background-color: #88c0d0;
        border-color: #88c0d0;
        color: #2e3440;
    }

    .submit-btn:disabled {
        background-color: #434c5e;
        opacity: 0.6;
        cursor: not-allowed;
    }

    .response-message {
        text-align: center;
        margin-top: 0.5rem;
        padding: 0.75rem;
        border-radius: 8px;
        font-weight: 500;
        border: 1px solid;
    }

    .response-message.success {
        background-color: rgba(163, 190, 140, 0.1);
        color: #a3be8c;
        border-color: #a3be8c;
    }

    .response-message.error {
        background-color: rgba(191, 97, 106, 0.1);
        color: #bf616a;
        border-color: #bf616a;
    }
</style>
