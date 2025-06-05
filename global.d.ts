export {};

declare global {
  interface Window {
    addToCart(id: string, name: string, price: number, quantity: number): void;
  }
}
