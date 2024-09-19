import styles from "./index.module.less"

const InlineCheckbox = () => {
  return (
    <>
      <div>InlineCheckbox</div>
      <p>您的性别：</p>
      <div className={styles["radio-sex"]}>
        <input type="radio" id="sex1" name="sex" />
        <label htmlFor="sex1"></label>
        <span>男</span>
      </div>
      <div className={styles.radioSex}>
        <input type="radio" id="sex2" name="sex" />
        <label htmlFor="sex2"></label> 女
      </div>
    </>
  )
}
export default InlineCheckbox
