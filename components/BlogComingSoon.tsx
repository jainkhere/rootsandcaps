import Link from "next/link";

export function BlogComingSoon() {
  return (
    <main className="flex min-h-[calc(100vh-145px)] items-center justify-center px-4 py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800 dark:text-sky-300">
          Coming soon
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Our blog is on the way
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          We are preparing helpful dental care tips, treatment guides, and clinic updates.
          Please check back soon.
        </p>
        <Link
          href="/"
          className="tap-highlight mt-8 inline-flex items-center justify-center rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow transition duration-150 hover:bg-blue-900 active:scale-[0.97] dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
