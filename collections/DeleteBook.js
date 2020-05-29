var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('/bookType');
var bookModel = require('./book');
exports.remove = {
    type: bookType.bookType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async(root, args)=> {
        const removedBook = await bookModel.findByIdAndRemove(args.id)
        if (!removedBook) {
            throw new Error('error')
        }
        return removedBook;
    }
}