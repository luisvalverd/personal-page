import React from "react";

const Form: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="number" name="phone" id="phone" />
      </div>
      <button type="submit">Contact</button>
    </form>
  )
}

export default Form;

