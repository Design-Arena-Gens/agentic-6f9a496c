export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight">How to use it</h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            Follow these quick steps to get started. No setup required.
          </p>
        </header>

        <ol className="space-y-8">
          <li className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-medium">1. Open the app</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Visit the website and explore the interface. Everything is ready to
              use in your browser.
            </p>
          </li>

          <li className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-medium">2. Try an example</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Use the sample command below to verify connectivity.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">{`curl https://agentic-6f9a496c.vercel.app`}</pre>
          </li>

          <li className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-medium">3. Learn the basics</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Fast, responsive UI powered by Next.js and Tailwind CSS.</li>
              <li>Dark mode friendly styles built-in.</li>
              <li>Deployed globally on Vercel for low latency.</li>
            </ul>
          </li>

          <li className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-medium">4. Explore further</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Check the project README for local development commands.
            </p>
          </li>
        </ol>
      </main>
    </div>
  );
}
