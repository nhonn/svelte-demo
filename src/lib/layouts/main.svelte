<main>
	<div class="header">
		<slot name="header" />
	</div>
	<div class="content">
		<slot name="content" />
	</div>
</main>

<style>
	:global(body) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: #6667ab;
		height: 100vh;
		width: 100vw;
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
	}
	main {
		width: 41.58vh;
		height: 90vh;
		background-color: white;
		border-radius: 10px;
		box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}
	@media (max-width: 767px) {
		main {
			width: 100%;
			height: 100%;
			border-radius: 0;
			box-shadow: none;
			overflow: hidden;
		}
	}
	.content {
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		max-height: 92%;
	}
	.content::-webkit-scrollbar {
		display: none;
	}
	.header {
		padding: 0 10px;
		background-color: #464780;
		color: white;
    height: 8%;
	}
</style>
