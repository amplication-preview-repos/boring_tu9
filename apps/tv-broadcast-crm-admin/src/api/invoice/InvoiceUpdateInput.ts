import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  dueDate?: Date | null;
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;
};
