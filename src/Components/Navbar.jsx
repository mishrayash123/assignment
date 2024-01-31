

const Navbar = () => {


  return (
    <div className="fixed-top">
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
                <a
                  href="/"
                  className="text-center font-bold text-3xl"
                >
                Assignment
                </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
