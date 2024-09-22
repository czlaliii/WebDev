import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async(req,res) => {
    try {
        const result = await axios.get("https://thecocktaildb.com/api/json/v1/1/random.php");
        const randomDrink = result.data.drinks[0];
        res.render("index.ejs", { cocktail: randomDrink });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})