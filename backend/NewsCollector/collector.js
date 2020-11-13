const NewsAPI = require('newsapi');
const config = require('config')
const newsapi = new NewsAPI(config.get('newsAPIKey'));


exports.collectNewsByCategory = async function(category){
	return new Promise (async (resolve, reject) => { 
		let articles = [];
		for (let coun of ['us', 'gb']){
			await newsapi.v2.topHeadlines({
				category: category,
				country: coun,
				pageSize: '100'
			}).then(response => {
				console.log("Response from API");
				articles = articles.concat(response.articles.filter(art => art.title !== "" && art.title !== null &&
																			art.description !== "" && art.description !== null &&
																			art.url !== "" && art.url !== null &&
																			art.urlToImage !== "" && art.urlToImage !== null &&
																			art.content !== "" && art.content !== null &&
																			art.publishedAt !== "" && art.publishedAt !== null));
			}).catch(err=> reject(err));
		}
		resolve(articles);
	});
};

exports.collectNewsByTag = function(tag, categ){
	return new Promise (async (resolve, reject) => { 
		let articles = [];
		for (let coun of ['us', 'gb']){
			await newsapi.v2.topHeadlines({
				category: categ,
				q: tag,
				country: coun,
				pageSize: '100'
			}).then(response => {
				console.log("Response from API");
				articles = articles.concat(response.articles.filter(art => art.title !== "" && art.title !== null &&
																			art.description !== "" && art.description !== null &&
																			art.url !== "" && art.url !== null &&
																			art.urlToImage !== "" && art.urlToImage !== null &&
																			art.content !== "" && art.content !== null &&
																			art.publishedAt !== "" && art.publishedAt !== null));
			}).catch(err=> reject(err));
		}
		resolve(articles);
	});
};
