import Image from 'next/image'
import Link from 'next/link'
// import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
          <Link href="/">
        <Image
          src="/Logo.png"
          alt="Aideeya Logo"
          width={100}
          height={100}
          
        />
      
    </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium border-b-2 border-black"
            >
              Home
            </Link>
            <Link 
              href="/manifesto" 
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Portfolio
            </Link>
            <Link 
              href="/research" 
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
            {/* <Link 
              href="/careers" 
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              
            </Link> */}
          </div>

          <div>
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

