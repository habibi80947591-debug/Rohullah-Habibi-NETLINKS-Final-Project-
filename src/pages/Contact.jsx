import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Send, Store, ArrowLeft } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { products } from "../data/products";

const DEFAULT_CONTACT = "hello@rohtech-demo.example";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const selectedProduct = products.find(product => product.id === searchParams.get("product"));
  const recipientEmail = selectedProduct?.sellerEmail || DEFAULT_CONTACT;
  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    subject: selectedProduct ? `Enquiry about ${selectedProduct.name}` : "",
    message: selectedProduct
      ? `Hello ${selectedProduct.seller},\n\nI am interested in ${selectedProduct.name}. Could you please share more information about its availability and details?\n\nThank you.`
      : "",
  }));

  const update = event => setForm(current => ({ ...current, [event.target.name]: event.target.value }));

  const submit = event => {
    event.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || (selectedProduct ? `Enquiry about ${selectedProduct.name}` : "RohTech enquiry"));
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return <>
    <PageIntro eyebrow="WE'RE HERE TO HELP" title="Let's talk tech." description="Have a question about a product or the RohTech project? Send a message to start the conversation." />
    <section className="container section contact-layout">
      <div className="contact-aside">
        <span className="eyebrow">CONTACT DETAILS</span>
        <h2>{selectedProduct ? "Your seller enquiry." : "Questions are always welcome."}</h2>
        <p>For this academic demonstration, contact details are sample data. Replace them with approved public business contacts before publishing.</p>
        {selectedProduct && <div className="seller-contact-context">
          <span className="seller-contact-icon"><Store size={18} /></span>
          <div><small>YOU ARE CONTACTING</small><b>{selectedProduct.seller}</b><span>{selectedProduct.name}</span></div>
        </div>}
        <div className="contact-detail"><span><Mail /></span><div><small>{selectedProduct ? "Seller email (demo)" : "Project email (demo)"}</small><b>{recipientEmail}</b></div></div>
        <div className="contact-detail"><span><MapPin /></span><div><small>Project location</small><b>Kabul, Afghanistan</b></div></div>
        <div className="contact-detail"><span><MessageCircle /></span><div><small>Seller enquiries</small><b>Product details are added automatically</b></div></div>
        {selectedProduct && <Link to={`/products/${selectedProduct.id}`} className="text-link contact-back"><ArrowLeft size={15} /> Back to product</Link>}
      </div>
      <form className="contact-form" onSubmit={submit}>
        <span className="eyebrow">SEND A MESSAGE</span>
        <h2>{selectedProduct ? `Ask about ${selectedProduct.name}.` : "Write to RohTech."}</h2>
        <div className="form-two">
          <label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Your name" /></label>
          <label>Email address<input type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label>
        </div>
        <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What is this about?" /></label>
        <label>Message<textarea name="message" value={form.message} onChange={update} required rows="6" placeholder="Write your message..." /></label>
        <button className="btn btn-primary full-btn" type="submit">Continue to email app <Send size={16} /></button>
        <p className="form-hint">This opens your email application with the selected seller as the recipient and your enquiry prepared. It does not send or store messages on a server. Demo email addresses must be replaced before real use.</p>
      </form>
    </section>
  </>;
}
