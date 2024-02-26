export const ActionsSection = ({ onSave }: { onSave: () => void }) => {
  return (
    <Section title="Actions">
      <button onClick={onClick}>Save form</button>
    </Section>
  )
}
