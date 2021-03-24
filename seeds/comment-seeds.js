const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'consectetur adipiscing elit',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 5,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;