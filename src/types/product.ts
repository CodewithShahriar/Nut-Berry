export interface Product {
  id: string;
  name: string;
  category: "almonds" | "cashews" | "pistachios" | "walnuts" | "dried-fruits";
  weight: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  benefits: string[];
  inStock: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: "almonds" | "cashews" | "pistachios" | "walnuts" | "dried-fruits";
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  verified: boolean;
}

export interface OrderPayload {
  customerName: string;
  phone: string;
  address: string;
  city: string;
  paymentMethod: "cod" | "bkash" | "nagad";
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  notes?: string;
}
