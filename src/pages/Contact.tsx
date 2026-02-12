import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - would connect to backend
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-16 bg-background">
      <div className="container">
        <SectionHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out to us anytime!" />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg shadow-md p-8 border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Address</h4>
                    <p className="font-body text-sm text-muted-foreground">Department of Computer Science & Design<br />Dr. Vithalrao Vikhe Patil College Of Engineering<br />Ahilyanagar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Email</h4>
                    <p className="font-body text-sm text-muted-foreground">csd@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Phone</h4>
                    <p className="font-body text-sm text-muted-foreground">+91 98901 24580</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg h-56 flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-body text-sm">📍 Google Map Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-md p-8 border border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Subject</label>
                <input
                  type="text"
                  required
                  maxLength={200}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-md border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-semibold hover:bg-navy transition-colors"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
