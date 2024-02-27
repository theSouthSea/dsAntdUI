import { useFormData, useFormDiscount } from "@/pages/best/FormDataProvider"

// export const DiscountSituation = ({ discount }: { discount: number }) => {
//   console.info("Discount situation render");
//   const discountPercent = Math.round((discount / 300) * 100);

//   let discountSituation = "😊";
//   if (discountPercent < 10) discountSituation = "😊";
//   // eslint-disable-next-line react/no-unescaped-entities
//   else if (discountPercent < 50) discountSituation = "😐";
//   else discountSituation = "🤣";

//   return <div>Your discount situation: {discountSituation}</div>;
// };

export const DiscountSituation = () => {
  // const { state } = useFormState()
  // const { discount } = useFormData()
  const discount = useFormDiscount()
  console.info("Discount situation render")
  const discountPercent = Math.round((discount / 300) * 100)

  let discountSituation = "😊"
  if (discountPercent < 10) discountSituation = "😊"
  else if (discountPercent < 50) discountSituation = "😐"
  else discountSituation = "🤣"

  return <div>Your discount situation: {discountSituation}</div>
}
