export const ModalDialog = ({ onClose }) => {
  return (
    <>
      <div className="modal-dialog-blanket" onClick={onClose}></div>
      <div className="modal-dialog">some content here</div>
    </>
  )
}
