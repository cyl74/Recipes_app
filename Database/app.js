import express from 'express'
import cors from 'cors'
import {getRecipeById, getRecipes,createRecipe} from './database.js'

//http://localhost:8080/
//npm run dev
const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));


//first paramenter set the page the data is going, so in this case it is going to localhost:8080/

//to call in frontend just do the `GET http://localhost:8080/...`

//decide whether if you want res.send or res.json
//.send return all sort of datatype
//.json only return json

//lookup
app.get("/recipes",async (req, res)=>{
    const recipes= await getRecipes()
    res.send(recipes)
})

//lookup
app.get("/recipes/:id",async (req, res)=>{
    const id= req.params.id
    const recipe= await getRecipeById(id)
    res.send(recipe) 
})

//add
app.post("/recipes", async(req, res)=>{
    const {title, ingredient, instruction, image}=req.body
    const recipe=await createRecipe(title, ingredient, instruction, image)  
    res.status(201).send(recipe)
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
