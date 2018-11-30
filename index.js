/*eslint-env node*/

'use strict';

module.exports = {
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
		"indent": [
			"error",
			"tab",
			{ "SwitchCase": 1 }
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": [
			"error",
			{ "args": "none" }
		],
		"strict": [
			"error",
			"global"
		],
		"no-console": "off"
	}
};
