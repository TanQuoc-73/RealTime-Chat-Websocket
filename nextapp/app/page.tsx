import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[60px_1fr_60px] gap-8 p-8 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Section */}
      <main className="flex flex-col items-center sm:items-start justify-center gap-8 max-w-4xl mx-auto">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight max-w-xl text-center sm:text-left">
          Ứng dụng Chat Realtime hiện đại với Next.js &amp; Tailwind CSS
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-center sm:text-left text-lg">
          Bắt đầu cuộc trò chuyện dễ dàng và gọi điện video trực tiếp mượt mà, tận hưởng trải nghiệm realtime chuyên nghiệp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <a
            href="#"
            className="flex justify-center items-center rounded-full bg-indigo-600 text-white py-3 px-5 text-lg font-semibold hover:bg-indigo-700 transition"
          >
            Bắt đầu Chat
          </a>
          <a
            href="#"
            className="flex justify-center items-center rounded-full border border-indigo-600 text-indigo-600 py-3 px-5 text-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </main>

    </div>
  );
}
