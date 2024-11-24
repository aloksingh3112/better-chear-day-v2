'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BuyMeCoffeeButton from '../utilities/BuyMeCoffee';

const Navigation = () => {
  const pathname = usePathname();

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
    // For About page
    if (path === '/about') return pathname === '/about';
    
    // For Tools page
    if (path === '/tools') return pathname === '/tools';
    
    // For Nutrition Guides (home and restaurant pages)
    if (path === '/') {
      // Active for home page and all restaurant-specific pages
      return pathname === '/' || 
             ['/burger-king', '/mcd', '/starbucks', '/dominoes', 
              '/taco-bell', '/pizza-hut', '/kfc', '/generic', '/subway'].some(
               route => pathname.startsWith(route)
             );
    }
    
    return false;
  };

  return (
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
  );
};

export default Navigation;