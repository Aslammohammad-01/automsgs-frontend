export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ================= NAVBAR ================= */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-blue-600 font-extrabold text-2xl"
          >
            📷 AutoMsgs
          </a>

          <div className="flex items-center gap-6 text-blue-600 font-semibold">
            <a href="/login" className="hover:underline">Sign In</a>
            <a href="/signup" className="hover:underline">Sign Up</a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Automate Instagram Engagement{" "}
          <span className="text-blue-600 block mt-2">
            Safely & Compliantly
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          AutoMsgs helps creators and businesses manage Instagram interactions
          using official Meta APIs, while respecting platform policies and
          messaging rate limits.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/signup"
            className="rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Platform Features
          </h2>
          <p className="mt-4 text-gray-600">
            Designed for compliant and reliable automation
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Automated Comment Replies",
                desc: "Reply to eligible Instagram comments using approved Meta APIs and user-defined rules.",
                icon: "💬",
              },
              {
                title: "Automated Messaging",
                desc: "Send automated messages based on user interactions, within Meta messaging limits.",
                icon: "✈️",
              },
              {
                title: "Engagement Management",
                desc: "Maintain consistent responses while staying compliant with Instagram policies.",
                icon: "📊",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
              >
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center">
            Why Choose AutoMsgs?
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Built with compliance and reliability in mind
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Policy-Compliant Automation",
                desc: "Built using official Instagram and Meta developer APIs.",
                icon: "🔒",
              },
              {
                title: "Controlled Automation",
                desc: "Automation respects Meta rate limits and messaging guidelines.",
                icon: "⚙️",
              },
              {
                title: "Simple Setup",
                desc: "Connect your Instagram Business account and configure rules easily.",
                icon: "✅",
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8 shadow hover:shadow-lg transition"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Simple Pricing
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white p-8 shadow">
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="mt-2 text-3xl font-bold">₹0</p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Basic automation features</li>
                <li>• Limited monthly usage</li>
                <li>• Community support</li>
              </ul>

              <a
                href="/signup"
                className="mt-8 block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>

            <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                Popular
              </span>

              <h3 className="mt-4 text-xl font-semibold">Premium</h3>
              <p className="mt-2 text-3xl font-bold">₹299</p>

              <ul className="mt-6 space-y-3">
                <li>• Higher automation limits</li>
                <li>• Increased messaging capacity</li>
                <li>• Advanced rule configuration</li>
              </ul>

              <a
                href="/signup"
                className="mt-8 block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-10">
            Messaging features are subject to Meta platform policies and rate limits.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Build Compliant Instagram Automations
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Create automation workflows that follow Meta platform guidelines.
          </p>

          <a
            href="/signup"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100 transition"
          >
            Start Free
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-white font-semibold text-lg">
              📷 AutoMsgs.com
            </div>
            <p className="mt-2 text-sm">
              Instagram automation platform built using official Meta APIs.
            </p>
          </div>

          <div className="flex gap-6 text-sm md:justify-end">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/data-deletion" className="hover:text-white">Data Deletion</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div className="border-t border-gray-800 text-center py-4 text-xs">
          © {new Date().getFullYear()} AutoMsgs.com · Not affiliated with or endorsed
          by Instagram or Meta Platforms, Inc.
        </div>
      </footer>

    </main>
  );
}
