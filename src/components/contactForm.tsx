import React, { useState, FormEvent } from "react";
import contact from "../assets/img/contact.jpg";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle the submission logic here. For instance, send the formData to an API.
    console.log(formData);
    // Reset the form if necessary.
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      className="w-full flex flex-col justify-center items-center p-10"
      id="contact"
    >
      <p className="font-subtitle text-primary lg:text-4xl text-2xl">
        Show us some love! Contact us
      </p>
      <div className="lg:w-[80%] w-full h-full flex mt-10  flex-col-reverse justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="shadow-md  px-8 pt-6 pb-8 bg-cards  h-full w-full lg:w-[50%]"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2 font-subtitle"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2 font-subtitle"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2 font-subtitle"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        <img
          src={contact}
          alt="contact-burgers"
          className="shadow-xl w-full md:hidden h-full "
        />
      </div>
    </section>
  );
};

export default ContactForm;
