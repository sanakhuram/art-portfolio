// app/components/ContactSection.tsx
'use client';

import Image from 'next/image';
import { body, display } from '../lib/fonts'; // ✅ use display for heading

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to send message');
      form.reset();
      console.log('Message sent successfully!');
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 py-20">
      <div className="relative flex flex-col md:flex-row w-full max-w-6xl rounded-lg shadow-lg bg-sage border-4 border-dashed border-white overflow-hidden p-6 sm:p-8">
        {/* PNG stamp */}
        <div className="absolute top-4 right-4 w-auto h-auto md:w-20 md:h-20">
       <Image
  src="/images/stamp.png"
  alt="Stamp"
  width={70}
  height={90}          // pick the correct ratio for your actual PNG
  className="object-contain border-amber-50 border-[6px] "
  priority
/>

        </div>

     {/* Contact info */}
<div className="md:w-1/2 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-white p-4 sm:p-6">
  <h2
    className={`${display.className ?? display.variable}
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
    text-white font-extrabold mb-4 tracking-tight leading-[1.05]`}
  >
    CONTACT
    <br />
    ME
  </h2>


          <p className={`${body.className ?? body.variable} mb-3 text-white text-base sm:text-lg`}>
            I’m open for web development projects, collaborations, and UX/UI design work. Feel free
            to reach out!
          </p>
          <p className={`${body.className ?? body.variable} mb-2 text-white text-base sm:text-lg`}>
            Email: <strong>sana.khuram.baig@gmail.com</strong>
          </p>
          <p className={`${body.className ?? body.variable} text-white text-base sm:text-lg`}>
            Phone: <strong>+47 40140362</strong>
          </p>
        </div>

        {/* Form */}
        <div className="md:w-1/2 flex flex-col gap-2 sm:gap-3 p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label
              className={`${body.className ?? body.variable} flex flex-col text-sm sm:text-base text-white font-semibold`}
            >
              Name: *
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mt-1 px-2 py-1 rounded-md text-white placeholder-white border border-white/50 bg-transparent w-70 focus:outline-none focus:border-dashed focus:border-white"
                required
              />
            </label>

            <label
              className={`${body.className ?? body.variable} flex flex-col text-sm sm:text-base text-white font-semibold`}
            >
              Email: *
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 px-2 py-1 rounded-md text-white placeholder-white border border-white/50 bg-transparent w-70 focus:outline-none focus:border-dashed focus:border-white"
                required
              />
            </label>

            <label
              className={`${body.className ?? body.variable} flex flex-col text-sm sm:text-base text-white font-semibold`}
            >
              Message: * (max 1000 characters)
              <textarea
                name="message"
                placeholder="Your Message"
                className="mt-1 px-2 py-2 rounded-md text-red-900 placeholder-white border border-white/50 bg-transparent h-24 sm:h-32 resize-none w-full focus:outline-none focus:border-dashed focus:border-white"
                maxLength={1000}
                required
              />
            </label>

            <button
              type="submit"
              className={`${body.className ?? body.variable} self-end px-4 py-1 hover:border hover:border-dotted text-white font-bold rounded-md hover:bg-white hover:text-gray-700 transition text-sm sm:text-base`}
            >
              Send →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
