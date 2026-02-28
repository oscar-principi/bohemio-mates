export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

// 1. MATES IMPERIALES
export const categoria1: Product[] = [
  {
    id: 1,
    name: "Imperial Premium",
    description: "Calabaza seleccionada forrada en cuero vacuno con virola de alpaca.",
    price: 45000,
    image: "https://picsum.photos/id/1060/600/600",
  },
  {
    id: 2,
    name: "Imperial Cincelado",
    description: "Pieza de autor con detalles cincelados a mano en la base y virola.",
    price: 52000,
    image: "https://picsum.photos/id/1080/600/600",
  },
];

// 2. MATES CAMIONEROS
export const categoria2: Product[] = [
  {
    id: 3,
    name: "Camionero Clásico",
    description: "Mate de calabaza gruesa, forrado en cuero legítimo de alta resistencia.",
    price: 32000,
    image: "https://picsum.photos/id/1025/600/600",
  },
  {
    id: 4,
    name: "Camionero XL",
    description: "Tamaño extra grande para sesiones de mate prolongadas.",
    price: 35000,
    image: "https://picsum.photos/id/1040/600/600",
  },
];

// 3. MATES DE MADERA
export const categoria3: Product[] = [
  {
    id: 5,
    name: "Algarrobo Minimal",
    description: "Madera de algarrobo torneada con terminación en aceite de tung.",
    price: 18000,
    image: "https://picsum.photos/id/1059/600/600",
  },
];

// 4. ACCESORIOS
export const categoria4: Product[] = [
  {
    id: 6,
    name: "Bombilla Pico de Loro",
    description: "Acero inoxidable con filtro desarmable de alta gama.",
    price: 12000,
    image: "https://picsum.photos/id/1069/600/600",
  },
];

// 5. PERSONALIZADOS
export const personalizados: Product[] = [
  {
    id: 101,
    name: "Grabado Láser Custom",
    description: "Elegí tu logo, escudo o frase para grabar en la virola o el cuero.",
    price: 5000,
    image: "https://picsum.photos/id/1074/600/600",
  },
  {
    id: 102,
    name: "Cincelado a Pedido",
    description: "Trabajo artesanal exclusivo sobre alpaca con iniciales en relieve.",
    price: 15000,
    image: "https://picsum.photos/id/1039/600/600",
  },
];