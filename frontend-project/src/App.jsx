import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MapView from './components/MapView'
import staysData from './data/stays'

export default function App(){
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(staysData)
  const [favorites, setFavorites] = useState(() => {
    try{ const raw = localStorage.getItem('favorites'); return raw ? JSON.parse(raw) : [] }catch(e){return []}
  })

  useEffect(() => {
    const q = query.trim().toLowerCase()
    if(!q){ setFiltered(staysData); return }
    setFiltered(staysData.filter(s => (s.title + ' ' + s.location).toLowerCase().includes(q)))
  }, [query])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const favSet = useMemo(() => new Set(favorites), [favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <section className="rounded-xl bg-gradient-to-r from-pink-50 to-white p-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">Find your next stay</h1>
            <p className="text-gray-600 mb-4">Search unique places to stay and Do some Adventure.</p>
            <form onSubmit={(e)=>e.preventDefault()} className="bg-white border rounded-full shadow-sm p-3 flex items-center space-x-3 max-w-2xl">
              <input value={query} onChange={e=>setQuery(e.target.value)} className="flex-1 outline-none px-2" placeholder="Where is your next Trip? Try 'Kashmir’ or 'Varkala' " />
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-full">Search</button>
            </form>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map(s => (
                  <article key={s.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
                    <img src={s.image} alt={s.title} className="h-40 w-full object-cover rounded-md mb-3" />
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-gray-500">{s.location}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-medium">{s.price}</span>
                      <div className="flex items-center gap-2">
                        <button onClick={()=>toggleFavorite(s.id)} className="text-sm px-3 py-1 border rounded-full">
                          {favSet.has(s.id) ? 'Unfavorite' : 'Favorite'}
                        </button>
                        <button className="text-sm underline">View</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hidden lg:block">
              <h3 className="font-semibold mb-3">Map</h3>
              <div className="h-96 rounded-lg overflow-hidden shadow">
                <MapView items={filtered} />
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Favorites</h4>
                {favorites.length===0 ? <p className="text-sm text-gray-500">No favorites yet.</p> : (
                  <ul className="text-sm space-y-1">
                    {favorites.map(id => {
                      const s = staysData.find(x=>x.id===id)
                      return s ? <li key={id}>{s.title} — <span className="text-gray-500">{s.location}</span></li> : null
                    })}
                  </ul>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
