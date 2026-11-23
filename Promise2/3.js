const fs = require('node:fs');

fs.readFile('data/users.json', 'utf-8', (err, data) => {
  const users = JSON.parse(data);
  

  fs.readFile('data/posts.json', 'utf-8', (err, data) => {
    const posts = JSON.parse(data);

    const filteredPosts = posts.filter((post) => post.userId === 1);

    fs.readFile('data/comments.json', 'utf-8', (err, data) => {
      const comments = JSON.parse(data);
      filteredPosts[0].id;
      const filteredComments = comments.filter(
        comment => comment.postId === filteredPosts[0].id
      );

      console.log(filteredComments);
    });
  });
});