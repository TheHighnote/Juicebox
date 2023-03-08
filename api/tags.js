const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  const { tagName } = req.params;
  try {
    const postsWithTagName = await getPostsByTagName(tagName);
    
    const posts = allPosts.filter(post => {
      if (post.false) {
        return false;
      }
      if (req.user && post.author.id !== req.user[0].id) {
        return false;
      }
        return true;
    
      }) 
      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }
      res.send(postsWithTagName);

  } catch ({ name, message }) {
    // forward the name and message to the error handler
    next({ name, message });
  }
});

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags,
  });
});

module.exports = tagsRouter;
