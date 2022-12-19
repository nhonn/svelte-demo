<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import api from '../lib/api';
	import Coin from '../lib/components/coin.svelte';

  let coinList = [];

	const fetchData = async () => {
		const response = await api.get(
			'v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
		);
		coinList = response;
	};

	onMount(async () => {
		await fetchData();
	});
</script>

<main class="wrapper">
	<div class="header">
		<p class="coin">Coin</p>
		<p class="price">Price (USDT)</p>
		<p class="change">24h Change</p>
	</div>
	<div class="content">
		{#each coinList as coin}
			<Coin data={coin} />
		{/each}
	</div>
</main>

<style>
	.wrapper {
		height: 100%;
		width: 100%;
	}
	.header {
		display: flex;
		flex-direction: row;
		padding: 0 10px;
		background-color: #464780;
		color: white;
		height: 8%;
	}
	.coin {
		width: 50%;
		text-align: left;
	}
	.price {
		width: 25%;
		text-align: left;
	}
	.change {
		width: 25%;
		text-align: right;
	}
	.content {
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none;
		max-height: 92%;
	}
	.content::-webkit-scrollbar {
		display: none;
	}
</style>
