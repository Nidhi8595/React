import { useEffect, useState } from "react";
import {
  CORS_PROXY,
  SWIGGY_MENU_API,
  DEFAULT_LAT,
  DEFAULT_LNG,
} from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      // ✅ Build the original Swiggy API URL with query params
      const swiggyUrl = `${SWIGGY_MENU_API}&lat=${DEFAULT_LAT}&lng=${DEFAULT_LNG}&restaurantId=${resId}`;

      // ✅ Pass it as a ?url= parameter to the Cloudflare Worker
      const apiUrl = `${CORS_PROXY}?url=${encodeURIComponent(swiggyUrl)}`;

      const res = await fetch(apiUrl);

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

      const json = await res.json();
      setResInfo(json.data || null);
    } catch (error) {
      console.error("❌ Failed to fetch restaurant menu:", error);
      setResInfo(null);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
