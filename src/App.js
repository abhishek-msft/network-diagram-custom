import React from "react";
import Arrow, { DIRECTION } from "react-arrows";
import { Rack } from "./Rack";
import { CeDevice } from "./CeDevice";
import "./styles.css";

export default () => <Home />;

// export default () => (
//   <>
//     <svg width="300px" height="175px" version="1.1">
//       <path
//         fill="transparent"
//         stroke="#888888"
//         stroke-width="1"
//         d="M10 80 Q 77.5 10, 145 80 T 280 80"
//         class="path"
//       ></path>
//     </svg>

//     <div class="ball"></div>
//   </>
// );
export const t = () => (
  <>
    <svg width="250" height="250">
      <line
        // d="M 30 10 L 220 150 L 160 200 L 200 230"
        stroke-miterlimit="10"
        fill="none"
        stroke="#3835B9"
        stroke-width="5"
        stroke-dasharray="10"
        stroke-dashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="100;0"
          dur="3s"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </line>
    </svg>
    <svg width="250" height="250">
      <line
        // d="M 30 10 L 220 150 L 160 200 L 200 230"
        stroke-miterlimit="10"
        fill="none"
        stroke="#3835B9"
        stroke-width="5"
        stroke-dasharray="10"
        stroke-dashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="100;0"
          dur="3s"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  </>
);

const aggRackDevices = [
  { name: "TOR17", manufacturer: "Arista", model: 7080, portCount: 32 },
  { name: "TOR18", manufacturer: "Arista", model: 7060, portCount: 32 },
  { name: "MGMT1", manufacturer: "Arista", model: 7080, portCount: 32 },
  { name: "MGMT2", manufacturer: "Arista", model: 7080, portCount: 24 },
  { name: "NPB1", manufacturer: "Arista", model: 7080, portCount: 24 },
  { name: "NPB2", manufacturer: "Arista", model: 7080, portCount: 24 },
];
const compRackDevices = [
  { name: "TOR1", manufacturer: "Arista", model: 7080, portCount: 32 },
  { name: "TOR2", manufacturer: "Arista", model: 7060, portCount: 32 },
  { name: "MGMT1", manufacturer: "Arista", model: 7080, portCount: 24 },
];

const connections = [
  // CE1 Connections
  {
    from: "ce1",
    to: "aggrack",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  {
    from: "ce1",
    to: "comprack1",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  {
    from: "ce1",
    to: "comprack2",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  {
    from: "ce1",
    to: "comprack3",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  // CE2 Connections
  {
    from: "ce2",
    to: "aggrack",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  {
    from: "ce2",
    to: "comprack1",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  {
    from: "ce2",
    to: "comprack2",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  {
    from: "ce2",
    to: "comprack3",
    startDir: DIRECTION.BOTTOM,
    endDir: DIRECTION.TOP,
  },
  //  Rack Connections
  {
    from: "aggrack",
    to: "comprack1",
    startDir: DIRECTION.RIGHT,
    endDir: DIRECTION.LEFT,
  },
  {
    from: "comprack1",
    to: "comprack2",
    startDir: DIRECTION.RIGHT,
    endDir: DIRECTION.LEFT,
  },
  {
    from: "comprack2",
    to: "comprack3",
    startDir: DIRECTION.RIGHT,
    endDir: DIRECTION.LEFT,
  },
  {
    from: "comprack3",
    to: "comprack4",
    startDir: DIRECTION.RIGHT,
    endDir: DIRECTION.LEFT,
  },
];

const racks = [
  { id: "aggrack", name: "Agg Rack", devices: aggRackDevices, left: "20px" },
  {
    id: "comprack1",
    name: "Comp Rack 1",
    devices: compRackDevices,
    left: "220px",
  },
  {
    id: "comprack2",
    name: "Comp Rack 2",
    devices: compRackDevices,
    left: "420px",
  },
  {
    id: "comprack3",
    name: "Comp Rack 3",
    devices: compRackDevices,
    left: "640px",
  },
];

export const Home = () => (
  <>
    <CeDevice
      id="ce1"
      name="CE1"
      style={{
        left: "120px",
        top: "10px",
        height: "71px",
        width: "67px",
        position: "absolute",
        marginTop: "5px",
      }}
    />

    <CeDevice
      id="ce2"
      name="CE2"
      style={{
        left: "320px",
        top: "10px",
        height: "71px",
        width: "67px",
        position: "absolute",
        marginTop: "5px",
      }}
    />

    {racks.map((rack, i) => (
      <Rack
        id={rack.id}
        name={rack.name}
        devices={rack.devices}
        style={{
          left: rack.left,
          top: "200px",
          position: "absolute",
        }}
      />
    ))}

    {/* <Rack
      id="rack1"
      name="Agg Rack"
      devices={aggRackDevices}
      style={{
        left: "30px",
        top: "200px",
        position: "absolute",
      }}
    />
    <Rack
      id="rack2"
      name="Comp Rack 1"
      devices={compRackDevices}
      style={{
        left: "220px",
        top: "200px",
        position: "absolute",
      }}
    />
    <Rack
      id="rack3"
      name="Comp Rack 2"
      devices={compRackDevices}
      style={{
        left: "420px",
        top: "200px",
        position: "absolute",
      }}
    /> */}

    {connections.map((connection, i) => (
      <Arrow
        className="arrow"
        from={{
          direction: connection.startDir,
          node: () => document.getElementById(connection.from),
          translation: [0.2, 0.2],
        }}
        to={{
          direction: connection.endDir,
          node: () => document.getElementById(connection.to),
          translation: [-0.2, -0.2],
        }}
      />
    ))}
  </>
);

export const ArrowSVG = () => {
  return (
    <svg
      // className="h-6 w-6"
      fill="none"
      // viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  );
};
