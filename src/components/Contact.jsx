import emailjs from "emailjs-com";
import React, { useState } from "react";
import resume from "../assets/MuhamadKataw.png"; // Replace with the actual URL to your resume file

const Contact = () => {
  const [option, setOption] = useState("resume");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .send(
        "mkataw", // Replace with your EmailJS service ID
        "template_qd4xf3l", // Replace with your EmailJS template ID
        formData,
        "K5x2pQT4Q3jjSNiX-" // Replace with your EmailJS user ID
      )
      .then((response) => {
        setIsSending(false);
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsSending(false);
        setErrorMessage("Failed to send message. Please try again later.");
        setSuccessMessage("");
      });
  };

  return (
    <div
      id="contact"
      className="pt-10 bg-slate-900 h-auto flex flex-col items-center"
    >
      <h2 className="text-2xl text-white font-bold mb-4 text-center">
        Get in Touch
      </h2>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mx-2 ${
            option === "resume"
              ? "bg-sky-700 text-white"
              : "bg-slate-300 text-sky-700"
          } rounded-md`}
          onClick={() => handleOptionChange("resume")}
        >
          Resume
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            option === "contact"
              ? "bg-sky-700 text-white"
              : "bg-slate-300 text-sky-700"
          } rounded-md`}
          onClick={() => handleOptionChange("contact")}
        >
          Contact
        </button>
      </div>

      {option === "resume" ? (
        <div className="bg-slate-300 p-6 rounded-lg shadow-md text-sky-700 w-full h-full max-w-[650px]">
          <h3 className="text-xl font-semibold mb-4 text-center">My Resume</h3>
          <div className="relative w-full" style={{ paddingTop: "75%" }}>
            <iframe
              src={resume}
              className="absolute top-0 left-0 w-full h-full border-none"
              title="Resume"
            ></iframe>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={resume}
              download="MuhamadKataw_Resume.png" // Specify the file name for the downloaded file
              className="bg-sky-700 text-white px-4 py-2 rounded-md hover:bg-sky-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-slate-300 p-6 rounded-lg shadow-md text-sky-700 w-full"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Contact Me</h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-sky-700 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-sky-700 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-sky-700 rounded-md h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-sky-700 text-white p-2 rounded-md hover:bg-sky-800"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
          {successMessage && (
            <p className="mt-4 text-green-500 text-center">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Contact;
