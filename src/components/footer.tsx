const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-6 py-6 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-white text-sm font-extrabold tracking-widest uppercase">
            Authentication
          </span>
        </div>
        <p className="text-gray-500 text-xs">
          © 2026 Authentication. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;