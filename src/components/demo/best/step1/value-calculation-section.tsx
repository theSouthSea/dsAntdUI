import React from "react";
import { Section } from "./section";
import { DiscountFormComponent } from "./discount-form-component";

export const ValueCalculationsSection = ({
  onDiscountChange
}: {
  onDiscountChange: (val: number) => void;
}) => {
  console.info("ValueCalculationsSection render");
  return (
    <Section title="Value calculation">
      <DiscountFormComponent onDiscountChange={onDiscountChange} />
    </Section>
  );
};
