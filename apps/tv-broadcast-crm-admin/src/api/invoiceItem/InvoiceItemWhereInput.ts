import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvoiceItemWhereInput = {
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
