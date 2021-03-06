import { assign } from '@ctx-core/object/lib.mjs'
import { ensure__agent } from '@ctx-core/agent/lib.mjs'
import { ensure__agent__rpc } from '@ctx-core/agent/rpc.mjs'
import { log, debug } from '@ctx-core/logger/lib.mjs'
const logPrefix = './agent.mjs'
export function agent__users__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__users__quovo
	if (agent) return agent
	return agent__rpc__quovo(ctx, {
		init,
		key: 'agent__users__quovo',
		scope: ['users__quovo'],
		rpc: ['get__users__quovo']
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__users__quovo|init`)
		agent = this
	}
}
export function agent__user_id__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__user_id__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		init,
		key: 'agent__user_id__quovo',
		scope: ['user_id__quovo']
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__user_id__quovo|init`)
		agent = this
	}
}
export function agent__user__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__user__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		key: 'agent__user__quovo',
		scope: ['user__quovo'],
		init
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__user__quovo|init`)
		agent = this
		agent__user_id__quovo(ctx).on('change',
			__change__agent__user_id__quovo)
		agent__users__quovo(ctx).on('change',
			__change__agent__users__quovo)
	}
	function __change__agent__user_id__quovo() {
		log(`${logPrefix}|agent__user__quovo|__change__agent__user_id__quovo`)
		set__agent()
	}
	function __change__agent__users__quovo() {
		log(`${logPrefix}|agent__user__quovo|__change__agent__users__quovo`)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|agent__user__quovo|set__agent`)
		const { user_id__quovo } = ctx
		const users__quovo =
			ctx.users__quovo
			|| []
		agent.set({
			user__quovo: users__quovo.find(
				user__quovo =>
					user__quovo.id === user_id__quovo)
		})
	}
}
export function agent__account__user__quovos(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__account__user__quovos
	if (agent) return agent
	return agent__rpc__quovo(ctx, {
		key: 'agent__account__user__quovos',
		scope: ['account__user__quovos'],
		rpc: ['get__account__user__quovos'],
		init,
		reset: reset__user_id__quovo
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__account__user__quovos|init`)
		agent = this
		agent__user_id__quovo(ctx).on('change',
			__change__agent__user_id__quovo)
	}
	function __change__agent__user_id__quovo() {
		log(`${logPrefix}|agent__account__user__quovos|__change__agent__user_id__quovo`)
		agent.restart()
	}
}
export function agent__account_id__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__account_id__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		init,
		key: 'agent__account_id__quovo',
		scope: ['account_id__quovo']
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__account_id__quovo|init`)
		agent = this
	}
}
export function agent__account__user__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__account__user__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		key: 'agent__account__user__quovo',
		scope: ['account__user__quovo'],
		init
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__account__user__quovo|init`)
		agent = this
		agent__account__user__quovos(ctx).on('change',
			__change__agent__account__user__quovos)
		agent__account_id__quovo(ctx).on('change',
			__change__agent__account_id__quovo)
		set__agent()
	}
	function __change__agent__account__user__quovos() {
		log(`${logPrefix}|agent__account__user__quovo|__change__agent__account__user__quovos`)
		set__agent()
	}
	function __change__agent__account_id__quovo() {
		log(`${logPrefix}|agent__account__user__quovo|__change__agent__account_id__quovo`)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|agent__account__user__quovo|set__agent`)
		const {
			account_id__quovo,
			account__user__quovos
		} = ctx
		const account__user__quovo =
			account__user__quovos
			&& account__user__quovos.find(
			quovo__account =>
				quovo__account.id === account_id__quovo)
		agent.set({
			account__user__quovo
		})
	}
}
export function agent__account__portfolios__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__account__portfolios__quovo
	if (agent) return agent
	return agent__rpc__quovo(ctx, {
		key: 'agent__account__portfolios__quovo',
		scope: ['quovo__account__portfolios'],
		rpc: ['get__quovo__account__portfolios'],
		init,
		reset: reset__account_id__quovo
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__account__portfolios__quovo|init`)
		agent = this
		agent__account_id__quovo(ctx).on('change',
			__change__agent__account_id__quovo)
		set__agent()
	}
	function __change__agent__account_id__quovo() {
		log(`${logPrefix}|agent__account__portfolios__quovo|__change__agent__account_id__quovo`)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|agent__account__portfolios__quovo|set__agent`)
		agent.set({
			quovo__account__portfolios: null
		})
		agent.reset()
	}
}
export function agent__portfolio_id__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__portfolio_id__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		key: 'agent__portfolio_id__quovo',
		scope: ['portfolio_id__quovo'],
		init
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__portfolio_id__quovo|init`)
		agent = this
	}
}
export function agent__portfolio__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__portfolio__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		key: 'agent__portfolio__quovo',
		scope: ['portfolio__quovo'],
		init
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__portfolio__quovo|init`)
		agent = this
		agent__account__portfolios__quovo(ctx).on('change',
			__change__agent__account__portfolios__quovo)
		agent__portfolio_id__quovo(ctx).on('change',
			__change__agent__portfolio_id__quovo)
	}
	function __change__agent__account__portfolios__quovo() {
		log(`${logPrefix}|agent__portfolio__quovo|__change__agent__account__portfolios__quovo`)
		set__agent()
	}
	function __change__agent__portfolio_id__quovo() {
		log(`${logPrefix}|agent__portfolio__quovo|__change__agent__portfolio_id__quovo`)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|agent__portfolio__quovo|set__agent`)
		const {
			portfolio_id__quovo,
			quovo__account__portfolios
		} = ctx
		const portfolio__quovo =
			quovo__account__portfolios
			&& quovo__account__portfolios.find(
			portfolio__quovo =>
				portfolio__quovo.id === portfolio_id__quovo)
		agent.set({
			portfolio__quovo
		})
	}
}
export function agent__portfolio_history__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__portfolio_history__quovo
	if (agent) return agent
	return agent__rpc__quovo(ctx, {
		key: 'agent__portfolio_history__quovo',
		scope: ['portfolio_history__quovo'],
		rpc: ['get__portfolio_history__quovo'],
		init,
		reset: reset__portfolio_id__quovo
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__portfolio_history__quovo|init`)
		agent = this
		agent__portfolio_id__quovo(ctx).on('change',
			__change__agent__portfolio_id__quovo)
	}
	function __change__agent__portfolio_id__quovo() {
		log(`${logPrefix}|agent__portfolio_history__quovo|__change__agent__portfolio_id__quovo`)
		agent.reset()
	}
}
export function agent__positions__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__positions__quovo
	if (agent) return agent
	return agent__rpc__quovo(ctx, {
		key: 'agent__positions__quovo',
		scope: ['positions__quovo'],
		rpc: ['get__positions__quovo'],
		init,
		reset: reset__account_id__quovo
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__positions__quovo|init`)
		agent = this
		agent__account_id__quovo(ctx).on('change',
			set__agent)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|agent__positions__quovo|set__agent`)
		agent.set({ positions__quovo: null })
		agent.reset()
	}
}
export function agent__portfolio__positions__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__portfolio__positions__quovo
	if (agent) return agent
	return ensure__agent(ctx, {
		key: 'agent__portfolio__positions__quovo',
		scope: ['portfolio__positions__quovo'],
		init
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__portfolio__positions__quovo|init`)
		agent = this
		agent__portfolio_id__quovo(ctx).on('change',
			__change__agent__portfolio_id__quovo)
		agent__positions__quovo(ctx).on('change',
			__change__agent__positions__quovo)
		set__agent()
	}
	function __change__agent__portfolio_id__quovo() {
		log(`${logPrefix}|agent__portfolio__positions__quovo|__change__agent__portfolio_id__quovo`)
		set__agent()
	}
	function __change__agent__positions__quovo() {
		log(`${logPrefix}|agent__portfolio__positions__quovo|__change__agent__positions__quovo`)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|agent__portfolio__positions__quovo|set__agent`)
		const {
			portfolio__quovo,
			positions__quovo
		} = ctx
		const portfolio_id__quovo = portfolio__quovo && portfolio__quovo.id
		const portfolio__positions__quovo =
			positions__quovo
			&& positions__quovo.filter(
			position__quovo =>
				position__quovo.portfolio == portfolio_id__quovo)
		agent.set({
			portfolio__positions__quovo:
			portfolio__positions__quovo
		})
	}
}
export function agent__iframe__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__iframe__quovo
	if (agent) return agent
	return agent__rpc__quovo(ctx, {
		key: 'agent__iframe__quovo',
		scope: ['url__iframe__quovo'],
		rpc: ['post__user__quovo__iframe__token'],
		init,
		reset: reset__user_id__quovo
	}, ...ARR__ctx__agent)
	function init() {
		log(`${logPrefix}|agent__iframe__quovo|init`)
		agent = this
		agent__user_id__quovo(ctx).on('change',
			__change__agent__user_id__quovo)
		set__agent()
	}
	function __change__agent__user_id__quovo() {
		log(`${logPrefix}|agent__iframe__quovo|__change__agent__user_id__quovo`)
		set__agent()
	}
	function set__agent() {
		log(`${logPrefix}|set__agent`)
		agent.reset()
	}
}
export function agent__rpc__quovo(ctx, ...ARR__ctx__agent) {
	let agent = ctx.agent__rpc__quovo
	if (agent) return agent
	return ensure__agent__rpc(ctx, {
		_ctx__rpc: _ctx__rpc,
		reset: reset__quovo,
		init
	}, ...ARR__ctx__agent)
	function init() {
		agent = this
		log(`${logPrefix}|agent__rpc__quovo|init`, agent.key)
		const agent__authentication =
			ctx[ctx.key__agent__authentication__quovo]
		agent__authentication.on('change',
			__change__agent__authentication)
	}
	function _ctx__rpc(ctx__reset, ...ctx__reset$$) {
		log(`${logPrefix}|agent__rpc__quovo|_ctx__rpc`, agent.key)
		return assign(ctx__reset, {
			authentication: ctx[ctx.scope__0__authentication__quovo],
			user_id__quovo: ctx.user_id__quovo,
			account_id__quovo: ctx.account_id__quovo,
			portfolio_id__quovo: ctx.portfolio_id__quovo
		}, ...ctx__reset$$)
	}
	function __change__agent__authentication() {
		log(`${logPrefix}|__change__agent__authentication`, agent.key)
		agent.reset()
	}
}
async function reset__quovo() {
	const agent = this
	log(`${logPrefix}|reset__quovo`, agent.key)
	let { ctx } = agent
	if (ctx[ctx.scope__0__authentication__quovo]) {
		return agent.reset__rpc(...arguments)
	} else {
		agent.clear()
		return
	}
}
async function reset__user_id__quovo() {
	log(`${logPrefix}|reset__user_id__quovo`)
	const agent = this
	let { ctx } = agent
	if (ctx.user_id__quovo) {
		return reset__quovo.call(agent, ...arguments)
	} else {
		agent.clear()
		return
	}
}
async function reset__account_id__quovo() {
	log(`${logPrefix}|reset__account_id__quovo`)
	const agent = this
	let { ctx } = agent
	if (ctx.account_id__quovo) {
		return reset__quovo.call(agent, ...arguments)
	} else {
		agent.clear()
		return
	}
}
async function reset__portfolio_id__quovo() {
	log(`${logPrefix}|reset__portfolio_id__quovo`)
	const agent = this
	let { ctx } = agent
	if (ctx.portfolio_id__quovo) {
		return reset__quovo.call(agent, ...arguments)
	} else {
		agent.clear()
		return
	}
}