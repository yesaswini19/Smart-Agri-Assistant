import Button from './Button.jsx';

export default function ContactForm({ message, onSubmit }) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="contactName">Your Name</label>
        <input id="contactName" name="name" type="text" placeholder="Your Name" autoComplete="name" required />

        <label htmlFor="contactEmail">Your Email</label>
        <input id="contactEmail" name="email" type="email" placeholder="Your Email" autoComplete="email" required />

        <label htmlFor="contactMessage">Your Message</label>
        <textarea id="contactMessage" name="message" placeholder="Your Message" required />

        <Button type="submit">Send Message</Button>
      </form>
      <p className="contact-message" role="status">{message}</p>
    </section>
  );
}