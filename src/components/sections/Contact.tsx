import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { contacts } from "../../constants";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Here you can add your email service logic
    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="relative w-full h-full mx-auto">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="w-full flex flex-col lg:flex-row gap-10 mt-12"
      >
        <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Send me a message</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Let's Talk.
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div className="flex-[0.25] flex flex-col gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="bg-tertiary p-5 rounded-2xl flex justify-between items-center flex-row"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#915EFF]">
                <img
                  src={contact.icon}
                  alt="contact-icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col ml-4">
                <h3 className="text-white font-medium text-[16px]">
                  {contact.title}
                </h3>
                <p className="text-secondary text-[14px]">{contact.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
