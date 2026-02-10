import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">A</div>
          <span className="font-semibold text-lg">Airbnb Clone</span>
        </div>

        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <a href="#" className="hover:underline">Become a host</a>
          <a href="#" className="hover:underline">Help</a>
          <button className="px-3 py-1 border rounded-full">LOGIN </button>
        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded-md border">Menu</button>
        </div>
      </div>
    </header>
  )
}
