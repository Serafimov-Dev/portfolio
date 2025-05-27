import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => setSent(true),
        () => setError("Грешка при изпращане. Опитайте пак.")
      );
  };

  return (
    <section
      className="relative bg-slate-900 w-full min-h-screen flex flex-col items-center justify-center py-16"
      id="contact"
    >
      <p className="max-w-2xl text-blue-100 text-center mb-8 leading-relaxed text-xl font-light">
        Ако портфолиото ми Ви е заинтригувало, можете да се свържете с мен чрез
        контактната форма или да се чуем по телефон.
      </p>
      <div className="mx-auto max-w-2xl w-full p-6 md:p-12 lg:p-16 bg-white/90 rounded-3xl border border-blue-900/10 shadow-2xl backdrop-blur-md">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 items-center">
              <input
                id="user_name"
                type="text"
                name="user_name"
                required
                placeholder="Вашето име"
                className="px-5 py-3 rounded-2xl border-none bg-blue-50 focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder-blue-800 transition-all shadow-md focus:shadow-xl w-full max-w-xl text-center"
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <input
                id="user_email"
                type="email"
                name="user_email"
                required
                placeholder="Вашият имейл"
                className="px-5 py-3 rounded-2xl border-none bg-blue-50 focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder-blue-800 transition-all shadow-md focus:shadow-xl w-full max-w-xl text-center"
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Вашето съобщение..."
                rows={5}
                className="px-5 py-3 rounded-2xl border-none bg-blue-50 focus:ring-2 focus:ring-blue-400 text-blue-900 placeholder-blue-800 transition-all shadow-md focus:shadow-xl w-full max-w-xl text-center resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl py-3 font-semibold text-lg shadow-lg transition-all duration-200
              hover:bg-blue-800 hover:from-blue-800 hover:to-blue-600
              active:bg-blue-900 active:from-blue-900 active:to-blue-700
              focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Изпрати
          </button>
          {sent && (
            <p className="text-green-600 text-center mt-2">
              Съобщението е изпратено успешно!
            </p>
          )}
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>
        <div className="mt-10 text-center text-blue-900/90">
          <div className="mb-2">
            <span className="font-semibold">Имейл:</span>{" "}
            <a
              href="mailto:serafimov.dev@gmail.com"
              className="font-semibold hover:underline"
            >
              serafimov.dev@gmail.com
            </a>
          </div>
          <div>
            <span className="font-semibold">Телефон:</span>{" "}
            <a
              href="tel:+359888123456"
              className="font-semibold hover:underline"
            >
              0988 30 76 58
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
