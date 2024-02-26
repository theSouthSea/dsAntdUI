import React from "react";
import { Section } from "./section";

export const ActionsSection = ({ onSave }: { onSave: () => void }) => {
  console.info("ActionsSection render");
  return (
    <Section title="Actions">
      <button onClick={onSave}>Save form</button>
    </Section>
  );
};
