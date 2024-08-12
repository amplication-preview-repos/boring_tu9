import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceItemCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  dueDate?: Date | null;
  invoiceItems?: InvoiceItemCreateNestedManyWithoutInvoicesInput;
};
