import { TOKEN, GRAMMAR_SYMB, GRAMMAR_TYPE } from '~/constants'
import { getGroupContents } from '.'
import type { GrammarTokenizerContext } from '~/shared/types'

export function getGroupBrackets(x: GrammarTokenizerContext, root: boolean = false) {
	const open = x.shut
	const tail = root ? 0 : TOKEN.R_SQUARE_BRACKET

	if (!root) {
		x.consumeCodeAt0(TOKEN.L_SQUARE_BRACKET)
	}

	const group = getGroupContents(x, tail)

	return {
		type: GRAMMAR_TYPE.GROUP,
		symb: GRAMMAR_SYMB.GROUP,
		body: group.body,
		comb: group.comb,
		root: group.root,
		void: group.void,
		spot: {
			offsetIni: open,
			offsetEnd: x.shut,
		},
	}
}
