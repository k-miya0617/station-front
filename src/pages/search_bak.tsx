import type { NextPage } from "next";
import { useState } from "react";
import { findKeyword, getTrack, Track } from "../api/tracks";
import { classNames, msToHMS, dataLength } from "../utils";

interface TrackViewProps {
  track: Track;
}

const handrePressTrackCard = (trackId: number, location: string) => {
  (async () => {
    getTrack(trackId, location);
  })();
};

const TrackView = (props: TrackViewProps) => {
  return (
    <div
      key={`trackId_${props.track.trackID}_card`}
      className={classNames(
        "m-4 rounded-md p-3",
        "bg-white hover:bg-stone-100 text-stone-900 shadow",
        "dark:bg-stone-700 hover:dark:bg-stone-600 dark:text-stone-100 hover:shadow"
      )}
      onClick={() =>
        handrePressTrackCard(
          props.track.trackID,
          props.track.location ?? "unknown"
        )
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="text-xs truncate">{props.track.album ?? ""}</p>
          <div className="flex-1" />
          <p className="text-xs truncate">{props.track.artist ?? ""}</p>
        </div>
      </div>
      <div>
        <p className="text-md truncate">{props.track.name ?? ""}</p>
      </div>
      <div className="flex flex-row">
        <p className="text-xs w-12">{msToHMS(props.track.totalTimeMs)}</p>
        <p className="text-xs">{`${props.track.playCount ?? 0}回再生`}</p>
        <div className="flex-1" />
        <p className="text-xs">{dataLength(props.track.sizeByte)}</p>
      </div>
    </div>
  );
};

interface TracksViewProps {
  tracks: Track[] | undefined | null;
}

const TracksView = (props: TracksViewProps) => {
  if (props.tracks === undefined) {
    return (
      <div
        className={classNames(
          "flex-1 overflow-y-scroll",
          "bg-stone-100 text-stone-900",
          "dark:bg-stone-900 dark:text-stone-100"
        )}
      >
        <p>検索結果はありません</p>
      </div>
    );
  }

  if (props.tracks === null) {
    return (
      <div
        className={classNames(
          "flex-1 overflow-y-scroll",
          "bg-stone-100 text-stone-900",
          "dark:bg-stone-900 dark:text-stone-100"
        )}
      >
        <p>システムエラーが発生しました</p>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "flex-1 overflow-y-scroll",
        "bg-stone-100 text-stone-900",
        "dark:bg-stone-900 dark:text-stone-100"
      )}
    >
      {props.tracks.map((track) => (
        <TrackView track={track} />
      ))}
    </div>
  );
};

const Search: NextPage = () => {
  const [tracks, setTracks] = useState<Track[] | undefined | null>(undefined);
  const [keyword, setKeyword] = useState<string>("");

  const handlePressSearch = (keyword: string) => {
    (async () => {
      await findKeyword(keyword)
        .then((_tracks) => {
          setTracks(_tracks);
        })
        .catch((e) => {
          setTracks(null);
          console.error(e);
        });
    })();
  };

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="h-10 w-full bg-lime-500 text-stone-900 dark:text-stone-100">
          <div className="flex flex-row items-center justify-center p-2 space-x-2">
            <input
              type="text"
              className="py-0 flex-1 border-none shadow bg-stone-100 dark:bg-stone-900"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="bg-amber-500 px-2 rounded-md"
              onClick={() => handlePressSearch(keyword)}
            >
              検索
            </button>
          </div>
        </div>
        <div
          className={classNames(
            "flex-1 overflow-y-scroll",
            "bg-stone-100 text-stone-900",
            "dark:bg-stone-900 dark:text-stone-100"
          )}
        >
          <TracksView tracks={tracks} />
          {/*
          {[...Array(100)].map((_, i) => (
            <div
              key={`${i}_test`}
              className={classNames(
                "m-4 rounded-md p-3",
                "bg-white text-stone-900",
                "dark:bg-stone-700 dark:text-stone-100"
              )}
            >
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p className="text-xs truncate">
                    Perfume Global Compilation "LOVE THE WORLD"
                  </p>
                  <div className="flex-1" />
                  <p className="text-xs truncate">Perfume</p>
                </div>
              </div>
              <div>
                <p className="text-md truncate">
                  チョコレイト・ディスコ (2012-Mix)
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-xs w-12">1:23:56</p>
                <p className="text-xs">1023回再生</p>
                <div className="flex-1" />
                <p className="text-xs">453.24MB</p>
              </div>
            </div>
          ))}
              */}
        </div>
      </div>
    </>
  );
};

export default Search;
