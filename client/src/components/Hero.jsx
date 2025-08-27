export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m Your Name 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-6">
        A Full-Stack Developer building clean & modern web apps.
      </p>
      <a
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
      >
        View Projects
      </a>
    </section>
  );
}
