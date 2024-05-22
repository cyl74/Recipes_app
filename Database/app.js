import express from 'express'
import {getRecipeById, getRecipes,createRecipe} from './database.js'

//http://localhost:8080/
//npm run dev
const app = express()
app.use(express.json())

//first paramenter set the page the data is going, so in this case it is going to localhost:8080/


//lookup
app.get("/recipes",async (req, res)=>{
    const recipes= await getRecipes()
    res.json(recipes)
})

//lookup
app.get("/recipes/:id",async (req, res)=>{
    const id= req.params.id
    const recipe= await getRecipeById(id)
    res.json(recipe) 
})

//add
app.post("/recipes", async(req, res)=>{
    const {title, ingredient, instruction, image}=req.body
    const recipe=await createRecipe(title, ingredient, instruction, image)
    res.status(201).json(recipe)
} )


//update
app.put('/recipes/:id', (req, res) => {

    });


//delete
app.delete('/recipes/:id', (req, res) => {

    });

//error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

//port
app.listen(8080, ()=>{
    console.log("port is running on 8080") 
})
