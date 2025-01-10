import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="w-full bg-white/80 border-t border-gray-200">
      {/* Divider */}
      <div className="w-full border-t border-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo Section */}
          <Link href="/">
        <Image
          src="/Logo.png"
          alt="Aideeya Logo"
          width={100}
          height={100}
          
        />
      
    </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>

          {/* Footer Text */}
          <p className="text-sm text-gray-500">&copy; 2024 Aideeya Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
