function sortByCommentCount(posts) {
    return posts
      .sort((a, b) => b.commentCount - a.commentCount)
      .filter((post, i, arr) => post.commentCount === arr[0].commentCount || i < 1); 
  }
  
  function sortByNewestPosts(posts) {
    return posts.sort((a, b) => b.id - a.id); 
  }
  
  module.exports = { sortByCommentCount, sortByNewestPosts };
  