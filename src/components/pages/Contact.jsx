import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "853d62d9-45f9-441e-8107-066e7f193683");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    //clear the results after 3 seconds
    setTimeout(() => {
      setResult("");
    }, 2000);
  };
  return (
    <div className="content">
      {/* --- CONTENT --- */}
      <section className="contact">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>
              name: <span>*</span>
            </label>
            <br />
            <input type="text" className="field" name="name" required />
          </div>
          <div className="input-box">
            <label>
              email: <span>*</span>
            </label>
            <br />
            <input type="email" className="field" name="email" required />
          </div>
          <div className="input-box">
            <textarea
              name="message"
              id=""
              className="field mess"
              placeholder="enter your message here!"
              required
            ></textarea>
          </div>
          <div className="form-btn">
            <button type="submit">send</button>
          </div>
        </form>
        <span className="form-result">{result}</span>
      </section>
    </div>
  );
};
