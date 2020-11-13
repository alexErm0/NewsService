const Article = require("../db/models/Article.js");
const Collector = require("../NewsCollector/collector.js");
const TagController = require("../controllers/tag.controllers.js");
exports.getByCategory = function(request, response){
    Article.find({category: request.body.category}, function(err, allArticles){
        if(err) {
            console.log(err);
			res.status(400).json({
                    message: err
                });
        }
        response.status(201).json(allArticles);
    });
};

exports.collectArticles = async function(request, response){
	await Article.deleteMany({});
	let promise = new Promise(async(res, rej)=>{
		for (let category of ['business','entertainment','general',
							'health','science','sports','technology']){
			Collector.collectNewsByCategory(category).then((articles)=> {
				for (let el of articles) {
					el['category'] = category;
					delete el.source;
				}
				Article.insertMany(articles, function (err, docs) {
					console.log("Articles inserted by category:" + category);
					if (err){ 
						rej(err);
					}
				});
			}).catch(err=> rej(err));
		}
		let tags = await TagController.getTop6();
		console.log(tags);
		for (let tag of tags){
			for (let category of ['business','entertainment','general',
							'health','science','sports','technology']){
				console.log(tag + " "+ category);
				Collector.collectNewsByTag(tag, category).then((articles)=> {
					for (let el of articles) {
						el['category'] = category;
						delete el.source;
					}
					Article.insertMany(articles, function (err, docs) {
						if (err){ 
							rej(err);
						}
						console.log("Articles inserted " + category);	
					});
					res('News collected successfully');
				}).catch(err=> rej(err));
			}
		}
	})
	.then(res=>response.status(201).send(res))
	.catch(err=>response.status(400).json({message: err}));
};