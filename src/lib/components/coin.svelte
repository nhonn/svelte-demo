<script>
	// @ts-nocheck
  import { formatPrice } from '$lib/utils';
	export let data;

	$: priceChangeStyle = `
		color:${data.price_change_percentage_24h > 0 ? 'green' : 'red'};
    width: 25%;
    text-align: right;
	`;
</script>

{#if !data}
	<p>Loading...</p>
{:else}
	<a href="/coins/{data.id}">
		<div class="coin-item">
			<div class="coin">
				<img src={data.image} alt={data.name} width="24" height="24" />
				<p>{data.symbol.toUpperCase()}</p>
			</div>
			<p class="price">{data.current_price.toLocaleString('vi-VN')}</p>
			<p style={priceChangeStyle}>{formatPrice(data.price_change_percentage_24h)}%</p>
		</div>
	</a>
{/if}

<style>
	.coin-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10px;
	}
	.coin {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 50%;
	}
	.coin img {
		margin-right: 10px;
	}
	.price {
		width: 25%;
	}
</style>
