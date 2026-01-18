import { useState } from "react";
import './index.css';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "", // optional
        hp: "", // honeypot (should remain empty)
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ sending: false, ok: null, msg: "" });

    function validate() {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
        if (!form.message.trim()) e.message = "Message is required";
        else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
        // honeypot should be empty
        if (form.hp && form.hp.trim().length > 0) e.hp = "Spam detected";
        return e;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ sending: false, ok: null, msg: "" });

        const validation = validate();
        setErrors(validation);
        if (Object.keys(validation).length) return;

        setStatus({ sending: true, ok: null, msg: "Sending..." });

        try {
            // adjust endpoint as needed. Many static sites use Formspree, Netlify Functions, or your own API.
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    subject: form.subject.trim(),
                    message: form.message.trim(),
                    phone: form.phone.trim(),
                }),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || res.statusText || "Request failed");
            }

            setStatus({ sending: false, ok: true, msg: "Message sent. Thank you!" });
            setForm({ name: "", email: "", subject: "", message: "", phone: "", hp: "" });
            setErrors({});
        } catch (err) {
            setStatus({
                sending: false,
                ok: false,
                msg:
                    "Failed to send. If this persists, email me directly at your-email@example.com",
            });
            console.error("Contact form error:", err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    return (
        <div className="container">
            <h2 style={{ marginTop: 0 }}>Contact Me</h2>
            <p className="small">Fill out the form and I'll get back to you as soon as I can.</p>

            <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        className="input"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div className="field">
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="input"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div className="field">
                    <label className="label" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        className="input"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Brief subject (optional)"
                    />
                </div>

                <div className="field">
                    <label className="label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="input textarea"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or question..."
                        required
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                </div>

                <div className="field">
                    <label className="label" htmlFor="phone">
                        Phone (optional)
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        className="input"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Optional phone number"
                    />
                </div>

                {/* Honeypot field - visually hidden */}
                <div style={{ height: 0, overflow: "hidden", position: "absolute", left: "-9999px" }}>
                    <label htmlFor="hp">Leave this field empty</label>
                    <input id="hp" name="hp" value={form.hp} onChange={handleChange} />
                    {errors.hp && <div className="error">{errors.hp}</div>}
                </div>

                <div className="toolbar">
                    <button
                        type="submit"
                        className={`btn primary ${status.sending ? "disabled" : ""}`}
                        disabled={status.sending}
                    >
                        {status.sending ? "Sending..." : "Send Message"}
                    </button>

                    {status.ok === true && <div className="success">{status.msg}</div>}
                    {status.ok === false && <div className="errMsg">{status.msg}</div>}
                </div>
            </form>
        </div>
    );
}