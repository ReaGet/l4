import Post from "#app/core/models/post.js";

Post.sync({ alter: true, force: true });