import { DiscountSituation } from "./DiscountSituation"
import { NameFormComponent } from "./NameFormComponent"
import { SelectCountryFormComponent } from "./SelectCountryComponent"
import { Country } from "./step1/select-country-from-component"

export const PersonalInfoSection = ({
  onNameChange,
  onCountryChange,
  discount,
  name,
}: {
  onNameChange: (name: string) => void
  onCountryChange: (name: Country) => void
  discount: number
  name: string
}) => {
  return (
    <Section title="Personal information">
      <DiscountSituation discount={discount} />
      <NameFormComponent onChange={onNameChange} name={name} />
      <SelectCountryFormComponent onChange={onCountryChange} />
    </Section>
  )
}
