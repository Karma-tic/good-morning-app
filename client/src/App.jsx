import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const data = await response.json();
      console.log("Saved:", data);

      alert("Good Morning! Your data has been saved 🌅");

      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
  <div className="page">
    <div className="card">
      <h1>🌅 Good Morning</h1>
      <p className="subtitle">
        Start your day by sharing your details
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);
}

export default App;
