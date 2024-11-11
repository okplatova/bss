import { useRef } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

import pin from "/public/pin.svg";

import s from "./styles.module.sass";


const ContactMap = () => {
  const coordinates = [55.817471, 37.655688];
  const map = useRef<any>();

  return (
    <div className={s.map}>
      <YMaps>
        <Map
          defaultState={{
            center: coordinates,
            zoom: 15,
          }}
          instanceRef={map}
          onLoad={() => {
            window.addEventListener("keydown", (e) => {
              if (e.key === "Control" && map.current !== null) {
                map.current?.behaviors.enable("scrollZoom");
              }
            });
            window.addEventListener("keyup", (e) => {
              if (map.current !== null) {
                map.current?.behaviors.disable("scrollZoom");
              }
            });
          }}
          onMouseEnter={() => {
            if (map.current) {
              map.current?.behaviors.disable(["scrollZoom"]);
            }
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Placemark
            geometry={coordinates}
            options={{
              draggable: false,
              iconLayout: "default#image",
              iconImageHref: pin.src,
              iconImageSize: [159, 32],
            }}
          />
          <ZoomControl
            options={{
              //@ts-ignore
              float: "right",
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default ContactMap;
