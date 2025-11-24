'use client';

import Image from 'next/image';
import { useState } from 'react';
import { body, display } from '../lib/fonts';
import Toast from './Toast';

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);
  const handleToastClose = () => setShowToast(false);

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
      setShowToast(true);

      setTimeout(() => setShowToast(false), 4000);
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <>
      <Toast show={showToast} onClose={handleToastClose} />

      <section className="w-full min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-20 py-20">
        <div className="relative p-1 rounded-lg border-4 border-dashed border-sage">
          <div className="relative flex flex-col md:flex-row w-full max-w-6xl rounded-lg shadow-lg border-2 border-dashed border-sage sm:p-8">
            {/* Stamp */}
            <div className="absolute top-4 right-4 md:w-20 md:h-20">
              <Image
                src="/images/stamp.png"
                alt="Stamp"
                width={70}
                height={90}
                className="object-contain border-sage border-[6px]"
                priority
              />
            </div>

            {/* LEFT */}
            <div className="md:w-1/2 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-sage/50 p-4 sm:p-6">
              <h2
                className={`${display.className ?? display.variable} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-royal font-extrabold mb-4 leading-[1.05]`}
              >
                CONTACT <br /> ME
              </h2>

              <p
                className={`${body.className ?? body.variable} text-foreground text-base sm:text-lg mb-3`}
              >
                I’m open for web development, collaborations, and UX/UI design. You’re
                welcome to reach out anytime.
              </p>

              <p
                className={`${body.className ?? body.variable} text-foreground text-base sm:text-lg mb-2`}
              >
                Email: <strong className="text-royal">sana.khuram.baig@gmail.com</strong>
              </p>
              <p
                className={`${body.className ?? body.variable} text-foreground text-base sm:text-lg`}
              >
                Phone: <strong className="text-royal">+47 40140362</strong>
              </p>
            </div>

            {/* RIGHT — FORM */}
            <div className="md:w-1/2 flex flex-col gap-3 p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label
                  className={`${body.className ?? body.variable} flex flex-col text-sm sm:text-base text-royal`}
                >
                  Name: *
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="mt-1 px-2 py-1 rounded-md w-70 border border-sage/60 bg-transparent focus:border-royal focus:border-dashed"
                    required
                  />
                </label>

                <label
                  className={`${body.className ?? body.variable} flex flex-col text-sm sm:text-base text-royal`}
                >
                  Email: *
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="mt-1 px-2 py-1 rounded-md border border-sage/60 bg-transparent focus:border-royal focus:border-dashed"
                    required
                  />
                </label>

                <label
                  className={`${body.className ?? body.variable} flex flex-col text-sm sm:text-base text-royal`}
                >
                  Message: * (max 1000 characters)
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="mt-1 px-2 py-2 rounded-md border border-sage/60 bg-transparent h-32 resize-none focus:border-royal focus:border-dashed"
                    maxLength={1000}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className={`${body.className ?? body.variable} self-end px-4 py-1 font-bold text-royal rounded-md hover:bg-royal hover:text-linen border border-transparent hover:border-dotted transition`}
                >
                  Send →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
