import { tag__assign } from '@ctx-core/riot/tag.mjs'
import { __store__route } from '@ctx-core/route/store.mjs'
import { agent__user__quovo } from './agent.mjs'
import { log, debug } from '@ctx-core/logger/lib.mjs'
const logPrefix = '@ctx-core/quovo/quovo-user-tile.mjs'
export function init(tag) {
	log(`${logPrefix}|init`)
	tag__assign(tag)
	const { ctx } = tag
	const { store } = ctx
	tag.on('mount', onmount)
	tag.on('unmount', onunmount)
	async function onmount() {
		log(`${logPrefix}|onmount`)
		await __store__route(store)
		store.on('state', __state__route)
		agent__user__quovo(ctx)
			.on('change', __change__agent__user__quovo)
	}
	function onunmount() {
		log(`${logPrefix}|onunmount`)
		store.off('state', __state__route)
		agent__user__quovo(ctx)
			.off('change', __change__agent__user__quovo)
	}
	function __state__route() {
		log(`${logPrefix}|__state__route`)
		tag.update()
	}
	function __change__agent__user__quovo() {
		log(`${logPrefix}|__change__agent__user__quovo`)
		tag.update()
	}
}