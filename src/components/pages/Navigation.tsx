'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BuyMeCoffeeButton from '../utilities/BuyMeCoffee';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
 
    {
      name: 'NUTRITION GUIDES',
      href: '/',
    },
 
    {
        name: 'TOOLS & RESOURCES',
        href: '/tools',
    },
    {
        name: 'ABOUT',
        href: '/about',
    },
  ];

  const isActive = (path: string) => {
    if (path === '/about') return pathname === '/about';
    if (path === '/tools') return pathname === '/tools';
    if (path === '/') {
      return pathname === '/' || 
             ['/burger-king', '/mcd', '/starbucks', '/dominoes', 
              '/taco-bell', '/pizza-hut', '/kfc', '/generic', '/subway'].some(
               route => pathname.startsWith(route)
             );
    }
    return false;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`px-3 py-2 font-medium transition-colors duration-200 border-b-2 ${
              isActive(link.href)
                ? 'text-pink-500 border-pink-500'
                : 'text-gray-900 hover:text-pink-600 border-transparent'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <BuyMeCoffeeButton />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src="/images/logo.png"
                  className="h-12 object-contain"
                  alt="Better Cheat Days Logo"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'bg-pink-50 text-pink-600'
                        : 'text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <BuyMeCoffeeButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;