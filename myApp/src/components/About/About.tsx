import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import {Placemark} from 'react-yandex-maps';

const About = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [43.264165, 76.929910], zoom: 12 }} style={{width: "100%", height: "500px"}}>
        <Placemark 
            geometry={[43.264165, 76.929910]} 
            modules= {
              ['geoObject.addon.balloon', 'geoObject.addon.hint']
             }
            defaultProperties={{
              hintContent: 'Собственный значок метки',
              balloonContent: "mega Нартай убица",
              }} />
      </Map>
    </div>
  </YMaps>

);

export default About