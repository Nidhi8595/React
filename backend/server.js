import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/menu/:resId", async (req, res) => {
  try {
    const { resId } = req.params;

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61&lng=77.20&restaurantId=${resId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Unable to fetch menu" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on PORT ${PORT}`));
