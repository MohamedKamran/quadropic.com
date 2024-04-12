"use client";
import IndiaLogo from "./logo/india.logo";
import { IoMdGlobe } from "react-icons/io";

export function Footer() {
  return (
    <footer className="text-gray-500 bg-black px-4 py-5 max-w-screen-xl mx-auto md:px-8 dark:text-gray-400">
      <div className="max-w-lg sm:mx-auto text-center self-center">
        <svg
          className="w-32 h-10 self-center"
          width="1793"
          height="505"
          viewBox="0 0 1793 505"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M172.292 5.97421C184.257 -1.94009 199.779 -1.99528 211.8 5.83372L370.647 109.288C380.848 115.931 387 127.28 387 139.454V378.913C387 391.903 380.002 403.886 368.688 410.268L355.999 417.426C355.997 417.427 355.996 417.431 355.997 417.434C355.999 417.436 355.998 417.44 355.995 417.441L329.561 432.367C324.975 434.957 322.868 440.433 324.536 445.428L334.397 474.973C339.153 489.22 328.549 503.938 313.529 503.938L292.731 503.938C283.495 503.938 275.242 498.169 272.07 489.495L269.045 481.225C266.713 474.849 259.218 472.087 253.306 475.425L240.029 482.922C240.013 482.931 239.993 482.925 239.985 482.908C239.982 482.901 239.975 482.895 239.968 482.892C239.96 482.889 239.95 482.89 239.942 482.894L209.825 499.883C198.772 506.118 185.253 506.073 174.242 499.764L18.1039 410.31C16.0122 409.112 14.0702 407.722 12.295 406.169C3.83465 398.767 10.3839 386.747 21.2537 383.884L51.1967 375.994C55.1277 374.959 59.2298 376.292 62.4899 378.72C63.3489 379.36 64.2406 379.965 65.1635 380.531L172.839 446.643C184.319 453.692 198.773 453.742 210.3 446.772L213.591 444.783C215.086 443.879 216 442.259 216 440.512V437.516C216 434.946 213.192 433.362 210.992 434.692C199.464 441.661 185.01 441.611 173.531 434.563L74.8256 373.959C64.1611 367.411 57.6622 355.794 57.6622 343.28V171.726C57.6622 160.054 63.3208 149.107 72.8428 142.357L171.563 72.3757C183.956 63.5904 200.53 63.53 212.987 72.2246C214.257 73.1112 216 72.2023 216 70.6533V63.6112C216 61.9773 215.202 60.4464 213.862 59.5112L212.296 58.418C199.839 49.7234 183.265 49.7839 170.872 58.5691L63.1806 134.909C53.6586 141.659 48 152.607 48 164.279V349.853C48 350.679 48.0283 351.502 48.0844 352.319C48.5523 359.147 45.2518 366.561 38.6339 368.304L25.0956 371.871C12.4125 375.213 0 365.647 0 352.531V139.289C0 127.206 6.06151 115.929 16.1392 109.263L172.292 5.97421ZM348.067 403.483C348.049 403.493 348.028 403.487 348.018 403.469C348.008 403.452 347.986 403.446 347.969 403.456L328.089 414.692C322.066 418.097 314.433 415.162 312.242 408.599L301.371 376.03C298.206 366.548 289.046 360.392 279.071 361.042L265.551 361.924C256.234 362.532 248.315 368.954 245.798 377.946L241.412 393.61C240.169 398.05 240.352 402.768 241.935 407.098L255.79 444.982C257.639 450.038 255.558 455.688 250.872 458.337L237.887 465.676C237.616 465.802 237.347 465.94 237.081 466.09L209.085 481.883C198.032 488.118 184.512 488.073 173.501 481.764L92.5144 435.366C90.9593 434.475 90 432.82 90 431.027V428.06C90 424.219 94.1523 421.812 97.4856 423.722L174.36 467.764C185.371 474.073 198.89 474.118 209.943 467.883L238.708 451.657C243.672 448.857 245.982 442.95 244.233 437.525L237.92 417.931C234.12 406.137 220.457 400.795 209.665 406.883C198.612 413.118 185.093 413.073 174.081 406.764L91.104 359.225C79.907 352.81 73 340.893 73 327.989V194.896C73 182.813 79.0615 171.536 89.1392 164.87L172.132 109.974C184.097 102.06 199.618 102.005 211.639 109.834L296.183 164.895C306.383 171.539 312.536 182.888 312.536 195.061V327.828C312.536 332.686 311.557 337.402 309.74 341.738C306.383 349.75 303.748 358.731 306.795 366.867L316.216 392.026C318.799 398.925 326.933 401.889 333.35 398.269L343.535 392.524C354.849 386.142 361.847 374.159 361.847 361.169V157.996C361.847 145.822 355.695 134.473 345.494 127.829L211.918 40.8337C199.897 33.0047 184.375 33.0599 172.41 40.9742L97.7585 90.3533C94.4345 92.552 90 90.1684 90 86.1831V81.6047C90 79.9265 90.8419 78.3603 92.2416 77.4345L171.551 24.9742C183.516 17.0599 199.038 17.0047 211.059 24.8337L355.95 119.199C366.151 125.843 372.304 137.192 372.304 149.365V368.786C372.304 381.776 365.305 393.759 353.991 400.141L348.067 403.483Z"
            fill="white"
          />
          <path
            d="M624.056 254.32C624.056 286.8 635.269 303.04 657.696 303.04C680.123 303.04 691.336 286.8 691.336 254.32C691.336 221.84 680.123 205.6 657.696 205.6C635.269 205.6 624.056 221.84 624.056 254.32ZM707.808 325.544C724.821 334.36 739.051 346.733 750.496 362.664C752.197 365.139 752.275 367.613 750.728 370.088C749.336 372.563 747.171 373.8 744.232 373.8H721.96C713.453 373.8 706.88 369.933 702.24 362.2C696.672 352.92 691.181 347.12 685.768 344.8C680.509 342.48 671.152 341.32 657.696 341.32C632.64 341.32 612.843 333.587 598.304 318.12C583.765 302.653 576.496 281.387 576.496 254.32C576.496 227.253 583.765 205.987 598.304 190.52C612.843 175.053 632.64 167.32 657.696 167.32C682.752 167.32 702.549 175.053 717.088 190.52C731.627 205.987 738.896 227.253 738.896 254.32C738.896 284.944 728.533 308.376 707.808 324.616C707.653 324.616 707.576 324.771 707.576 325.08C707.576 325.389 707.653 325.544 707.808 325.544ZM865.244 218.36C868.801 218.36 871.894 219.675 874.524 222.304C877.153 224.933 878.468 228.027 878.468 231.584V325.776C878.468 329.333 877.153 332.427 874.524 335.056C871.894 337.685 868.801 339 865.244 339H849.468C845.756 339 842.585 337.763 839.956 335.288C837.326 332.659 835.934 329.488 835.78 325.776V323.92C835.78 323.765 835.702 323.688 835.548 323.688C835.238 323.688 835.084 323.765 835.084 323.92C825.494 335.52 813.662 341.32 799.588 341.32C785.977 341.32 776.156 337.531 770.124 329.952C764.246 322.373 761.308 309.149 761.308 290.28V231.584C761.308 228.027 762.622 224.933 765.252 222.304C767.881 219.675 770.974 218.36 774.532 218.36H791.004C794.561 218.36 797.654 219.675 800.284 222.304C802.913 224.933 804.228 228.027 804.228 231.584V287.96C804.228 295.075 805.156 299.947 807.012 302.576C809.022 305.205 812.348 306.52 816.988 306.52C821.318 306.52 825.262 304.819 828.82 301.416C832.532 298.013 834.388 294.301 834.388 290.28V231.584C834.388 228.027 835.702 224.933 838.332 222.304C840.961 219.675 844.054 218.36 847.612 218.36H865.244ZM973.814 290.28V288.888C973.814 287.496 973.118 286.8 971.726 286.8H964.534C949.067 286.8 941.334 291.44 941.334 300.72C941.334 307.68 945.201 311.16 952.934 311.16C958.966 311.16 963.915 309.304 967.782 305.592C971.803 301.725 973.814 296.621 973.814 290.28ZM959.894 216.04C980.31 216.04 995.081 219.752 1004.21 227.176C1013.33 234.6 1017.89 246.355 1017.89 262.44V325.776C1017.89 329.333 1016.58 332.427 1013.95 335.056C1011.32 337.685 1008.23 339 1004.67 339H990.054C986.342 339 983.171 337.763 980.542 335.288C977.913 332.659 976.521 329.488 976.366 325.776V323.92C976.366 323.765 976.289 323.688 976.134 323.688C975.979 323.688 975.825 323.765 975.67 323.92C965.771 335.52 953.553 341.32 939.014 341.32C928.187 341.32 919.294 337.917 912.334 331.112C905.374 324.152 901.894 315.181 901.894 304.2C901.894 276.36 922.774 262.44 964.534 262.44H971.726C973.118 262.44 973.814 261.744 973.814 260.352V260.12C973.814 250.84 968.401 246.2 957.574 246.2C948.294 246.2 936.307 247.592 921.614 250.376C918.366 250.995 915.427 250.299 912.798 248.288C910.169 246.123 908.854 243.339 908.854 239.936V236.224C908.854 232.357 910.014 228.877 912.334 225.784C914.809 222.691 917.902 220.835 921.614 220.216C936.926 217.432 949.686 216.04 959.894 216.04ZM1121.3 291.44V265.92C1121.3 261.435 1119.29 257.413 1115.27 253.856C1111.4 250.299 1106.84 248.52 1101.58 248.52C1088.43 248.52 1081.86 258.573 1081.86 278.68C1081.86 288.733 1083.64 296.312 1087.19 301.416C1090.75 306.365 1095.55 308.84 1101.58 308.84C1106.84 308.84 1111.4 307.061 1115.27 303.504C1119.29 299.947 1121.3 295.925 1121.3 291.44ZM1150.99 165C1154.55 165 1157.64 166.315 1160.27 168.944C1162.9 171.573 1164.22 174.667 1164.22 178.224V325.776C1164.22 329.333 1162.9 332.427 1160.27 335.056C1157.64 337.685 1154.55 339 1150.99 339H1136.38C1132.67 339 1129.49 337.763 1126.87 335.288C1124.24 332.659 1122.84 329.488 1122.69 325.776V323.92C1122.69 323.765 1122.61 323.688 1122.46 323.688C1122.3 323.688 1122.15 323.765 1121.99 323.92C1112.56 335.52 1100.34 341.32 1085.34 341.32C1071.88 341.32 1060.75 335.829 1051.93 324.848C1043.27 313.867 1038.94 298.477 1038.94 278.68C1038.94 258.419 1043.11 242.952 1051.47 232.28C1059.82 221.453 1071.11 216.04 1085.34 216.04C1097.71 216.04 1109.08 220.603 1119.44 229.728C1119.6 229.883 1119.75 229.96 1119.91 229.96C1120.06 229.96 1120.14 229.883 1120.14 229.728V178.224C1120.14 174.667 1121.45 171.573 1124.08 168.944C1126.71 166.315 1129.8 165 1133.36 165H1150.99ZM1278.74 218.824C1282.3 218.36 1285.39 219.443 1288.02 222.072C1290.65 224.701 1291.96 227.872 1291.96 231.584V237.616C1291.96 241.173 1290.72 244.267 1288.25 246.896C1285.78 249.371 1282.68 250.84 1278.97 251.304C1267.06 252.851 1257.55 257.336 1250.43 264.76C1243.32 272.029 1239.76 280.923 1239.76 291.44V325.776C1239.76 329.333 1238.45 332.427 1235.82 335.056C1233.19 337.685 1230.1 339 1226.54 339H1207.75C1204.19 339 1201.1 337.685 1198.47 335.056C1195.84 332.427 1194.52 329.333 1194.52 325.776V231.584C1194.52 228.027 1195.84 224.933 1198.47 222.304C1201.1 219.675 1204.19 218.36 1207.75 218.36H1225.38C1228.94 218.36 1232.03 219.675 1234.66 222.304C1237.29 224.933 1238.6 228.027 1238.6 231.584V241.328C1238.6 241.483 1238.68 241.56 1238.83 241.56C1238.99 241.56 1239.14 241.483 1239.3 241.328C1249.04 228.491 1262.19 220.989 1278.74 218.824ZM1352.48 303.968C1355.41 308.763 1360.13 311.16 1366.63 311.16C1373.12 311.16 1377.84 308.763 1380.78 303.968C1383.72 299.019 1385.19 290.589 1385.19 278.68C1385.19 266.771 1383.72 258.419 1380.78 253.624C1377.84 248.675 1373.12 246.2 1366.63 246.2C1360.13 246.2 1355.41 248.675 1352.48 253.624C1349.54 258.419 1348.07 266.771 1348.07 278.68C1348.07 290.589 1349.54 299.019 1352.48 303.968ZM1320.46 232.744C1331.44 221.608 1346.83 216.04 1366.63 216.04C1386.43 216.04 1401.81 221.608 1412.8 232.744C1423.78 243.725 1429.27 259.037 1429.27 278.68C1429.27 298.323 1423.78 313.712 1412.8 324.848C1401.81 335.829 1386.43 341.32 1366.63 341.32C1346.83 341.32 1331.44 335.829 1320.46 324.848C1309.48 313.712 1303.99 298.323 1303.99 278.68C1303.99 259.037 1309.48 243.725 1320.46 232.744ZM1512.95 308.84C1518.98 308.84 1523.78 306.365 1527.34 301.416C1530.89 296.312 1532.67 288.733 1532.67 278.68C1532.67 258.573 1526.1 248.52 1512.95 248.52C1508 248.52 1503.44 250.376 1499.26 254.088C1495.24 257.8 1493.23 261.744 1493.23 265.92V291.44C1493.23 295.616 1495.24 299.56 1499.26 303.272C1503.44 306.984 1508 308.84 1512.95 308.84ZM1529.19 216.04C1543.42 216.04 1554.71 221.453 1563.06 232.28C1571.42 242.952 1575.59 258.419 1575.59 278.68C1575.59 298.477 1571.18 313.867 1562.37 324.848C1553.71 335.829 1542.65 341.32 1529.19 341.32C1516.97 341.32 1505.6 336.68 1495.09 327.4C1494.93 327.245 1494.78 327.168 1494.62 327.168C1494.47 327.168 1494.39 327.245 1494.39 327.4V376.816C1494.39 380.373 1493.08 383.467 1490.45 386.096C1487.82 388.725 1484.72 390.04 1481.17 390.04H1463.54C1459.98 390.04 1456.88 388.725 1454.26 386.096C1451.63 383.467 1450.31 380.373 1450.31 376.816V231.584C1450.31 228.027 1451.63 224.933 1454.26 222.304C1456.88 219.675 1459.98 218.36 1463.54 218.36H1479.31C1483.02 218.36 1486.19 219.675 1488.82 222.304C1491.45 224.779 1492.84 227.872 1493 231.584V233.44C1493 233.595 1493.08 233.672 1493.23 233.672C1493.39 233.672 1493.54 233.595 1493.7 233.44C1503.28 221.84 1515.12 216.04 1529.19 216.04ZM1635.62 218.36C1639.18 218.36 1642.27 219.675 1644.9 222.304C1647.53 224.933 1648.84 228.027 1648.84 231.584V325.776C1648.84 329.333 1647.53 332.427 1644.9 335.056C1642.27 337.685 1639.18 339 1635.62 339H1615.67C1612.11 339 1609.02 337.685 1606.39 335.056C1603.76 332.427 1602.44 329.333 1602.44 325.776V231.584C1602.44 228.027 1603.76 224.933 1606.39 222.304C1609.02 219.675 1612.11 218.36 1615.67 218.36H1635.62ZM1635.62 165C1639.18 165 1642.27 166.315 1644.9 168.944C1647.53 171.573 1648.84 174.667 1648.84 178.224V184.256C1648.84 187.813 1647.53 190.907 1644.9 193.536C1642.27 196.165 1639.18 197.48 1635.62 197.48H1615.67C1612.11 197.48 1609.02 196.165 1606.39 193.536C1603.76 190.907 1602.44 187.813 1602.44 184.256V178.224C1602.44 174.667 1603.76 171.573 1606.39 168.944C1609.02 166.315 1612.11 165 1615.67 165H1635.62ZM1766.05 307.216C1769.46 306.597 1772.47 307.293 1775.1 309.304C1777.73 311.315 1779.04 314.021 1779.04 317.424V323.456C1779.04 327.323 1777.81 330.725 1775.33 333.664C1773.01 336.603 1769.92 338.381 1766.05 339C1755.23 340.547 1746.02 341.32 1738.44 341.32C1717.87 341.32 1702.1 336.061 1691.12 325.544C1680.14 315.027 1674.64 299.405 1674.64 278.68C1674.64 258.419 1679.9 242.952 1690.42 232.28C1701.09 221.453 1716.33 216.04 1736.12 216.04C1743.7 216.04 1752.91 216.813 1763.73 218.36C1767.6 218.979 1770.69 220.757 1773.01 223.696C1775.49 226.635 1776.72 230.037 1776.72 233.904V239.936C1776.72 243.339 1775.41 246.045 1772.78 248.056C1770.15 250.067 1767.14 250.763 1763.73 250.144C1757.39 249.061 1750.9 248.52 1744.24 248.52C1736.36 248.52 1730.48 250.917 1726.61 255.712C1722.9 260.507 1721.04 268.163 1721.04 278.68C1721.04 289.352 1723.06 297.085 1727.08 301.88C1731.25 306.52 1737.75 308.84 1746.56 308.84C1753.22 308.84 1759.71 308.299 1766.05 307.216Z"
            fill="white"
          />
        </svg>

        <p className="leading-relaxed mt-2 text-[15px]">
          We remain at the forefront of technology innovation, constantly
          pushing the boundaries of artificial intelligence and other fields.
        </p>
      </div>
      <div className="mt-8 grid grid-row-4 grid-flow-col gap-1.5">
        <div className="text-sm text-right">Made in India</div>
        <IndiaLogo />
        <div className="text-sm text-right">Built for the Globe</div>
        <IoMdGlobe className="w-6 h-6" />
      </div>
      <div className="mt-8 text-sm text-center">
        quadropic.com | &copy; QuadropicHQ 2024
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
}
