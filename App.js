import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
                    alt="App Logo"
                    className="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla: deliveryTime,
    } = resData?.info;

    return (
        <div
            className="res-card"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className="res-logo"

                src={
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId
                }
                alt="Biryani"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
    {
        type: 'restaurant',
        info: {
            "id": "12922",
            "name": "The Zaika King",
            "cloudinaryImageId": "c9a04473e91e7a1c35e4b03123b59c96",
            "locality": "Sector 12",
            "areaName": "Sector 18",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Mughlai",
                "Chinese",
                "Rajasthani"
            ],
            "avgRating": 3.9,
            "parentId": "14210",
            "avgRatingString": "3.9",
            "totalRatingsString": "21K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 23:15:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "1.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/the-zaika-king-sector-12-sector-18-rest12922",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },

    {
        "info": {
            "id": "37850",
            "name": "Yo! Pizza",
            "cloudinaryImageId": "lqszjgqjpqhg5r5hw0sn",
            "locality": "Sector 11",
            "areaName": "Sector 11",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Beverages"
            ],
            "avgRating": 3.3,
            "parentId": "228067",
            "avgRatingString": "3.3",
            "totalRatingsString": "3.7K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹95",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "1.8",
                    "ratingCount": "5"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/yo-pizza-sector-11-rest37850",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "678558",
            "name": "Thali Express - For Daily Thalis",
            "cloudinaryImageId": "fc25b56a5fea99c3390f386bd8a0d705",
            "locality": "Sector-10",
            "areaName": "Sector 18",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Thalis",
                "Indian",
                "Chinese",
                "Punjabi",
                "Biryani"
            ],
            "avgRating": 3.7,
            "parentId": "405540",
            "avgRatingString": "3.7",
            "totalRatingsString": "1.6K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/thali-express-for-daily-thalis-sector-10-sector-18-rest678558",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "253735",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/8/6b27a2a7-e1f5-437f-a80c-78c88da89ba3_253735.jpg",
            "locality": "Supertech Shopprix Mall",
            "areaName": "Sector 61",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.2,
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "19K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 00:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/mcdonalds-supertech-shopprix-mall-sector-61-rest253735",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "244396",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/14/06eb0b5f-d4fc-4df6-a606-2e3e00d69eaf_244396.JPG",
            "locality": "Spice World Mall",
            "areaName": "Sector 25",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "2456",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.8K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 23:55:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/dominos-pizza-spice-world-mall-sector-25-rest244396",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "936167",
            "name": "UDUPI",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/4edd241f-c7b5-41ab-a976-33123a782de6_936167.jpg",
            "locality": "Sector 18",
            "areaName": "Sector 18",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "South Indian"
            ],
            "veg": true,
            "parentId": "218987",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.2,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹550",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/udupi-sector-18-rest936167",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "33343",
            "name": "Wow! Noodle",
            "cloudinaryImageId": "xexoftiu0yymcicpnxai",
            "locality": "Sector 11",
            "areaName": "Sector 12",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Momos",
                "Thai",
                "Pan-Asian",
                "Tibetan"
            ],
            "avgRating": 3.5,
            "parentId": "13358",
            "avgRatingString": "3.5",
            "totalRatingsString": "13K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "31"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/wow-noodle-sector-11-sector-12-rest33343",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "407013",
            "name": "Sagar Chole Bhature",
            "cloudinaryImageId": "jooalgwv5fu6sasbsddv",
            "locality": "Pridarshini Park",
            "areaName": "Sector 12",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Momos"
            ],
            "avgRating": 4.1,
            "parentId": "174440",
            "avgRatingString": "4.1",
            "totalRatingsString": "3.8K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-0ced186f-80dc-4ace-aa0b-287f5dd1ae8f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/sagar-chole-bhature-pridarshini-park-sector-12-rest407013",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "78041",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/24badc96-e293-444e-be18-52d5f5ae9b74_78041.jpg",
            "locality": "Gamma Shopping Mall",
            "areaName": "Gamma 1",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.1,
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "16K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/burger-king-gamma-shopping-mall-gamma-1-rest78041",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "906700",
            "name": "khana@99",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/493c2aef-9863-4818-80a2-5e84af80f3bf_906700.jpg",
            "locality": "SPARK DIVINE",
            "areaName": "Greater Noida",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "Tandoor"
            ],
            "parentId": "526898",
            "avgRatingString": "NEW",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 05:29:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/khana-99-spark-divine-greater-noida-rest906700",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "98231",
            "name": "Chicken Point Restaurant",
            "cloudinaryImageId": "yz9ypyq37sekxnzikvb6",
            "locality": "Gamma 1",
            "areaName": "Greater Noida",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 3.6,
            "parentId": "16565",
            "avgRatingString": "3.6",
            "totalRatingsString": "6.0K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "461"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/chicken-point-restaurant-gamma-1-greater-noida-rest98231",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "241981",
            "name": "Ghar Ki Rasoi",
            "cloudinaryImageId": "uk5nttwu1otlhbyvn3sd",
            "locality": "Jagat Farm",
            "areaName": "Gama 1 Sector",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 3.4,
            "parentId": "10211",
            "avgRatingString": "3.4",
            "totalRatingsString": "690",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 22:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/ghar-ki-rasoi-jagat-farm-gama-1-sector-rest241981",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "90290",
            "name": "Khan's Kathi Rolls",
            "cloudinaryImageId": "4ef575844188c99096fd36490b9d32bf",
            "locality": "Sector 18",
            "areaName": "Greater Noida",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Chinese",
                "Beverages",
                "Mughlai",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "parentId": "117503",
            "avgRatingString": "4.1",
            "totalRatingsString": "8.0K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "1.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/khans-kathi-rolls-sector-18-greater-noida-rest90290",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "778380",
            "name": "Krishna Foods",
            "cloudinaryImageId": "a436fdce0f2e294927ad0aa3d48609ce",
            "locality": "Gautam Buddha Nagar",
            "areaName": "Greater Noida",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Thalis",
                "Chinese",
                "American",
                "Biryani",
                "Desserts",
                "Tandoor",
                "Snacks",
                "Beverages",
                "Burger",
                "Pastas"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "120828",
            "avgRatingString": "4.3",
            "totalRatingsString": "522",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 05:29:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/krishna-foods-gautam-buddha-nagar-greater-noida-rest778380",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "855401",
            "name": "Hungray",
            "cloudinaryImageId": "481fc42f9821e18b124c235b3d1a073d",
            "locality": "Sector Alpha Rd",
            "areaName": "Greater Noida",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Fast Food",
                "Momos",
                "Beverages"
            ],
            "veg": true,
            "parentId": "502770",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-06 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/hungray-sector-alpha-rd-greater-noida-rest855401",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "22567",
            "name": "Desi Galli",
            "cloudinaryImageId": "jmc97xpl7eln0vy8udme",
            "locality": "Beta 1",
            "areaName": "Greater Noida",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Mughlai",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.5,
            "parentId": "16322",
            "avgRatingString": "3.5",
            "totalRatingsString": "3.2K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-10-07 05:29:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹40",
                "discountTag": "POCKET HERO",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "109"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-286c03c3-affc-47c9-9cd7-3ba6cfde781f"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/noida-1/desi-galli-beta-1-greater-noida-rest22567",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
];

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>
            </div>
            <div className="res-container">

                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}

            </div>
        </div>
    );
};

const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; {currYear}, Made by <strong>Neelakshi</strong>
            </p>
        </footer>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
