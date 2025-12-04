<script>
    let name = "";
    let email = "";
    let content = "";
    let status = "idle"; // idle | sending | success | error
    let responseMessage = "";

    async function handleSubmit() {
        // Immediately show success and clear form (fire-and-forget)
        const submittedData = { name, email, content };

        status = "success";
        responseMessage = "Thank you for your message! ❤️";

        // Clear the form immediately
        name = "";
        email = "";
        content = "";

        // Send request in background, only show error if it fails
        try {
            const response = await fetch(
                "https://emails.andrinoff.com/api/andrinoff",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(submittedData),
                },
            );

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
        } catch (error) {
            console.error("Failed to send message:", error);
            status = "error";
            responseMessage = "Something went wrong. Please try again.";

            // Restore form data so user doesn't lose their message
            name = submittedData.name;
            email = submittedData.email;
            content = submittedData.content;
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
                placeholder="Your message here..."
            ></textarea>
        </div>

        <button type="submit" class="submit-btn"> [ submit ] </button>

        {#if responseMessage}
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
        border-bottom: 1px solid #30363d;
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
        background-color: #161b22;
        color: #d8dee9;
        border: 1px solid #30363d;
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
        color: #484f58;
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
        background-color: #88c0d0;
        color: #0d1117;
        font-weight: 700;
        font-size: 1rem;
        text-transform: lowercase;
        padding: 0.75rem;
        border: 1px solid #88c0d0;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        margin-top: 0.5rem;
    }

    .submit-btn:hover {
        background-color: #8fbcbb;
        border-color: #8fbcbb;
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
