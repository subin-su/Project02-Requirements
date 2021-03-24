const { Post } = require('../models');

const postdata = [
  {
    title: 'Title 1',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'Title 2',
    post_content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
    user_id: 2
  },
  {
    title: 'Title 3',
    post_content: 'Ut etiam sit amet nisl purus in mollis.',
    user_id: 3
  },
  {
    title: 'Title 4',
    post_content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 4
  },
  {
    title: 'Title 5',
    post_content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;