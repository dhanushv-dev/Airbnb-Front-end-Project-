import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function MapView({items=[]}){
  const center = items.length ? [items[0].lat, items[0].lng] : [39.5, -98.35]
  return (
    <MapContainer center={center} zoom={4} scrollWheelZoom={false} style={{height: '100%', width: '100%'}}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(it => (
        <Marker key={it.id} position={[it.lat, it.lng]}>
          <Popup>
            <strong>{it.title}</strong><br />{it.location}<br />{it.price}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
