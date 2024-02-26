import { DiscountFormComponent } from "./discount-form-component"
import { Section } from "./section"

// export const ValueCalculationsSection = ({
//   onDiscountChange
// }: {
//   onDiscountChange: (val: number) => void;
// }) => {
//   console.info("ValueCalculationsSection render");
//   return (
//     <Section title="Value calculation">
//       <DiscountFormComponent onDiscountChange={onDiscountChange} />
//     </Section>
//   );
// };

export const ValueCalculationsSection = () => {
  console.info("ValueCalculationsSection render")
  return (
    <Section title="Value calculation">
      <DiscountFormComponent />
    </Section>
  )
}
