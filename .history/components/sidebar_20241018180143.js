// components/Sidebar.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`p-3 text-center fixed top-0 left-0 h-screen w-72 bg-[#23468a] shadow-inner text-white z-10 
          ${isOpen ? 'block' : 'hidden'} md:block`}
      >
        <Image
          src="/Badge.png"
          alt="school badge"
          width={100}
          height={100}
          className="mx-auto"
        />
        <p className="mt-1 text-md font-semibold text-yellow-500" id="name">
          MONTE VISTA PRIMARY SCHOOL
        </p>
        <hr className="w-60 mx-auto" />
        <h4 className="text-lg font-bold">Menu</h4>

        {/* Links */}
        <SidebarLink href="/" icon="bi-house-fill" text="Home" />
        <SidebarLink href="/contact" icon="bi-telephone" text="Contact Us" />
        <SidebarLink href="/academics" icon="bi-vector-pen" text="Academics" />
        <SidebarLink href="/extramural" icon="bi-stopwatch-fill" text="Extra Mural" />
        <SidebarLink href="/fees" icon="bi-coin" text="Fees" />
        <SidebarLink
          href="/prescribedUniform"
          icon="bi-backpack2-fill"
          text="Uniform"
        />
        <SidebarLink
          href="/admisssion2024"
          icon="bi-ticket-perforated-fill"
          text="Admissions"
        />
        <SidebarLink href="/policies" icon="bi-file-earmark-richtext-fill" text="Policies" />
        <SidebarLink
          href="/meetthetime"
          icon="bi-person-circle"
          text="Meet the Team"
        />
        <SidebarLink
          href="https://montevistaprimary.online"
          icon="bi-basket3-fill"
          text="Our Online Store"
          external
        />
      </div>

      {/* Sidebar Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 bg-yellow-500 text-white p-2 rounded"
      >
        ☰
      </button>
    </div>
  );
}

// Helper component for sidebar links
function SidebarLink({ href, icon, text, external = false }) {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel=""
      className="top font-semibold text-md py-3 block"
    >
      <i className={`bi ${icon} me-3`} />
      {text}
    </a>
  ) : (
    <Link href={href} className="top font-semibold text-md py-3 block">
      <i className={`bi ${icon} me-3`} />
      {text}
    </Link>
  );
}
