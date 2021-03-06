import { tag__assign } from '@ctx-core/riot/tag.mjs'
import {
	agent__account__portfolios__quovo,
	agent__portfolio_id__quovo
} from './agent.mjs'
import { path__portfolio__account__user__quovo } from './path.mjs'
import { format__currency } from '@ctx-core/currency/lib.mjs'
import { mount__currency } from '@ctx-core/currency/dom.mjs'
import { log, debug } from '@ctx-core/logger/lib.mjs'
const logPrefix = '@ctx-core/quovo/quovo-account-portfolios.mjs'
export function init(tag) {
	log(`${logPrefix}|init`)
	tag__assign(tag, {
		format__currency,
		path__portfolio__account__user__quovo,
		registerElement: [
			'quovo-portfolio',
			'quovo-portfolio-name',
			'quovo-portfolio-type',
			'quovo-portfolio-category',
			'quovo-portfolio-value'
		]
	})
	const { ctx } = tag
	mount__currency(tag)
	tag.on('mount', onmount)
	tag.on('unmount', onunmount)
	function onmount() {
		log(`${logPrefix}|onmount`)
		agent__account__portfolios__quovo(ctx).on('change',
			__change__agent__account__portfolios__quovo)
		agent__portfolio_id__quovo(ctx).on('change',
			__change__agent__portfolio_id__quovo)
		tag.update()
	}
	function onunmount() {
		log(`${logPrefix}|onunmount`)
		agent__account__portfolios__quovo(ctx).off('change',
			__change__agent__account__portfolios__quovo)
		agent__portfolio_id__quovo(ctx).off('change',
			__change__agent__portfolio_id__quovo)
	}
	function __change__agent__account__portfolios__quovo() {
		log(`${logPrefix}|__change__agent__account__portfolios__quovo`)
		tag.update()
	}
	function __change__agent__portfolio_id__quovo() {
		log(`${logPrefix}|__change__agent__portfolio_id__quovo`)
		tag.update()
	}
}