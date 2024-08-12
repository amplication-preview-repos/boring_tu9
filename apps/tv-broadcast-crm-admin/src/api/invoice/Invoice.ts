import { Customer } from "../customer/Customer";
import { InvoiceItem } from "../invoiceItem/InvoiceItem";

export type Invoice = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  dueDate: Date | null;
  id: string;
  invoiceItems?: Array<InvoiceItem>;
  updatedAt: Date;
};
