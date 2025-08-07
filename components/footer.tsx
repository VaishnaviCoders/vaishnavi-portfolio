export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Vaishnavi Navnath Raykar. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-teal-600 text-sm transition-colors duration-200"
            >
              About
            </a>

            <a
              href="#block-placement"
              className="text-gray-600 hover:text-teal-600 text-sm transition-colors duration-200"
            >
              Block Placement
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-teal-600 text-sm transition-colors duration-200"
            >
              Skills
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
