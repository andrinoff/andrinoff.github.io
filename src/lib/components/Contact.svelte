<script>
    let name = "";
    let email = "";
    let content = "";
    let status = "idle"; // idle | sending | success | error
    let responseMessage = "";

    async function handleSubmit() {
        status = "sending";
        responseMessage = "";

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

            // Assuming the server sends back a JSON response
            const result = await response.json();

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
    <h2 class="contact-title">Contact Me</h2>
    <form class="contact-form" on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                required
                bind:value={name}
                disabled={status === "sending"}
            />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                required
                bind:value={email}
                disabled={status === "sending"}
            />
        </div>
        <div class="form-group">
            <label for="content">Message</label>
            <textarea
                id="content"
                rows="5"
                required
                bind:value={content}
                disabled={status === "sending"}
            ></textarea>
        </div>

        <button
            type="submit"
            class="submit-btn"
            disabled={status === "sending"}
        >
            {#if status === "sending"}
                Sending...
            {:else}
                Send Message
            {/if}
        </button>

        {#if responseMessage}
            <p class="response-message {status}">{responseMessage}</p>
        {/if}
    </form>
</section>

<style>
    /* Contact Section Styles - matching your page's aesthetic */
    .contact-section {
        width: 100%;
        max-width: 900px;
        background-color: #161b22;
        border: 1px solid #30363d;
        border-radius: 24px;
        padding: 2.5rem;
        animation: floatIn 0.8s ease-out 0.4s;
        animation-fill-mode: backwards;
    }

    @keyframes floatIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .contact-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: #c9d1d9;
        margin-top: 0;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #30363d;
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
        font-weight: 500;
        color: #8b949e;
    }

    input,
    textarea {
        background-color: #0d1117;
        color: #c9d1d9;
        border: 1px solid #30363d;
        border-radius: 8px;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        font-family: inherit;
        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #58a6ff;
        box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);
    }

    textarea {
        resize: vertical;
        min-height: 120px;
    }

    .submit-btn {
        background-color: #333;
        color: #ffffff;
        font-weight: 600;
        font-size: 1rem;
        padding: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s ease;
        margin-top: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
        background-color: #222;
    }

    .submit-btn:disabled {
        background-color: #111;
        opacity: 0.6;
        cursor: not-allowed;
    }

    .response-message {
        text-align: center;
        margin-top: 0.5rem;
        padding: 0.75rem;
        border-radius: 8px;
        font-weight: 500;
    }

    .response-message.success {
        background-color: rgba(46, 160, 67, 0.15);
        color: #3fb950;
    }

    .response-message.error {
        background-color: rgba(248, 81, 73, 0.15);
        color: #f85149;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
        .contact-section {
            padding: 2rem;
        }
    }
    @media (max-width: 600px) {
        .contact-section {
            padding: 1.5rem;
        }
    }
</style>
