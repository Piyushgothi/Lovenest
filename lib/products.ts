import type { Product } from "./store-context"

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Red Rose Bouquet",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
    category: "bouquets",
    description: "A stunning arrangement of 24 premium red roses, hand-tied with satin ribbon.",
    rating: 4.9,
    reviews: 328,
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "2",
    name: "Pink Rose Arrangement",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop",
    category: "bouquets",
    description: "Delicate pink roses beautifully arranged with baby's breath and greenery.",
    rating: 4.8,
    reviews: 186,
    inStock: true
  },
  {
    id: "3",
    name: "Mixed Valentine Bouquet",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
    category: "bouquets",
    description: "A romantic mix of red and pink roses with tulips and lilies.",
    rating: 4.7,
    reviews: 142,
    inStock: true,
    badge: "Valentine Special"
  },
  {
    id: "4",
    name: "Luxury Teddy Bear",
    price: 34.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "soft-toys",
    description: "An adorable 18-inch plush teddy bear with a soft velvet bow.",
    rating: 4.8,
    reviews: 215,
    inStock: true,
    badge: "Top Rated"
  },
  {
    id: "5",
    name: "Heart Plush Pillow",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1615031335550-2f6afb3f13e8?w=400&h=400&fit=crop",
    category: "soft-toys",
    description: "Soft heart-shaped pillow in romantic red, perfect for cuddling.",
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  {
    id: "6",
    name: "Giant Teddy Bear",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=400&h=400&fit=crop",
    category: "soft-toys",
    description: "Extra large 36-inch teddy bear for the ultimate Valentine surprise.",
    rating: 4.9,
    reviews: 167,
    inStock: true,
    badge: "Popular"
  },
  {
    id: "7",
    name: "Premium Chocolate Box",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop",
    category: "chocolates",
    description: "Handcrafted Belgian chocolates in a heart-shaped gift box.",
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: "8",
    name: "Rose & Teddy Combo",
    price: 74.99,
    originalPrice: 94.99,
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
    category: "combos",
    description: "Perfect combo: Red rose bouquet with a cute teddy bear.",
    rating: 5.0,
    reviews: 89,
    inStock: true,
    badge: "Best Value"
  }
]

export const categories = [
  { id: "bouquets", name: "Bouquets" },
  { id: "soft-toys", name: "Soft Toys" },
  { id: "chocolates", name: "Chocolates" },
  { id: "combos", name: "Combos" }
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.badge || p.rating >= 4.8).slice(0, 4)
}

export function getFeaturedDeals(): Product[] {
  return products.filter((p) => p.originalPrice).slice(0, 4)
}
