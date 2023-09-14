import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from "./styles.module.sass";

import pin from "../../../../../../public/pin.svg";

const ContactMap = () => {
  return (
    <div className={s.map}>
      <YMaps>
        <Map
          defaultState={{
            center: [55.86752247044282, 37.579347650787305],
            zoom: 15,
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
