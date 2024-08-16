import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  birthDate?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
