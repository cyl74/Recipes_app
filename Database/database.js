import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool= mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//look up all
export async function getRecipes() {
    const result = await pool.query("SELECT * FROM recipes")
    const rows=result[0]
    return rows
}

//look up by id
export async function getRecipeById(id){
    const result= await pool.query('SELECT * FROM recipes WHERE id=?', [id])
        const row=result[0]
    return row[0]
}

//look up by name done in web app after getting all recipes


//look up by ingredient (this may have to be done via the webapp after getting all recipes)

//insertion title(varchar(255)) ingreadent(JSON) instrution(text) image(text)
export async function createRecipe(title, ingredient, instruction, image) {
    const [result] = await pool.query(`
    INSERT INTO recipes (title, ingredient,instruction,image)
    VALUES (?,?,?,?)
    `, [title, JSON.stringify(ingredient),instruction, image])
    const id= result.insertId
    return getRecipeById(id)
  }


//deletion(don't worry too much about this just now)
