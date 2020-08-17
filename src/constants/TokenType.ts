export const enum NODE_SYMB {
	END_OF_FILE = 1,
	AT_KEYWORD_TOKEN,
	CDC_TOKEN,
	CDO_TOKEN,
	COLON_TOKEN,
	COMMA_TOKEN,
	COMMENT_TOKEN,
	DELIMITER_TOKEN,
	DIMENSION_TOKEN,
	FUNCTION_TOKEN,
	HASH_TOKEN,
	IDENT_TOKEN,
	NUMBER_TOKEN,
	OPEN_CURLY_BRACE_TOKEN,
	OPEN_PARENTHESIS_TOKEN,
	OPEN_SQUARE_BRACKET_TOKEN,
	PERCENTAGE_TOKEN,
	SEMICOLON_TOKEN,
	SHUT_CURLY_BRACE_TOKEN,
	SHUT_PARENTHESIS_TOKEN,
	SHUT_SQUARE_BRACKET_TOKEN,
	STRING_TOKEN,
	URL_TOKEN,
	WHITESPACE_TOKEN,
}

export const enum NODE_TYPE {
	END_OF_FILE = 'CSSEndOfFile',
	AT_KEYWORD_TOKEN = 'CSSAtKeyword',
	CDC_TOKEN = 'CSSCDC',
	CDO_TOKEN = 'CSSCDO',
	COLON_TOKEN = 'CSSColon',
	COMMA_TOKEN = 'CSSComma',
	COMMENT_TOKEN = 'CSSComment',
	DELIMITER_TOKEN = 'CSSDelimiter',
	DIMENSION_TOKEN = 'CSSDimension',
	FUNCTION_TOKEN = 'CSSFunctionToken',
	HASH_TOKEN = 'CSSHash',
	IDENT_TOKEN = 'CSSIdentifier',
	NUMBER_TOKEN = 'CSSNumber',
	OPEN_CURLY_BRACE_TOKEN = 'CSSOpenCurlyBracket',
	OPEN_PARENTHESIS_TOKEN = 'CSSOpenParenthesis',
	OPEN_SQUARE_BRACKET_TOKEN = 'CSSOpenSquareBracket',
	PERCENTAGE_TOKEN = 'CSSPercentage',
	SEMICOLON_TOKEN = 'CSSSemicolon',
	SHUT_CURLY_BRACE_TOKEN = 'CSSShutCurlyBracket',
	SHUT_PARENTHESIS_TOKEN = 'CSSShutParenthesis',
	SHUT_SQUARE_BRACKET_TOKEN = 'CSSShutSquareBracket',
	STRING_TOKEN = 'CSSString',
	URL_TOKEN = 'CSSUrl',
	WHITESPACE_TOKEN = 'CSSWhitespace',
}
