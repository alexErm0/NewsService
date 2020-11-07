const Article = require("../db/models/Article.js");
const Tag = require("../db/models/Tag.js");
const Tagger = require("../algorithms/tagging.js");
const {Schema, model, Types} = require('mongoose')
exports.updateTags = async function(request, response){
    Article.find({}, async function(err, allArticles){
        if(err) {
            console.log(err);
			res.status(400).json({
                    error: err,
                    message: 'Something go wrong, try again'
                });
        }
		await Tag.deleteMany({});
		let pr = new Promise((res, rej) => {
			for (let article of allArticles){
				let tags = Tagger.getNouns(article.description);
				console.log(tags);
				for (let el of tags){
					Tag.findOneAndUpdate({name: el}, {$push: {articles: Types.ObjectId(article._id)}}, {upsert:1});
				}
			}
        res('Tags Updated');
		}).then(res=> response.status(201).send(res))
		.catch(err=>response.status(400).json({ message: err}));
    });
};

exports.getTop6 = async function(){
    arr = await Tag.aggregate([
		{ 
			$project: {
						name: 1,
						length: {$size : "$articles"}
					}
		},
		{$sort: {"length":-1}},
		{$limit: 6}
	]);
	return arr.map(el=>el.name);
};
