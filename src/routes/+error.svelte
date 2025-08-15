<script lang="ts">
	import { page } from "$app/state";

	const getMessage = (status: number) => {
		switch (status) {
			case 404:
				return {
					title: "Oh look, another 404",
					subtitle: "The page you're looking for is in the same place as your test coverage: nowhere to be found.",
				};
			case 500:
				return {
					title: `Error ${status}, try turning it off and on again`,
					subtitle: "Don't worry, this happens to the best of us. Actually, only to people who skip error handling.",
				};
			default:
				return {
					title: `Plot twist, error ${status}!`,
					subtitle: "Something broke (shocking, I know). Maybe it's a sign to finally write those unit tests.",
				};
		}
	};

	const message = getMessage(page.status);
</script>

<div class="content">
	<div class="section">
		<h2 class="primary">{message.title}</h2>
		<p class="secondary">{message.subtitle}</p>
	</div>

	<div class="section">
		<a class="button button-primary" href="/">Go Home</a>
	</div>
</div>
