import React from 'react'

import { Link } from 'react-router-dom'
import mapMarkerImg from '../images/map-mark.png'
import { FiPlus } from 'react-icons/fi'

import { MapContainer , TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphaMaps.css'

function OrphaMaps(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :) </p>
        </header>

        <footer>
          <strong>Timóteo</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>
   
      <MapContainer
      center={[-19.5577472,-42.7043629]}
      zoom={15}
      style={ { width: '100%', height: '100%' } }
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphaMaps;