"use client";

import Reveal from "../motion/Reveal";
import { MessageSquare, Star, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { experiences } from "@/data/experiences";
import { useState } from "react";

export default function Testimonials() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    rating: 5,
    review: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit review");
      
      setStatus("success");
      setFormData({ name: "", email: "", experience: "", rating: 5, review: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section 
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative bg-background-light overflow-hidden py-12 md:py-16 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-12 text-center relative">
            <div className="relative inline-block">
              <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-accent-gold mb-3">The Trust</span>
              <h2 
                id="testimonials-title"
                className="font-serif text-4xl tracking-tight text-primary md:text-5xl"
              >
                Traveler Stories
              </h2>
              
              <div className="mt-3 flex flex-col items-center gap-2">
                <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/60">
                  How was your experience with Syren?
                </p>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="flex items-center gap-2 text-accent-gold hover:text-primary transition-colors duration-300"
                >
                  <MessageSquare size={12} strokeWidth={1.5} />
                  <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em]">Share your story</span>
                </button>
              </div>
            </div>
            <div className="mx-auto mt-6 h-px w-16 bg-accent-gold/40" />
          </div>
        </Reveal>

        {showForm && (
          <Reveal>
            <div className="mb-16 max-w-xl mx-auto p-8 bg-surface border border-accent-gold/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
              
              <div className="text-center mb-8">
                <h3 className="font-serif text-xl text-primary mb-1">Your Experience</h3>
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">Private Journey Feedback</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Julianne Moore" 
                      className="w-full bg-transparent border-b border-border/50 py-1.5 text-white focus:outline-none focus:border-accent-gold transition-colors placeholder:text-white/20 text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. julianne@luxury.com" 
                      className="w-full bg-transparent border-b border-border/50 py-1.5 text-white focus:outline-none focus:border-accent-gold transition-colors placeholder:text-white/20 text-xs" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <label className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/40 ml-1">Your Experience</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-transparent border-b border-border/50 py-1.5 text-white focus:outline-none focus:border-accent-gold transition-colors text-xs appearance-none cursor-pointer pr-8"
                    >
                      <option value="" disabled className="bg-surface">Select your experience</option>
                      {experiences.map((exp) => (
                        <option key={exp.slug} value={exp.title} className="bg-surface">
                          {exp.title}
                        </option>
                      ))}
                      <option value="Custom Journey" className="bg-surface">Custom Private Journey</option>
                    </select>
                    <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                  <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">Rating</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <button 
                        key={i} 
                        type="button" 
                        onClick={() => setFormData({ ...formData, rating: i + 1 })}
                        className={`transition-all duration-300 ${
                          i < formData.rating ? "text-accent-gold scale-110" : "text-white/10"
                        } hover:text-accent-gold`}
                      >
                        <Star size={14} fill={i < formData.rating ? "currentColor" : "none"} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/40 ml-1">Your Story</label>
                  <textarea 
                    required
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    placeholder="Describe the moments that defined your journey..." 
                    rows={2} 
                    className="w-full bg-transparent border-b border-border/50 py-1.5 text-white focus:outline-none focus:border-accent-gold transition-colors placeholder:text-white/20 resize-none text-xs leading-relaxed" 
                  /> 
                </div>

                <div className="text-center pt-2">
                  {status === "success" ? (
                    <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <CheckCircle2 className="text-accent-gold" size={24} />
                      <p className="font-sans text-[10px] text-white">Thank you. Your story has been received.</p>
                      <button 
                        type="button" 
                        onClick={() => { setStatus("idle"); setShowForm(false); }}
                        className="text-[9px] uppercase tracking-widest text-accent-gold hover:underline"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button 
                        type="submit" 
                        disabled={status === "submitting"}
                        className="syren-btn-secondary py-2.5 text-[9px] w-full disabled:opacity-50"
                      > 
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="animate-spin mr-2" size={12} />
                            Sending...
                          </>
                        ) : (
                          "Send Feedback"
                        )}
                      </button> 
                      {status === "error" && (
                        <p className="text-red-500 text-[9px] font-sans uppercase tracking-widest">{errorMessage}</p>
                      ) }
                    </div>
                  ) }
                </div>
              </form>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={0.1 * (i + 1)}>
              <article className="group relative flex flex-col h-full p-8 bg-surface border border-border shadow-sm transition-all duration-500 ease-out hover:border-primary/30 hover:-translate-y-0.5">
                {/* Decorative Quote Mark */}
                <span className="absolute top-6 left-8 font-serif text-5xl text-primary/10 select-none transition-colors duration-500 group-hover:text-primary/20 leading-none">
                  &ldquo;
                </span>
                
                <div 
                  className="relative z-10 flex gap-1 mb-4"
                  role="img" 
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={10}
                      className={`${
                        index < t.rating 
                          ? "fill-accent-gold text-accent-gold" 
                          : "text-white/10"
                      }`}
                      strokeWidth={index < t.rating ? 0 : 1.5}
                    />
                  ))}
                </div>

                <div className="flex-1 relative z-10">
                  <p className="font-serif text-base md:text-lg leading-relaxed text-white italic mb-4">
                    {t.review}
                  </p>
                  <p className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-primary/60 mb-6">
                    {t.experience}
                  </p>
                </div>

                <div className="mt-auto flex flex-col items-start gap-3">
                  <div className="h-px w-6 bg-primary/40 transition-all duration-500 group-hover:w-10 group-hover:bg-primary" />
                  
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex flex-col gap-0.5">
                      <p className="font-sans text-[9px] font-bold tracking-[0.3em] uppercase text-accent-gold">
                        {t.name}
                      </p>
                      <p className="font-sans text-[8px] font-medium tracking-[0.2em] uppercase text-white/40">
                        {t.country}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 opacity-30 flex-shrink-0">
                      <CheckCircle2 size={8} className="text-accent-gold" />
                      <span className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/40">Verified</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6}>
          <div className="mt-16 text-center">
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/40">
              Shared by guests following their private journeys with Syren
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
