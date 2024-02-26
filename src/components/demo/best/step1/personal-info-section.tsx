import React from "react"
import { Country, SelectCountryFormComponent } from "./select-country-from-component"
import { Section } from "./section"
import { DiscountSituation } from "./discount-situation"
import { NameFormComponent } from "./name-form-component"

// export const PersonalInfoSection = ({
//   onNameChange,
//   onCountryChange,
//   discount,
//   name
// }: {
//   onNameChange: (name: string) => void;
//   onCountryChange: (name: Country) => void;
//   discount: number;
//   name: string;
// }) => {
//   console.info("PersonalInfoSection render");

//   return (
//     <Section title="Personal information">
//       <DiscountSituation discount={discount} />
//       <NameFormComponent onChange={onNameChange} name={name} />
//       <SelectCountryFormComponent onChange={onCountryChange} />
//     </Section>
//   );
// };
export const PersonalInfoSection = () => {
  console.info("PersonalInfoSection render")

  return (
    <Section title="Personal information">
      <DiscountSituation />
      <NameFormComponent />
      <SelectCountryFormComponent />
    </Section>
  )
}
