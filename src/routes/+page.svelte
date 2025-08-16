<script lang="ts">
	import { onMount } from "svelte";

	import { ISPRODREADY_BASE_URL } from "$env/static/public";

	let reason = $state("");
	let hasError = $state(false);
	let isLoading = $state(true);

	async function fetchReason() {
		reason = "";
		hasError = false;
		isLoading = true;

		try {
			const fetchPromise = fetch(`${ISPRODREADY_BASE_URL}/no`);
			const sleepPromise = new Promise((resolve) => setTimeout(resolve, 1000));
			const [response, _] = await Promise.all([fetchPromise, sleepPromise]);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			if (!data || !data.reason) {
				throw new Error("Invalid response error!");
			}

			reason = data.reason;
			hasError = false;
		} catch (error) {
			console.error("Error fetching reason:", error);
			reason = "";
			hasError = true;
		}

		isLoading = false;
	}

	onMount(async () => {
		await fetchReason();
	});
</script>

<main class="content">
	<div class="section question-section">
		<h2 class="primary">Is your app ready for production?</h2>
	</div>

	<div class="section reason-section">
		{#if isLoading}
			<div class="reason-loading">Consulting the oracle...</div>
		{:else if hasError}
			<div class="reason-error">
				Oops! Even the oracle is having issues
				<br />
				<span class="secondary">Maybe that answers your question...</span>
			</div>
		{:else if reason}
			<div class="reason-text">{reason}</div>
		{/if}
	</div>

	<div class="section button-section">
		<button class="button button-primary" disabled={isLoading} onclick={fetchReason}>Get another opinion</button>
	</div>
</main>

<section class="content">
	<div class="section api-info-section">
		<h3>Want to integrate this wisdom into your CI/CD?</h3>
		<p>
			Add spice to your pipeline with
			<a class="link code" href="{ISPRODREADY_BASE_URL}/no">{ISPRODREADY_BASE_URL}/no</a>
		</p>
		<p class="secondary">Because let's be honest, that's probably the answer...</p>
	</div>

	<div class="section api-example-section">
		<code class="api-code">
			⚠️ The API has usage limits because, ironically, it's not production-ready. We're working on it... (not really)
			<br /><br />
			$ curl {ISPRODREADY_BASE_URL}/no
			<br />
			{`{"reason": "Sure, if you enjoy 3 AM debugging sessions."}`}
		</code>
	</div>
</section>

<style lang="scss">
	@use "$lib/variables" as *;

	/* Main Content */
	.question-section {
		flex: 1;

		text-align: center;
	}

	.reason-section {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		min-height: 10rem;
		padding: 1.5rem;

		line-height: 1.5;
		color: $text-primary;

		background: $subtle-background;

		border: 1px solid $subtle-border;
		border-radius: 12px;
	}

	.reason-text {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.reason-loading {
		font-style: italic;
		color: $text-secondary;

		animation: pulse 0.75s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.reason-error {
		font-style: italic;
		color: $error-color;
	}

	@media (min-width: 768px) {
		.reason-section {
			padding: 2rem;
		}

		.reason-text {
			font-size: 1.5rem;
		}
	}
</style>
