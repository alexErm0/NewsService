const natural = require("natural");
exports.getNouns = function(sentence){
    const language = "EN";
	const defaultCategory = 'N';
	const defaultCategoryCapitalized = 'NNP';
	let tokenizer = new natural.WordTokenizer();
	let nounInflector = new natural.NounInflector();
	let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
	let ruleSet = new natural.RuleSet('EN');
	let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
	return tagger.tag(tokenizer.tokenize(sentence))
		.taggedWords.filter(el=>el.tag === "NN" ||
								el.tag === "NNP" ||
								el.tag === "NNS" ||
								el.tag === "NNPS")					
		.map(el=>nounInflector.singularize(el.token));
};
