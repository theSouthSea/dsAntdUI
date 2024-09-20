import { ChangeEvent, useState } from "react"

const NotControlled = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <>
      <div>NotControlled</div>
      <fieldset>
        <legend>Choose your monster's features:</legend>
        <div>
          <input
            type="text"
            value={form.username}
            name="username"
            id="username"
            onChange={handleChange}
          />
          <label htmlFor="username">username</label>
        </div>

        <div>
          <input
            type="text"
            value={form.password}
            name="password"
            id="password"
            onChange={handleChange}
          />
          <label htmlFor="password">password</label>
        </div>
      </fieldset>
    </>
  )
}
export default NotControlled
