import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../utils/auth";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(form);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-600 text-white p-3 rounded-lg">
          Sign Up
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;