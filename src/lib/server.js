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
      `${URL}?maxResults=10&q=${pesquisa}&part=snippet&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8`
    );

    response.json(data);
  });

  app.listen(3333, () => console.log("Server up"));
}

createServer();
