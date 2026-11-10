import 'leaflet/dist/leaflet.css';
import type {PontoColeta} from '../types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import '../css/components/map.css'
interface MapProps {
  pontosColeta: PontoColeta[];
}

function Map({pontosColeta}: MapProps) {
    const centro: [number, number] = pontosColeta.length > 0 ? [pontosColeta[0].latitude, pontosColeta[0].longitude] : [51.505, -0.09];
  return (
    <MapContainer center={centro} zoom={13} scrollWheelZoom={true} className='mapa'>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pontosColeta.map((ponto) => (
        <Marker key={ponto.id} position={[ponto.latitude, ponto.longitude]}>
          <Popup>
            <h3>{ponto.nome}</h3>
            <p>{ponto.endereco}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map;