export const ValueCalculationsSection = ({
  onDiscountChange,
}: {
  onDiscountChange: (val: number) => void
}) => {
  console.info("ValueCalculationsSection render")
  return (
    <Section title="Value calculation">
      <DiscountFormComponent onDiscountChange={onDiscountChange} />
    </Section>
  )
}
