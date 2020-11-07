const {Schema, model, Types} = require('mongoose')

const clusterSchema = new Schema ({
    _id:{type: Types.ObjectId, required:true, unique:true },
    clusterProfile:[{
        tag: {type: Types.ObjectId, ref: 'Tag'},
        weight: Number
    }],
    recommendedArticles:[{ type: Types.ObjectId, ref: 'Article' }]
});

module.exports = model('Cluster', clusterSchema)