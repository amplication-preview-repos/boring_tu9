import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
