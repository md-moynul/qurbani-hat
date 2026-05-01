import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-300 flex flex-col items-center justify-center font-sans px-6 py-12 text-center">
      <h1 className="text-[120px] md:text-[140px] font-black text-[#2d7a2d] leading-none tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1a5c1a] mt-4 mb-3">
        Page Not Found
      </h2>
      <p className="text-[#5a8a5a] text-lg max-w-md mx-auto mb-10">
        This page has wandered off. Let&apos;s get you back.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-[#2d7a2d] hover:bg-[#246124] transition-colors text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] shadow-sm"
        >
          Go Home
        </Link>
        <Link
          href="/animals"
          className=" hover:bg-gray-50 border-2 border-[#2d7a2d] text-[#2d7a2d] px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-colors"
        >
          Browse Animals
        </Link>
      </div>
    </div>
  );
}