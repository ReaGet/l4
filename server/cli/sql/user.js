import User from "#app/core/models/user.js";

User.sync({ alter: true, force: true });