export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Search and organize your<br />
          <span className="text-[#58a6ff]">AI prompt library</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Tag, categorize, and search through your collection of AI prompts with performance metrics and version history. Built for AI engineers and prompt specialists at startups.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-base"
        >
          Get Started — $19/mo
        </a>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Full-Text Search</h3>
            <p className="text-[#8b949e] text-sm">Instantly find any prompt across your entire library with powerful search and filters.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🏷️</div>
            <h3 className="text-white font-semibold mb-1">Tags & Categories</h3>
            <p className="text-[#8b949e] text-sm">Organize prompts with custom tags, categories, and metadata for easy retrieval.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Performance Metrics</h3>
            <p className="text-[#8b949e] text-sm">Track version history and analytics to know which prompts perform best.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-wide">Pro Plan</span>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage your prompt library</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompts & versions',
              'Full-text search & filters',
              'Tags, categories & metadata',
              'Performance metrics & analytics',
              'Version history tracking',
              'Export to JSON / CSV'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-200 text-base"
          >
            Start Free Trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No credit card required for trial.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What is PromptVault?</h3>
            <p className="text-[#8b949e] text-sm">PromptVault is a web app for AI engineers and prompt specialists to store, search, tag, and track the performance of their AI prompts in one organized library.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does version history work?</h3>
            <p className="text-[#8b949e] text-sm">Every time you edit a prompt, a new version is saved automatically. You can compare versions, roll back to any previous version, and see performance metrics per version.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Yes, you can cancel anytime from your account settings. You'll retain access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} PromptVault. All rights reserved.
      </footer>
    </main>
  )
}
