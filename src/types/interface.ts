export interface IreservationDetails {
  _id?: string;
  name: string;
  phone: string | string;
  numberOfPeople: number | string;
  smoking: boolean;
  dateTime: string;
  specialRequests: string;
}
export interface Icomments {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}
export interface Idishes {
  id: number;
  price: string;
  name: string;
  image: string;
  category: string;
  label: string;
  description: string;
  comments: Icomments[];
}
