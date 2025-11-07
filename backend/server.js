import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

// app.get("/api/menu/:resId", async (req, res) => {
//   try {
//     const { resId } = req.params;

//     const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61&lng=77.20&restaurantId=${resId}`;

//     const headers = {
//       "User-Agent":
//         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
//       "Accept": "application/json, text/plain, */*",
//       "Accept-Language": "en-US,en;q=0.9",
//       "x-csrf-token": "fetch",
//       "x-device-id": "d0f36e32-2b1e-4c3f-bd20-dummy1234567",
//       "x-platform-type": "web",
//       "x-app-version": "1.0.0",
//       "Origin": "https://www.swiggy.com",
//       "Referer": "https://www.swiggy.com/"
//     };

//     const response = await fetch(url, { headers });

//     // If Swiggy sends HTML → BLOCKED
//     const text = await response.text();
//     if (text.startsWith("<")) {
//       return res.status(400).json({ error: "Swiggy blocked the request" });
//     }

//     const data = JSON.parse(text);
//     return res.json(data);

//   } catch (err) {
//     console.error("SERVER ERROR:", err);
//     res.status(500).json({ error: "Unable to fetch menu" });
//   }
// });

app.get("/api/menu/:resId", async (req, res) => {
  try {
    const { resId } = req.params;

    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61&lng=77.20&restaurantId=${resId}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
      }
    });

    const text = await response.text();

    // If empty → Swiggy blocked
    if (!text || text.startsWith("<")) {
      return res.status(400).json({ error: "Swiggy blocked request" });
    }

    return res.json(JSON.parse(text));

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch menu" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Backend running on port ${PORT}`)
);
