import { useRef } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from "./styles.module.sass";

import pin from "/public/pin.svg";

const ContactMap = () => {
  const map = useRef<any>();

  return (
    <div className={s.map}>
      <YMaps>
        <Map
          defaultState={{
            center: [55.86752247044282, 37.579347650787305],
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
            geometry={[55.86752247044282, 37.579347650787305]}
            options={{
              draggable: false,
              iconLayout: "default#image",
              iconImageHref: pin.src,
              iconImageSize: [232, 32],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default ContactMap;
