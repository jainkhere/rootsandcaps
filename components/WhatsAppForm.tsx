"use client";

type Props = {
  whatsappDigits: string;
};

export function WhatsAppForm({ whatsappDigits }: Props) {
  return (
    <form
      className="mt-4 space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const first = String(fd.get("first") || "").trim();
        const last = String(fd.get("last") || "").trim();
        const phone = String(fd.get("phone") || "").trim();
        const text = `Hello, I'd like to get in touch.\nName: ${first} ${last}\nPhone: ${phone}`;
        const url = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank", "noopener,noreferrer");
      }}
    >
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
        First name
        <input
          name="first"
          required
          autoComplete="given-name"
          className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:ring-sky-900"
        />
      </label>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
        Last name
        <input
          name="last"
          required
          autoComplete="family-name"
          className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:ring-sky-900"
        />
      </label>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
        Phone
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:ring-sky-900"
        />
      </label>
      <button
        type="submit"
        className="tap-highlight w-full rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow transition duration-150 hover:bg-emerald-800 active:scale-[0.98] active:brightness-95 motion-reduce:active:scale-100"
      >
        Submit via WhatsApp
      </button>
    </form>
  );
}
