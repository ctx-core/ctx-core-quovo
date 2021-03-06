<quovo-portfolio-history class="{
	loading: !ctx.portfolio_history__quovo,
	empty:
		ctx.portfolio_history__quovo
		&& !ctx.portfolio_history__quovo.length}"
>
	<x-headers class="{present: $ctx('portfolio_history__quovo.length')}">
		<x-date>Date</x-date>
		<quovo-tran-type>Tran Type</quovo-tran-type>
		<x-market-code></x-market-code>
		<x-ticker>Ticker</x-ticker>
		<x-ticker-name>Name</x-ticker-name>
		<quovo-portfolio-history-quantity>Quantity</quovo-portfolio-history-quantity>
		<quovo-portfolio-history-value>Value</quovo-portfolio-history-value>
	</x-headers>
	<quovo-position
		each="{position__quovo in ctx.portfolio_history__quovo}">
		<x-date title="{position__quovo.date}">{position__quovo.date}</x-date>
		<quovo-tran-type
			title="{tran_type$map[position__quovo.tran_type]}">{tran_type$map[position__quovo.tran_type]}</quovo-tran-type>
		<x-market-code title="{position__quovo.market_code}">{position__quovo.market_code}</x-market-code>
		<x-ticker title="{position__quovo.ticker}">{position__quovo.ticker}</x-ticker>
		<x-ticker-name title="{position__quovo.ticker_name}">{position__quovo.ticker_name}</x-ticker-name>
		<quovo-portfolio-history-quantity
			title="{position__quovo.quantity}">{position__quovo.quantity}</quovo-portfolio-history-quantity>
		<quovo-portfolio-history-value title="{format__currency(position__quovo.value)}">
			{format__currency(position__quovo.value)}
		</quovo-portfolio-history-value>
	</quovo-position>
	<script>
		import { init } from './quovo-portfolio-history.mjs'
		init(this)
	</script>
</quovo-portfolio-history>