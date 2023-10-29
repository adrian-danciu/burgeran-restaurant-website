export interface ProductCard {
  id: number;
  name: string;
  type?: string;
  price: number;
  description: string;
  image: string;
  favorite?: boolean;
}
