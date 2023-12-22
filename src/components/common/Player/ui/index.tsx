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
  controls = true,
}) => {
  const [hydrate, setHydrate] = useState(false);
  const [isPlaying, setPlaying] = useState(playing);

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
            playing={isPlaying}
            width="100%"
            url={url}
            light={light}
            controls={controls}
            muted={muted}
          />
          {!controls ? (
            <span
              onClick={() => setPlaying((prev) => !prev)}
              className={s.controls}
            >
              {isPlaying ? "" : <PlayIcon />}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Player;
