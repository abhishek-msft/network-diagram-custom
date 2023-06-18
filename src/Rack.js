import React from "react";

export function Rack({ id, name, devices, style }) {
  return (
    <div id={id} style={style}>
      <div
        style={{
          border: "1px solid #00bcf2",
          borderRadius: "5px",
          width: "120px",
          cursor: "pointer",
          padding: "2px",
          ":hover": {
            border: "2px dotted blue!important",
          },
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #00bcf2",
            marginBottom: "3px",
            padding: "1px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {name}
        </div>
        {devices.map((device, i) => (
          <Device
            id={id + "_device_" + i}
            device={device}
            style={{ width: "70px", height: "30px" }}
          />
        ))}
      </div>
      {/* this has one rack image svg */}
      {/* <svg height="100%" width="100%">
        <path
          d="m -159.97731,521.06942 c -0.48496,-0.19345 -1.07832,-0.7881 -1.38885,-1.39185 -0.25489,-0.49558 -0.26361,-0.85105 -0.22775,-9.27993 l 0.0373,-8.76462 0.38649,-0.58394 c 0.26761,-0.40431 0.60558,-0.68595 1.09865,-0.91552 l 0.71214,-0.33157 31.87453,-10e-4 c 23.46641,-9.6e-4 31.997669,0.0399 32.341349,0.15495 0.70158,0.2349 1.32942,0.75707 1.63833,1.36259 0.26962,0.52849 0.27543,0.75638 0.23906,9.375 l -0.0373,8.83335 -0.33094,0.48289 c -0.18202,0.26559 -0.54828,0.63182 -0.81391,0.81384 l -0.48297,0.33097 -32.351419,0.0261 c -21.24871,0.0171 -32.46924,-0.0209 -32.69474,-0.11087 z m 5.22268,-2.90215 c 1.05919,-0.53509 1.56368,-1.65888 1.23588,-2.753 -0.33082,-1.10417 -1.56485,-1.87642 -2.66781,-1.66951 -2.28094,0.42791 -2.67756,3.51581 -0.57428,4.47108 0.74314,0.33751 1.26707,0.32483 2.00621,-0.0486 z m 56.909579,-0.86813 c 0.30974,-0.30973 0.26657,-0.83171 -0.0894,-1.08104 -0.26647,-0.18665 -1.1865,-0.21379 -7.247959,-0.21379 -7.54987,0 -7.55318,2.8e-4 -7.55318,0.75532 0,0.7558 -0.005,0.75532 7.64259,0.75532 6.209759,0 7.057399,-0.0252 7.247959,-0.21581 z m 0.051,-2.6956 c 0.0906,-0.0906 0.1648,-0.32547 0.1648,-0.52185 0,-0.19639 -0.0742,-0.43122 -0.1648,-0.52186 -0.21711,-0.21711 -14.272049,-0.23879 -14.675929,-0.0226 -0.30106,0.16113 -0.36196,0.80522 -0.10083,1.06635 0.12399,0.124 1.95314,0.1648 7.38838,0.1648 5.435239,0 7.264379,-0.0408 7.388379,-0.1648 z m -0.10083,-2.58664 c 0.30106,-0.16113 0.36196,-0.80522 0.10083,-1.06635 -0.124,-0.124 -1.95314,-0.1648 -7.388379,-0.1648 -5.43524,0 -7.26439,0.0408 -7.38838,0.1648 -0.2311,0.23109 -0.20512,0.73657 0.051,0.9927 0.1906,0.1906 1.0418,0.21581 7.28755,0.21581 4.61211,0 7.164129,-0.0495 7.337379,-0.14216 z m -62.151109,-15.32925 c -0.63786,-0.33701 -1.04296,-0.75188 -1.31974,-1.35159 -0.23792,-0.5155 -0.25353,-1.07772 -0.25353,-9.13248 0,-8.05476 0.0156,-8.61698 0.25353,-9.13248 0.30683,-0.66481 0.74159,-1.08321 1.4202,-1.36675 0.45422,-0.18978 3.93703,-0.21255 32.51555,-0.21255 28.578519,0 32.061329,0.0228 32.515549,0.21255 0.64905,0.27119 1.0882,0.68294 1.4214,1.33271 0.25389,0.4951 0.26278,0.86174 0.22696,9.36282 -0.0366,8.69628 -0.0421,8.85403 -0.32081,9.22724 -0.15595,0.20883 -0.51703,0.56867 -0.8024,0.79964 l -0.51884,0.41994 -32.362939,0.0293 c -29.30986,0.0265 -32.4018,0.009 -32.77493,-0.18836 z m 5.49276,-2.91947 c 1.2887,-0.72734 1.50484,-2.58576 0.42619,-3.66441 -1.49649,-1.49649 -3.98651,-0.45857 -3.98651,1.6617 0,1.85246 1.91648,2.9305 3.56032,2.00271 z m 56.759179,-0.86287 c 0.2311,-0.23109 0.20512,-0.73657 -0.051,-0.9927 -0.19056,-0.19057 -1.0382,-0.21581 -7.247959,-0.21581 -6.14238,0 -7.07077,0.027 -7.33737,0.21379 -0.33206,0.23258 -0.40263,0.73252 -0.14042,0.99472 0.12399,0.124 1.95314,0.1648 7.38838,0.1648 5.435239,0 7.264379,-0.0408 7.388379,-0.1648 z m 0,-2.60928 c 0.0906,-0.0906 0.1648,-0.32547 0.1648,-0.52185 0,-0.19639 -0.0742,-0.43122 -0.1648,-0.52186 -0.124,-0.124 -1.95314,-0.1648 -7.388379,-0.1648 -5.43524,0 -7.26439,0.0408 -7.38838,0.1648 -0.0906,0.0906 -0.1648,0.32547 -0.1648,0.52186 0,0.19638 0.0742,0.43121 0.1648,0.52185 0.12399,0.124 1.95314,0.1648 7.38838,0.1648 5.435239,0 7.264379,-0.0408 7.388379,-0.1648 z m 0.0304,-2.71914 c 0.22246,-0.35208 0.14776,-0.79903 -0.17085,-1.02219 -0.26647,-0.18665 -1.1865,-0.21379 -7.247959,-0.21379 -6.06146,0 -6.98149,0.0271 -7.24796,0.21379 -0.39476,0.27649 -0.39291,0.80771 0.004,1.08624 0.27368,0.19216 1.12177,0.21266 7.42092,0.17945 6.144519,-0.0324 7.129629,-0.0655 7.242079,-0.2435 z M -160.04602,472.3483 c -0.66481,-0.30684 -1.08321,-0.74159 -1.36675,-1.42021 -0.18424,-0.44095 -0.21215,-1.64784 -0.20953,-9.06194 0.003,-8.02199 0.0188,-8.58735 0.25654,-9.10256 0.30683,-0.66481 0.74159,-1.08321 1.4202,-1.36675 0.45422,-0.18978 3.93703,-0.21255 32.51555,-0.21255 28.578519,0 32.061329,0.0228 32.515549,0.21255 0.64905,0.27119 1.0882,0.68294 1.4214,1.33271 0.25389,0.4951 0.26278,0.8617 0.22696,9.36014 l -0.0373,8.84485 -0.41995,0.52767 c -0.23097,0.29021 -0.69211,0.66671 -1.02475,0.83665 l -0.60479,0.309 -32.071919,-0.003 c -30.88738,-0.003 -32.09221,-0.0124 -32.62124,-0.25654 z m 5.6581,-3.02238 c 0.57751,-0.41834 1.00483,-1.23288 0.99942,-1.90507 -0.005,-0.56076 -0.45104,-1.43761 -0.9428,-1.8514 -1.08426,-0.91234 -2.86167,-0.5298 -3.54341,0.76263 -0.36252,0.68725 -0.30961,1.74053 0.12005,2.38977 0.45891,0.69347 1.07717,0.99499 2.04828,0.99894 0.63347,0.003 0.86591,-0.067 1.31846,-0.39487 z m 56.593839,-0.72812 c 0.26113,-0.26113 0.20023,-0.90522 -0.10083,-1.06634 -0.17325,-0.0927 -2.725269,-0.14216 -7.337379,-0.14216 -6.24575,0 -7.09695,0.0252 -7.28755,0.2158 -0.25612,0.25613 -0.2821,0.76161 -0.051,0.9927 0.23767,0.23767 14.539089,0.23767 14.776759,0 z m -0.10083,-2.58664 c 0.30106,-0.16112 0.36196,-0.80522 0.10083,-1.06635 -0.23767,-0.23767 -14.539089,-0.23767 -14.776759,0 -0.2311,0.23109 -0.20512,0.73658 0.051,0.99271 0.1906,0.19059 1.0418,0.2158 7.28755,0.2158 4.61211,0 7.164129,-0.0495 7.337379,-0.14216 z m 0.10083,-2.76925 c 0.2311,-0.23109 0.20512,-0.73657 -0.051,-0.9927 -0.19056,-0.19057 -1.0382,-0.21581 -7.247959,-0.21581 -6.14238,0 -7.07077,0.0271 -7.33737,0.21379 -0.33206,0.23258 -0.40263,0.73252 -0.14042,0.99472 0.23767,0.23767 14.539089,0.23767 14.776759,0 z"
          fill="#00bcf2"
          transform="translate(161.622 -451.184)"
        />
      </svg> */}
    </div>
  );
}

function Device({ id, device, style }) {
  return (
    <div id={id} style={{ position: "relative" }}>
      <svg viewBox="167.542 34.685 68.372 21.424">
        <path
          class="path"
          d="M 231.37 46.743 C 231.601 46.512 231.575 46.006 231.319 45.75 C 231.128 45.56 230.281 45.535 224.071 45.535 C 217.928 45.535 217 45.562 216.733 45.748 C 216.401 45.981 216.331 46.481 216.593 46.743 C 216.831 46.981 231.132 46.981 231.37 46.743 Z M 231.269 49.512 C 231.57 49.351 231.631 48.707 231.37 48.446 C 231.132 48.208 216.831 48.208 216.593 48.446 C 216.362 48.677 216.388 49.183 216.644 49.439 C 216.835 49.629 217.686 49.654 223.932 49.654 C 228.544 49.654 231.096 49.605 231.269 49.512 Z M 231.37 52.099 C 231.631 51.838 231.57 51.194 231.269 51.033 C 231.096 50.94 228.544 50.89 223.932 50.89 C 217.686 50.89 216.835 50.916 216.644 51.106 C 216.388 51.362 216.362 51.868 216.593 52.099 C 216.831 52.337 231.132 52.337 231.37 52.099 Z M 174.776 52.827 C 175.353 52.409 175.781 51.594 175.775 50.922 C 175.77 50.361 175.324 49.484 174.833 49.071 C 173.748 48.158 171.971 48.541 171.289 49.833 C 170.927 50.52 170.979 51.574 171.409 52.223 C 171.868 52.916 172.486 53.218 173.457 53.222 C 174.091 53.225 174.323 53.155 174.776 52.827 Z M 169.118 55.849 C 168.453 55.543 168.035 55.108 167.751 54.429 C 167.567 53.988 167.539 52.781 167.542 45.367 C 167.545 37.345 167.56 36.78 167.798 36.265 C 168.105 35.6 168.54 35.182 169.218 34.898 C 169.672 34.708 173.155 34.685 201.734 34.685 C 230.312 34.685 233.795 34.708 234.249 34.898 C 234.898 35.169 235.338 35.581 235.671 36.231 C 235.925 36.726 235.934 37.092 235.898 45.591 L 235.86 54.436 L 235.44 54.963 C 235.209 55.254 234.748 55.63 234.416 55.8 L 233.811 56.109 L 201.739 56.106 C 170.852 56.103 169.647 56.094 169.118 55.849 Z"
          fill="#00bcf2"
        />
        <text x="170" y="40" fontSize="5" fontWeight={"bold"} fill="white">
          {device.name}
        </text>
        <text x="200" y="40" fontSize="5" fill="white">
          {device.manufacturer + "-" + device.model}
        </text>
        <text x="177" y="52.5" fontSize="5" fill="white">
          {device.portCount} ports
        </text>
      </svg>
    </div>
  );
}
