import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { followUser } from "./endpoints/followUser";
import { getFeed } from "./endpoints/getFeed";
import { getProfile } from "./endpoints/getProfile";
import { getProfileOtherUser } from "./endpoints/getProfileOtherUser";
import { getRecipeById } from "./endpoints/getRecipeById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { unfollowUser } from "./endpoints/unfollowUser";

//Users
app.get("/user/profile", getProfile)
app.get("/user/feed", getFeed)
app.get("/user/:id", getProfileOtherUser)
app.post("/user/signup", signup)
app.post("/user/login", login)

//Recipes
app.get("/recipe/:id", getRecipeById)
app.post("/recipe", createRecipe)

//Followers
app.post("/user/follow", followUser)
app.delete("/user/unfollow", unfollowUser)