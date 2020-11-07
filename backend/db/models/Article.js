const {Schema, model, Types} = require('mongoose')

const articleSchema = new Schema ({
    author: { type: String},
    title: { type: String, required: true },
	description: { type: String, required: true },
	url: { type: String, required: true},
	urlToImage: { type: String, required: true },
	publishedAt: { type: Date, required: true },
	content: { type: String, required: true },
	category: { type: String, required: true, enum:['business',
													'entertainment',
													'general',
													'health',
													'science',
													'sports',
													'technology',
													'popular']},
});

module.exports = model('Article', articleSchema)