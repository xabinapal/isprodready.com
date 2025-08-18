<script lang="ts">
	import * as env from "$env/static/public";

	let { children } = $props();
</script>

<svelte:head>
	<title>{env["ISPRODREADY_META_TITLE"]}</title>

	<meta charset="utf-8" />
	<meta name="robots" content="index,follow" />
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />

	<!-- Primary Meta Tags -->
	<meta name="title" content={env["ISPRODREADY_META_TITLE"]} />
	<meta name="description" content={env["ISPRODREADY_META_DESCRIPTION"]} />
	<meta name="author" content={env["ISPRODREADY_META_AUTHOR"]} />
	<meta name="keywords" content={env["ISPRODREADY_META_KEYWORDS"]} />
	<meta name="theme-color" content={env["ISPRODREADY_META_THEME_COLOR"]} />

	<!-- Vendor Tags -->
	<meta name="apple-mobile-web-app-title" content={env["ISPRODREADY_META_TITLE"]} />
	<meta name="msapplication-TileColor" content={env["ISPRODREADY_META_THEME_COLOR"]} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={env["ISPRODREADY_BASE_URL"]} />
	<meta property="og:title" content={env["ISPRODREADY_META_TITLE"]} />
	<meta property="og:description" content={env["ISPRODREADY_META_DESCRIPTION"]} />
	<meta property="og:image" content="{env['ISPRODREADY_BASE_URL']}/caption.png" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={env["ISPRODREADY_BASE_URL"]} />
	<meta property="twitter:title" content={env["ISPRODREADY_META_TITLE"]} />
	<meta property="twitter:description" content={env["ISPRODREADY_META_DESCRIPTION"]} />
	<meta property="twitter:image" content="{env['ISPRODREADY_BASE_URL']}/caption.png" />

	<!-- Canonical URL -->
	<link rel="canonical" href={env["ISPRODREADY_BASE_URL"]} />

	<!-- Favicons -->
	<link rel="icon" type="image/svg+xml" href="{env['ISPRODREADY_BASE_URL']}/favicon.svg" sizes="any" />
	<link rel="icon" type="image/png" href="{env['ISPRODREADY_BASE_URL']}/favicon-96.png" sizes="96x96" />
	<link rel="icon" href="{env['ISPRODREADY_BASE_URL']}/favicon.ico" sizes="32x32" />
	<link rel="apple-touch-icon" href="{env['ISPRODREADY_BASE_URL']}/icon-180.png" sizes="180x180" />

	<!-- Manifest -->
	<link rel="manifest" href="{env['ISPRODREADY_BASE_URL']}/site.webmanifest" />
</svelte:head>

<div class="container">
	<header class="content">
		<div class="section logo-section">
			<img src="{env['ISPRODREADY_BASE_URL']}/logo.svg" alt="IsProdReady.com Logo" />
		</div>

		<div class="section title-section">
			<h1 class="primary">IsProdReady<span class="accent">.com</span></h1>
			<p class="tagline">The brutal truth about your product</p>
			<a class="button button-secondary" href={env["ISPRODREADY_KOFI_URL"]} target="_blank">
				<img class="kofi-icon" src="{env['ISPRODREADY_BASE_URL']}/kofi.png" alt="" />
				Support me on Ko-Fi
			</a>
		</div>
	</header>

	{@render children()}

	<footer>
		<p>IsProdReady.com - Star me on <a class="link" href={env["ISPRODREADY_GITHUB_URL"]} target="_blank">GitHub</a>!</p>
		<p>Keeping developers humble since today</p>
	</footer>
</div>

<style lang="scss">
	@use "sass:color";
	@use "$lib/variables" as *;

	:global {
		// Base
		:root {
			font-weight: 400;
			font-size: 16px;
			line-height: 1.6;
			color: $text-primary;
			color-scheme: light;

			background-color: $primary-color;
		}

		* {
			box-sizing: border-box;

			margin: 0;
			padding: 0;

			font-family: $font-sans;
			color: $text-primary;
		}

		h1 {
			font-size: 2.25rem;
			font-weight: 800;
			line-height: 1;
			letter-spacing: -0.02em;
		}

		h2 {
			font-size: 1.875rem;
			font-weight: 700;
			line-height: 1.2;
		}

		h3 {
			font-size: 1.25rem;
			font-weight: 700;
			text-align: center;
			color: $text-primary;
		}

		pre {
			display: block;

			padding: 1rem;

			font-family: $font-monospace;
			font-size: 0.75rem;
			line-height: 1.5;
			text-align: left;
			text-wrap: wrap;
			word-wrap: break-word;
			color: #f9fafb;

			background: #1f2937;
			border-radius: 8px;
		}

		.hidden {
			display: none;
		}

		.link {
			color: $text-secondary;
		}

		.link:hover {
			color: $text-primary;
		}

		.primary {
			color: $primary-color;
		}

		.accent {
			color: $secondary-color;
		}

		.secondary {
			font-style: italic;
			color: $text-secondary;
		}

		.monospace {
			font-family: $font-monospace;
		}

		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1.5rem;

			max-width: 1200px;
			min-height: 100vh;
			margin: 0 auto;
			padding: 2rem;
		}

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			width: 100%;
			padding: 2rem;

			background: color.adjust(white, $alpha: -0.05);
			backdrop-filter: blur(10px);

			border-radius: 16px;
			box-shadow: 0 4px 6px -1px color.adjust(black, $alpha: -0.9);

			text-align: center;
		}

		.section {
			width: 100%;
		}

		.button {
			display: block;
			width: 100%;

			padding: 1rem 2rem;

			color: white;
			line-height: 1;
			font-size: 1rem;
			font-weight: 600;
			text-decoration: none;

			cursor: pointer;

			border: none;
			border-radius: 8px;

			transition: all 0.2s ease;
		}

		.button:disabled {
			opacity: 0.6;
			cursor: not-allowed;

			transform: none;
		}

		.button:hover:not(:disabled) {
			filter: saturate(1.2);

			transform: translateY(-2px);
		}

		.button-primary {
			background: $primary-color;
			background: linear-gradient(45deg, $primary-color 0%, $secondary-color 100%);
			box-shadow: 0 2px 4px color.adjust($primary-color, $alpha: -0.8);
		}

		.button-secondary {
			background: $error-color;
			background: linear-gradient(45deg, $error-color 0%, color.adjust($error-color, $hue: 20deg) 75%);
			box-shadow: 0 2px 4px color.adjust($error-color, $alpha: -0.8);
		}

		@media (min-width: 768px), (orientation: landscape) {
			:root {
				background: linear-gradient(135deg, $secondary-color 0%, $secondary-color 25%, $primary-color 75%, $primary-color 100%);
				background-attachment: fixed;
			}

			h1 {
				font-size: 3.5rem;
			}

			h3 {
				font-size: 1.5rem;
			}

			pre {
				font-size: 0.875rem;
			}

			.button {
				display: inline-block;
				width: auto;
			}
		}
	}

	/* Header */
	.logo-section {
		flex-shrink: 0;
	}

	.logo-section img {
		height: 10rem;
		object-fit: contain;
	}

	.title-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.tagline {
		font-size: 1rem;
		font-weight: 500;
		color: $text-secondary;
	}

	.kofi-icon {
		margin-right: 0.25rem;

		height: 1rem;

		vertical-align: top;

		animation: kofi-wiggle 3s infinite;
	}

	@keyframes kofi-wiggle {
		0% {
			transform: rotate(0) scale(1);
		}
		50% {
			transform: rotate(0) scale(1);
		}
		60% {
			transform: rotate(0) scale(1.5);
		}
		70% {
			transform: rotate(0) scale(1.25);
		}
		75% {
			transform: rotate(-10deg) scale(1.25);
		}
		80% {
			transform: rotate(10deg) scale(1.25);
		}
		85% {
			transform: rotate(-10deg) scale(1.25);
		}
		90% {
			transform: rotate(10deg) scale(1.25);
		}
		100% {
			transform: rotate(0) scale(1);
		}
	}

	/* Footer */
	footer {
		width: 100%;

		font-size: 0.875rem;
		text-align: center;
	}

	footer * {
		color: rgba(255, 255, 255, 0.75) !important;
	}

	footer .link:hover {
		color: rgba(255, 255, 255, 1) !important;
	}

	@media (min-width: 768px), (orientation: landscape) {
		header.content {
			flex-direction: row;
			gap: 2rem;
		}

		.logo-section {
			width: auto;
		}

		.title-section {
			width: auto;
		}

		.tagline {
			font-size: 1.125rem;
		}
	}
</style>
