export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Internationalization (i18n)</h1>

      <section>
        <h2 className="text-xl font-semibold">What is Internationalization?</h2>
        <p className="text-gray-600 mt-2">
          Internationalization, or i18n, means making your site usable in multiple languages and regions. Next.js helps manage localized content and language-aware routing.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Locale-aware Routes</h2>
        <p className="text-gray-600 mt-2">
          Next.js can generate routes for each locale, such as `/en` and `/fr`, so users see content in their preferred language.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Simple Locale Switcher</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>
              {`const locales = ['en', 'fr'];
                export default function LocaleSwitcher() {
                  return (
                    <div>
                      {locales.map((locale) => (
                        <a key={locale} href={"/" + locale} className="mr-3">
                              {locale.toUpperCase()}
                            </a>
                      ))}
                          </div>
                          );
                }`}
              </pre>
      </div>
      <p className="text-gray-600 text-sm mt-2">Build a simple locale switcher to route users to the correct language version.</p>
    </div>
      </section >

      <section>
        <h2 className="text-xl font-semibold">Translation Data</h2>
        <p className="text-gray-600 mt-2">
          Store translated text in JSON files or a translation service, then load the correct values based on the active locale.
        </p>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Internationalization makes your site accessible to a global audience. Use locale-aware routes and translation data to serve content in multiple languages, and keep locale-switching simple for users.
        </p>
      </section>
    </main >
  );
}