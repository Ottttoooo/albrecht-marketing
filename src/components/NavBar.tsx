'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lightNeutral py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/AM_Logo.svg"
                alt="Albrecht Marketing"
                width={150}
                height={100}
                className="cursor-pointer h-auto w-250"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/">
              <span className="text-darkNeutral hover:text-darkNeutral cursor-pointer">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Dienstleistungen</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" 
                     viewBox="0 0 24 24" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" 
                     viewBox="0 0 24 24" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <span onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/services">
              <span onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                Services
              </span>
            </Link>
            <Link href="/about">
              <span onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
