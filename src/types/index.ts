export interface Addon {
  name: string;
  price: number;
}

export interface Service {
  name: string;
  description: string;
  status: 'public' | 'private';
  price: number;
  addons: Addon[];
}

export interface Category {
  title: string;
  services: Service[];
}
