const express = require("express");
const cors = require("cors");
const axios = require("axios");

async function createServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const URL = "https://www.googleapis.com/youtube/v3/search";
  app.get("/", async (request, response) => {
    const pesquisa = request.query.q;

    const { data } = await axios.get(
      `${URL}?q=${pesquisa}&part=snippet&key=AIzaSyDt7j3PKw0pTz2uO7-5-ZjM63JuJgYDVwA`
    );
    // console.log(res.data);
    response.json(data);
  });

  app.listen(3333, () => console.log("Server up"));
}

createServer();
