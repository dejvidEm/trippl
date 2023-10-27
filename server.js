
const express = require("express"); // spustenie appky, backendu
const cors = require("cors"); // povolenie pre požiadavky na všetky http requesty
const app = express();

// tu vytvorim routy a importujem ich
const userRouter = require('./server/routing/routes');

const connectDB = require("./server/database/connection");

const bodyParser = require("body-parser");
const morgan = require("morgan");   // netusim co robi tento modul ale uvidime neskor, mozno ho odstranim 
// uz som zistil, logne nam do konzoly typ requestu aky sme spravili na server a jeho odozvu

// nastavenie portu cez .env file
const dotenv = require("dotenv");  // zacatie dotenv
dotenv.config({path:"config.env"});     // nastavenie pathu na nase .env premenne
const PORT = process.env.PORT||8080;

app.use(cors()); // povolenie pre požiadavky na všetky http requesty
app.use(morgan("tiny"));  // pomaha nam lognut typ requestu do conzoly a jeho dozvu
app.use(bodyParser.urlencoded({extended: true}));  // tento riadok nam umozni ziskavat informacie z url dat kodovanych v URL napr "www.blog/cislo/2323"
app.use(bodyParser.json());

app.use('/', userRouter);

connectDB();

app.get("/", (req, res) => {
    res.json({ message: "Si prihláseny úspešne!" });
})

app.listen(PORT, () => {
    console.log("server beží vpoho");
}); 

app.get('/api/login', function(req, res){
    res.status(200).json({message: "Data z formuláru boli úspešne odoslané!"});
});

// API tu vytvorim api ktore spracuje poziadavku od frontendu s udajmi z formularu a mozem s nimi nasledovne pracovat(overit ci su dobre)
// cesta musi byt rovnaka na ktoru posielam dane udaje /api/endpoint

