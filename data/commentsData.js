const comments = [
    {
        "id": "1",
        "userId": "1",
        "patternId": "1",
        "commentText": "",
        "likes": "[1]",
        "immaterials": "[]"
    }
];
export default comments;

// pattern comments table
//     comment id (primary key)
//     user id (foreign key) (should be indexed)
//     pattern id (foreign key) (should be indexed)(all foreign keys should be indexed)
//     comment text
//     array of likes (holds user ids)
//     array of irrelevants (holds user ids)