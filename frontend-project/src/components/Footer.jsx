import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-black border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white">
        © {new Date().getFullYear()} Dream it, Do it - Explore and Make Memories with our Stays
      </div>
    </footer>
  )
}
