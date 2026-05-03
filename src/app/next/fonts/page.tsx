export default function Page() {
  return (
    <main className="space-y-10">
      <h1 className="text-3xl font-bold">Font Optimization</h1>

      <section>
        <h2 className="text-xl font-semibold">Why Font Optimization Matters</h2>
        <p className="text-gray-600 mt-2">
          Loading fonts efficiently makes your site feel faster. Next.js offers built-in font optimization so fonts are downloaded in the best way for performance and user experience.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Using Google Fonts</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use next/font/google to load fonts automatically with optimal performance.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Loading Local Fonts</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`// app/layout.tsx
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: '../fonts/MyFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-myfont',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.variable}>
      <body>{children}</body>
    </html>
  );
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Local fonts can be bundled with your app and loaded efficiently by Next.js.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Applying Fonts in CSS</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="bg-white p-3 rounded font-mono text-sm">
            <pre>{`html {
  font-family: var(--font-inter), sans-serif;
}

h1, h2, h3 {
  font-family: var(--font-myfont), sans-serif;
}`}</pre>
          </div>
          <p className="text-gray-600 text-sm mt-2">Use CSS custom properties to apply optimized fonts throughout your app.</p>
        </div>
      </section>

      <section className="border-l-4 border-black pl-4">
        <h2 className="text-lg font-semibold">Key Takeaway</h2>
        <p className="text-gray-600">
          Next.js makes font optimization easy with built-in font loading for Google and local fonts. Use next/font to load fonts automatically and apply them via CSS variables. This improves performance and ensures text appears quickly without layout shifts.
        </p>
      </section>
    </main>
  );
}