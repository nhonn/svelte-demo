<script>
	// @ts-nocheck
	import { formatPrice } from '$lib/utils';

	export let data;
</script>

<div class="header">
	<a href="/"><img src="/icons/back.png" alt="back-button" width="24" height="24" /></a>
</div>
<div class="content">
	<section>
		<div class="info">
			<img src={data.image.thumb} alt={data.name} />
			<b>{data.name} ({data.symbol.toUpperCase()})</b>
		</div>
		<h3>{formatPrice(data.market_data.current_price.usd)}</h3>
	</section>
	<section>
		<h4>Market Data</h4>
		<table>
			<tbody>
				<tr>
					<td>Ranking</td>
					<td>#{data.market_data.market_cap_rank}</td>
				</tr>
				<tr>
					<td>Market Cap</td>
					<td>{formatPrice(data.market_data.market_cap.usd)}</td>
				</tr>

				<tr>
					<td>24h High</td>
					<td>{formatPrice(data.market_data.high_24h.usd)}</td>
				</tr>
				<tr>
					<td>24h Low</td>
					<td>{formatPrice(data.market_data.low_24h.usd)}</td>
				</tr>
				<tr>
					<td>All-Time High</td>
					<td>{formatPrice(data.market_data.ath.usd)}</td>
				</tr>
			</tbody>
		</table>
	</section>
	<section>
		<h4>Categories</h4>
		<div class="categories">
			{#each data.categories as category}
				<p class="category">{category}</p>
			{/each}
		</div>
	</section>
	<section>
		<h4>Description</h4>
		<p>{data.description.en}</p>
	</section>
	<div class="padding" />
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 10px;
		background-color: #464780;
		color: white;
		height: 8%;
	}
	.content {
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		max-height: 92%;
		padding: 10px;
		line-height: 1.6;
	}
	.content::-webkit-scrollbar {
		display: none;
	}
	.category {
		padding: 2px 4px;
		background-color: #f5f5f5;
		margin: 5px;
		border-radius: 5px;
	}
	.categories {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.padding {
		height: 5vh;
	}
	.info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.info img {
		margin-right: 5px;
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	tr td {
		width: 50%;
	}
	tr td:last-child {
		text-align: right;
		font-weight: 500;
	}
</style>
