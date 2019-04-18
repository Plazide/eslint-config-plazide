const rules = {
	"no-extra-semi": 0,
	"semi": ["error", "always"],
	"quotes": ["error", "double"],
	"curly": ["error", "multi", "consistent"],
	"space-before-function-paren": ["error", "never"],
	"space-before-blocks": ["error", { "functions": "never" }],
	"keyword-spacing": ["error", { "before": true,
		"after": false,
		"overrides": {
			"from": { "after": true },
			"await": { "after": true },
			"else": { "before": false }
		} }],
	"indent": ["error", "tab"],
	"no-tabs": "off",
	"no-unused-vars": "warn",
	"one-var": ["error", {
		"let": "consecutive",
		"const": "never"
	}]
};

module.exports = {
	globals: {
		MyGlobal: true
	},
	rules
};
