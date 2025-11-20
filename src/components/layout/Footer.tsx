// Path: src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <div>&copy; {new Date().getFullYear()} Tanzania Film Festival & Awards (TAFFA). All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
