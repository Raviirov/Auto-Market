"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
"https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/russia.geojson";

function roundCoord(num) {
  return Number(num.toFixed(10));
}

export default function RussiaMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 240,
        center: [100, 69]
      }}
      width={800}
      height={487}
      style={{ width: "800px" }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#E1E1E1"
              stroke="#ffffff"
              strokeWidth={0.7}
              style={{
                default: { outline: "none" },
                hover: {
                  fill: "#cdcdcd",
                  outline: "none"
                },
                pressed: {
                  fill: "#bababa",
                  outline: "none"
                }
              }}
            />
          ))
        }
      </Geographies>

      <g className="markers">
        <Marker coordinates={[roundCoord(37.6173), roundCoord(55.7558)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="-186" fill="rgb(79, 79, 79)">Москва</text>
        </Marker>

        <Marker coordinates={[roundCoord(30.3352), roundCoord(59.9340)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="-186" fill="rgb(79, 79, 79)">Санкт-Петербург</text>
        </Marker>

        <Marker coordinates={[roundCoord(64.3296), roundCoord(55.5024)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="-186" fill="rgb(79, 79, 79)">
            <tspan x="8" dy="0">Нижний</tspan>
            <tspan x="8" dy="16">Новгород</tspan>
          </text>
        </Marker>

        <Marker coordinates={[roundCoord(41.9747), roundCoord(48.0355)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Краснодар</text>
        </Marker>

        <Marker coordinates={[roundCoord(48.0408), roundCoord(54.3479)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Астрахань</text>
        </Marker>

        <Marker coordinates={[roundCoord(57.8916), roundCoord(59.2239)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Вологда</text>
        </Marker>

        <Marker coordinates={[roundCoord(78.6178), roundCoord(58.1931)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Тула</text>
        </Marker>

        <Marker coordinates={[roundCoord(118.5158), roundCoord(53.5393)]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Архангельск</text>
        </Marker>
      </g>
    </ComposableMap>
  );
}