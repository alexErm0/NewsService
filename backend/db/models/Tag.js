const {Schema, model, Types} = require('mongoose')

const tagSchema = new Schema ({
	name: {type: String, unique:true},
    articles:[{ type: Types.ObjectId, ref: 'Article' }]
});

module.exports = model('Tag', tagSchema)