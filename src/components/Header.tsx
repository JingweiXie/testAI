import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-background/80 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Portfolio
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-purple-400 transition-colors">关于</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">项目</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">联系方式</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
