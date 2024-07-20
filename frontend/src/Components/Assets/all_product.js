import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";
import p37_img from "./product_37.png";

let all_product = [
  {
    id: 1,
    name: "Women Winter Jacket",
    category: "women",
    image: p1_img,
    new_price: 500,
    old_price: 805,
  },
  {
    id: 2,
    name: "Women Pink Crop Top",
    category: "women",
    image: p2_img,
    new_price: 850,
    old_price: 1205,
  },
  {
    id: 3,
    name: "Nike Women Crop Top",
    category: "women",
    image: p3_img,
    new_price: 600,
    old_price: 1005,
  },
  {
    id: 4,
    name: "Women V-neck Top with Red and Black Patterns",
    category: "women",
    image: p4_img,
    new_price: 1000,
    old_price: 1500,
  },
  {
    id: 5,
    name: "Women Party Wear Top",
    category: "women",
    image: p5_img,
    new_price: 1000,
    old_price: 1205,
  },
  {
    id: 6,
    name: "Women Full Sleeve Orange Colour Top",
    category: "women",
    image: p6_img,
    new_price: 550,
    old_price: 999,
  },
  {
    id: 7,
    name: "Women High Neck White Top",
    category: "women",
    image: p7_img,
    new_price: 500,
    old_price: 800,
  },
  {
    id: 8,
    name: "Women Balloon Sleeve Top",
    category: "women",
    image: p8_img,
    new_price: 400,
    old_price: 650,
  },
  {
    id: 9,
    name: "Women Floral Print Top",
    category: "women",
    image: p9_img,
    new_price: 1050,
    old_price: 1300,
  },
  {
    id: 10,
    name: "Women Red Crop Hoodie",
    category: "women",
    image: p10_img,
    new_price: 650,
    old_price: 1000,
  },
  {
    id: 11,
    name: "Women Striped Black Crop Top",
    category: "women",
    image: p11_img,
    new_price: 210,
    old_price: 500,
  },
  {
    id: 12,
    name: "Women Full Sleeve Black T-shrit",
    category: "women",
    image: p12_img,
    new_price: 350,
    old_price: 500,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 800,
    old_price: 1200,
  },
  {
    id: 14,
    name: "Men White Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 580,
    old_price: 1000,
  },
  {
    id: 15,
    name: "Men Black and White Pattern Solid Zippered Jacket",
    category: "men",
    image: p15_img,
    new_price: 850,
    old_price: 1205,
  },
  {
    id: 16,
    name: "Men Urban Street Jacket",
    category: "men",
    image: p16_img,
    new_price: 1050,
    old_price: 1500,
  },
  {
    id: 17,
    name: "Men Denim Jacket",
    category: "men",
    image: p17_img,
    new_price: 850,
    old_price: 1205,
  },
  {
    id: 18,
    name: "Men White Colour Jacket",
    category: "men",
    image: p18_img,
    new_price: 450,
    old_price: 800,
  },
  {
    id: 19,
    name: "Men White Colour Hoodie",
    category: "men",
    image: p19_img,
    new_price: 990,
    old_price: 1255,
  },
  {
    id: 20,
    name: "Men Solid Black Jacket",
    category: "men",
    image: p20_img,
    new_price: 550,
    old_price: 999,
  },
  {
    id: 21,
    name: "Men High Neck Raincoat",
    category: "men",
    image: p21_img,
    new_price: 770,
    old_price: 1333,
  },
  {
    id: 22,
    name: "Men White Colour Sweater",
    category: "men",
    image: p22_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 23,
    name: "Men Yellow Colour Hoodie",
    category: "men",
    image: p23_img,
    new_price: 980,
    old_price: 1340,
  },
  {
    id: 24,
    name: "Men Black Colour Leather Jacket",
    category: "men",
    image: p24_img,
    new_price: 1500,
    old_price: 2000,
  },
  {
    id: 25,
    name: "Boys Blue Colour Hoodie",
    category: "kid",
    image: p25_img,
    new_price: 860,
    old_price: 1265,
  },
  {
    id: 26,
    name: "Boys Black Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 650,
    old_price: 1200,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 850,
    old_price: 1205,
  },
  {
    id: 28,
    name: "Boys Green Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 400,
    old_price: 750,
  },
  {
    id: 29,
    name: "Boys Dual Colour Jacket",
    category: "kid",
    image: p29_img,
    new_price: 550,
    old_price: 890,
  },
  {
    id: 30,
    name: "Boys Brown Colour Sweater",
    category: "kid",
    image: p30_img,
    new_price: 999,
    old_price: 1550,
  },
  {
    id: 31,
    name: "Boys Denim Jacket",
    category: "kid",
    image: p31_img,
    new_price: 950,
    old_price: 1200,
  },
  {
    id: 32,
    name: "Boys Blue Colour Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 350,
    old_price: 500,
  },
  {
    id: 33,
    name: "Boys Black Full Sleeve Black T-shrit",
    category: "kid",
    image: p33_img,
    new_price: 600,
    old_price: 1000,
  },
  {
    id: 34,
    name: "Boys Black Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 770,
    old_price: 1220,
  },
  {
    id: 35,
    name: "Boys Black Orange Blocked Pattern Puma Hoodie",
    category: "kid",
    image: p35_img,
    new_price: 1000,
    old_price: 1500,
  },
  {
    id: 36,
    name: "Boys Black Leather Jacket",
    category: "kid",
    image: p36_img,
    new_price: 700,
    old_price: 1200,
  },
  {
    id: 37,
    name: "Women Fit and Flare Grey Dress",
    category: "women",
    image: p37_img,
    new_price: 610,
    old_price: 1205,
  },
];

export default all_product;
