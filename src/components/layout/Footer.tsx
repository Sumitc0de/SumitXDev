
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] py-4 sm:py-10 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs sm:text-sm">
           © {new Date().getFullYear()} Sumit Vishwakarma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}