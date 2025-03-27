import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(cors());
app.use(express.json())

app.get("/todos" , async(req,res) => {

try {
   let data = await  pool.query("SELECT * FROM todo");
   
  res.status(200).json({
    success:true,
    Data:data
  })
} catch (error) {
    console.log(error)
}

})

app.post("/todos",async(req,res) => {

    try {
            let {description} = req.body;
        const newTodo  = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);

        console.log(newTodo.rows)

    //  res.json({})

    } catch (error) {
        console.log(error)
    }

})

app.put("/todos/:id",async(req,res) => {

    try {

        let params = req.params

        const update  = await pool.query("UPDATE todo AS t SET description = $1 WHERE  t.todo_id = $2",["Hogaya  ma update",params.id])

        console.log(update)

    } catch (error) {
        console.log(error)
    }

})

app.delete("/todos/:id",async(req,res) => {

    try {
        const {id} = req.params;
        let deleteQuery = await pool.query("DELETE FROM todo AS t WHERE t.todo_id  = $1",[id])
        console.log(deleteQuery)
    } catch (error) {
        console.log(error)
    }

})

app.listen(5000,() => {

    console.log("Server is Running on port 5000");

})