"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// For social icons, you can install react-icons: npm install react-icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkNeutral text-lightNeutral mt-8">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand and Social Media */}
          <div className="mr-3">
            <Image
              src="/AM_Logo_light.svg"
              alt="Albrecht Marketing"
              width={150}
              height={100}
              className=" h-auto w-250 mb-4"
            />

            <p className="text-gray-300">
              Für Fragen stehen wir zur Verfügung unter:
            </p>
            <p className="text-gray-300 mb-4 font-semibold">
              info@albrecht-marketing.com
            </p>
            <div className="flex space-x-4">
              <Link href="#">
                <FaFacebookF className="text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#">
                <FaTwitter className="text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lösungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Kombipakete
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Webdesign
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Online Werbung
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Content-Creation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Videographie
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Albrecht Marketing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
