export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes' },
  { id: 'north-indian', name: 'North Indian' },
  { id: 'south-indian', name: 'South Indian' },
  { id: 'chinese', name: 'Chinese' },
  { id: 'street-food', name: 'Street Food' },
  { id: 'beverages', name: 'Beverages' }
];

export const MENU_ITEMS = [
  {
    name: "Paneer Butter Masala",
    price: "₹220 / ₹370",
    isDual: true,
    halfPrice: "₹220",
    fullPrice: "₹370",
    category: "north-indian",
    description: "Rich paneer cubes cooked in a buttery tomato gravy, loaded with fresh cream.",
    isVeg: true,
    tag: "Must Try",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Malai Kofta",
    price: "₹220 / ₹370",
    isDual: true,
    halfPrice: "₹220",
    fullPrice: "₹370",
    category: "north-indian",
    description: "Paneer and potato dumplings simmered in rich, sweet cream and cashew-nut gravy.",
    isVeg: true,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Kadhai Paneer",
    price: "₹230 / ₹390",
    isDual: true,
    halfPrice: "₹230",
    fullPrice: "₹390",
    category: "north-indian",
    description: "Cottage cheese cooked with bell peppers, onions and freshly ground kadhai spices.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Dal Makhni",
    price: "₹180 / ₹300",
    isDual: true,
    halfPrice: "₹180",
    fullPrice: "₹300",
    category: "north-indian",
    description: "Black lentils slow-cooked overnight with cream and butter on tandoor fire.",
    isVeg: true,
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Veg Biryani",
    price: "₹200",
    isDual: false,
    category: "north-indian",
    description: "Fragrant basmati rice cooked with garden-fresh vegetables and aromatic spices.",
    isVeg: true,
    tag: "Classic",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Garlic Butter Naan",
    price: "₹55 / ₹65",
    isDual: true,
    halfPrice: "₹55",
    fullPrice: "₹65",
    category: "north-indian",
    description: "Leavened flatbread infused with minced fresh garlic and baked in tandoor.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626776822946-455ccc68884d?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Tandoori Paneer Tikka",
    price: "₹240",
    isDual: false,
    category: "north-indian",
    description: "Spiced cottage cheese cubes marinated in yogurt and grilled to perfection in a clay oven.",
    isVeg: true,
    tag: "Chef Special",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Masala Dosa",
    price: "₹130",
    isDual: false,
    category: "south-indian",
    description: "Golden crispy crepe stuffed with spiced potato masala. A South Indian classic.",
    isVeg: true,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Chilli Paneer",
    price: "₹180 / ₹300",
    isDual: true,
    halfPrice: "₹180",
    fullPrice: "₹300",
    category: "chinese",
    description: "Batter-fried cottage cheese cubes tossed with capsicum, onion, and hot green chilies.",
    isVeg: true,
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Manchurian",
    price: "₹130 / ₹200",
    isDual: true,
    halfPrice: "₹130",
    fullPrice: "₹200",
    category: "chinese",
    description: "Crispy fried mixed veggie balls tossed in semi-dry dark soy ginger garlic sauce.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Hakka Noodles",
    price: "₹60 / ₹100",
    isDual: true,
    halfPrice: "₹60",
    fullPrice: "₹100",
    category: "chinese",
    description: "Classic Chinese street style dry stir-fried noodles with garlic and mixed vegetables.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "White Sauce Pasta",
    price: "₹130 / ₹210",
    isDual: true,
    halfPrice: "₹130",
    fullPrice: "₹210",
    category: "chinese",
    description: "Penne pasta cooked in smooth, creamy cheese Alfredo sauce with garlic and herbs.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Punjabi Samosa",
    price: "₹40 / ₹70",
    isDual: true,
    halfPrice: "₹40",
    fullPrice: "₹70",
    category: "street-food",
    description: "Crispy flaky pastries filled with spiced potato and green peas, served with mint and tamarind chutneys.",
    isVeg: true,
    tag: "Must Try",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Honey Chilli Potato",
    price: "₹140 / ₹210",
    isDual: true,
    halfPrice: "₹140",
    fullPrice: "₹210",
    category: "street-food",
    description: "Crisp potato fingers tossed in honey, chili sauce, sesame seeds, and spring onion.",
    isVeg: true,
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=80"
  },
  {
    name: "Sweet Punjabi Lassi",
    price: "₹90",
    isDual: false,
    category: "beverages",
    description: "Creamy churned sweet yogurt drink, flavored with cardamom and saffron.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80"
  }
];
