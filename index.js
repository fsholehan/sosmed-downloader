import express from "express";
import cors from "cors";
import s from "videos-downloader";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  console.log("hello port");
});

app.get("/download", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    res.status(400).json({
      message: "Put valid url!",
    });
  }
  try {
    const downloadUrl = await s.twitter(url);
    res.json(downloadUrl.result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
