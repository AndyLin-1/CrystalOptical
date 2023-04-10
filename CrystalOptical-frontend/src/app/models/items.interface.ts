export interface itemsInterface {
  id: number;
  name: string;
  price: number;
  brand: string;
  frameSize: string;
  colour: string;
  rating: number;
  ratingScore: number;
  ratingNumber: number;
  itemStock: number;
  imagePath: string;
}

export interface addItemInterface {
  name: string;
  price: number;
  brand: string;
  frameSize: string;
  colour: string;
  itemStock: number;
  imagePath: string;
}
