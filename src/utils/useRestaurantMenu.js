import { useEffect, useState } from "react";
import { CORS_PROXY, CORS_KEY, SWIGGY_MENU_API, DEFAULT_LAT, DEFAULT_LNG } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;

    const fetchMenu = async () => {
      try {
        const targetUrl = `${SWIGGY_MENU_API}&lat=${DEFAULT_LAT}&lng=${DEFAULT_LNG}&restaurantId=${resId}`;

        const proxyUrl = `${CORS_PROXY}${encodeURIComponent(targetUrl)}`;

        const response = await fetch(proxyUrl, {
          headers: {
            "x-cors-api-key": CORS_KEY,
          },
        });

        const text = await response.text();

        // Reject HTML responses
        if (text.trim().startsWith("<")) {
          throw new Error("Invalid response (HTML returned)");
        }

        const data = JSON.parse(text);

        if (!data?.data) {
          throw new Error("Swiggy returned empty data");
        }

        setMenu(data.data);
      } catch (err) {
        console.error("❌ Failed to fetch restaurant menu:", err);
        setError(err.message);
      }
    };

    fetchMenu();
  }, [resId]);

  return { menu, error };
};

export default useRestaurantMenu;
