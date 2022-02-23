import app from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getProfile } from "./endpoints/getProfile";
import { getProfileOtherUser } from "./endpoints/getProfileOtherUser";
import { getRecipeById } from "./endpoints/getRecipeById";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//Users
app.get("/user/profile", getProfile)
app.get("/user/:id", getProfileOtherUser)
app.post("/user/signup", signup)
app.post("/user/login", login)

//Recipes
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)