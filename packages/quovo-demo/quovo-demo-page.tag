<quovo-demo-page>
	<main>
		<quovo-users-tile ctx="{opts.ctx}"></quovo-users-tile>
	</main>
	<style type="text/css">
		quovo-demo-page {
			display: -webkit-box;
			display: flex;
		}
	</style>
	<script>
		import { init } from './quovo-demo-page.mjs'
		init(this)
	</script>
</quovo-demo-page>