"use client";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
"https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/russia.geojson";

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
        <Marker coordinates={[37.6173, 55.7558]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="-186" fill="rgb(79, 79, 79)">Москва</text>
        </Marker>

        <Marker coordinates={[30.3351, 59.9343]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="-186" fill="rgb(79, 79, 79)">Санкт-Петербург</text>
        </Marker>

        <Marker coordinates={[64.32968399978266, 55.50240462720649]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="-200" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="-186" fill="rgb(79, 79, 79)">
            <tspan x="8" dy="0">Нижний</tspan>
            <tspan x="8" dy="16">Новгород</tspan>
          </text>
        </Marker>

        <Marker coordinates={[41.9747, 48.0355]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Краснодар</text>
        </Marker>

        <Marker coordinates={[48.0408, 54.3479]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Астрахань</text>
        </Marker>

        <Marker coordinates={[57.8916, 59.2239]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Вологда</text>
        </Marker>

        <Marker coordinates={[78.6178, 58.1931]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Тула</text>
        </Marker>

        <Marker coordinates={[118.5158, 53.5393]}>
          <circle r="8" fill="white" opacity=".8" filter="url(#glow)" />
          <line x1="0" y1="0" x2="0" y2="65" stroke="#d10000" strokeWidth="1" />
          <circle r="4" fill="#d10000" />
          <text x="8" y="60" fill="rgb(79, 79, 79)">Архангельск</text>
        </Marker>
      </g>
    </ComposableMap>
  );
}