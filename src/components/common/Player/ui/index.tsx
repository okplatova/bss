import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { IPlayerProps } from "../types/player.interface";

import s from "./styles.module.sass";

import { PlayIcon } from "@/components/ui/PlayIcon";

const PlayerDynamic = dynamic(() => import("react-player"), {});

const Player: FC<IPlayerProps> = ({
  url,
  light = true,
  muted = false,
  playing = false,
  loop = false,
}) => {
  const [hydrate, setHydrate] = useState(false);
  // const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setHydrate(true);
  }, []);
  return (
    <div className={s.player}>
      {hydrate && (
        <div className={s.videoWrapper}>
          <PlayerDynamic
            // volume={0.3}
            loop={loop}
            playing={playing}
            width="100%"
            url={url}
            light={light}
            controls
            muted={muted}
          />
          {/* <span
            onClick={() => setPlaying((prev) => !prev)}
            className={s.controls}
          >
            {playing ? "" : <PlayIcon />}
          </span> */}
        </div>
      )}
    </div>
  );
};

export default Player;
