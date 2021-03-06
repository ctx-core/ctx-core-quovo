<quovo-users class="{loading: !ctx.users__quovo}">
	<a href="quovo/users/{id}"
		 class="{
			selected-maybe: true,
			selected: id == ctx.user_id__quovo}"
		 each="{ctx.users__quovo}"
		 onclick="{__click__navigate}">
		<quovo-user>
			<quovo-user-id>{id}</quovo-user-id>
			<quovo-user-username>{username}</quovo-user-username>
			<quovo-user-email>{email}</quovo-user-email>
			<quovo-user-value>{$value(value)}</quovo-user-value>
		</quovo-user>
	</a>
	<script>
		import { init } from './quovo-users.mjs'
		init(this)
	</script>
</quovo-users>