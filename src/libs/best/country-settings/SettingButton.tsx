import { useModal } from "@/pages/best/hooks/useModal"

const SettingsButton = () => {
  const { Dialog, open } = useModal()

  return (
    <>
      <button onClick={open}>Open settings</button>
      <Dialog />
    </>
  )
}
export default SettingsButton
