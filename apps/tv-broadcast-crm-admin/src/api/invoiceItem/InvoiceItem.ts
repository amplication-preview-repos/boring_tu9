import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";

export type InvoiceItem = {
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
