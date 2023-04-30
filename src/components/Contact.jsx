import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const publicKey = import.meta.env.VITE_PK;
const service_key = import.meta.env.VITE_SK;
const Template_key = import.meta.env.VITE_TK;

const VITE_PK = "uSeCfXHIDPEN40Fua"
const VITE_SK = "service_63sxevh"
const VITE_TK = "template_ef2g9a4"

// console.log(publicKey, service_key, Template_key, "😇", apiKey);

const Contact = ({ targetRef }) => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  // const sendEmail = (e) => {
  //   console.log(form.current);
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         // Clear all input field values
  //         form.current.reset();
  //         // Success toast message
  //         toast.success("Email sent successfully");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         // Error toast message
  //         toast.error("Oops, something went wrong. Please try again later.");
  //       }
  //     );
  // };




  const sendEmail = (e) => {
    e.preventDefault();
    const { from_name, user_email, message } = e.target.elements;
    const data = {
      from_name: from_name.value,
      user_email: user_email.value,
      message: message.value,
    };

    console.log(data, "😊");

    emailjs
      .send(VITE_SK, VITE_TK, data, VITE_PK)
      // .send(service_key, Template_key, data, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          e.target.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section ref={targetRef} className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
