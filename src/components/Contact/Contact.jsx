import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import email from "../../assets/annimation/email.json";
import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";
import { TiContacts } from "react-icons/ti";
import { Toaster, toast } from 'react-hot-toast';


const Contact = () => {
  const [state, handleSubmit] = useForm("xovlwlea"); // Formspree form ID

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (!state.errors) {
      e.target.reset(); // Reset form fields
      toast.success('Message sent successfully!', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  return (
    <section className="contact-section">
      <Toaster />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="contact-info"
            >
              <h2>
                <TiContacts className="icon-contact" />
                Get in Touch
              </h2>
              <p>Let's work together to bring your ideas to life.</p>
              <div className="animation-container">
                <Lottie animationData={email} loop={true} />
              </div>
            </motion.div>
          </div>

          <div className="contact-right">
            <motion.form
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="5"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="error-message"
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {state.errors && (
                <div className="error-container">
                  {Object.values(state.errors).map((error, index) => (
                    <p key={index} className="error-message">{error}</p>
                  ))}
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
