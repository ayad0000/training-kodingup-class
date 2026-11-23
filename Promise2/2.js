const fs = require('node:fs/promises');
const { getHeapCodeStatistics } = require('node:v8');
const { useImperativeHandle } = require('react');

/**
 * Callback pattern
 */
getProfile(userId, (err, profile) => {
  getArticles(profile.id, (err, articles) => {
    getHeapCodeStatistics(articles[0].id, (err, posts) => {
      console.log(posts);
    });
  });
});

/**
 * Promise pattern
 */
getProfile(userId)
  .then(profile => getArticles(profile.id))
  .then(articles => getPosts(articles[0].id))
  .then(posts => console.log(posts));