import { useState } from "react";

export default function FormSubmits() {
  const [formData, setFormData] = useState("");
  return (
    <>
      <h2>Form Submits</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // get data over event.target.elements
          const form = event.target.elements;
          const nameInput = form.nameInput.value;

          // const formData = new FormData(event.target);
          // const data = Object.fromEntries(formData);
          // console.log(data);

          setFormData(nameInput);
        }}
      >
        <label htmlFor="nameInput">Name: </label>
        <input type="text" id="nameInput" name="nameInput" />

        <button type="submit">submit</button>
      </form>

      <p>{formData}</p>
    </>
  );
}
