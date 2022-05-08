import type { NextPage } from "next";
import { useState } from "react";
import { findKeyword, Track } from "../api/tracks";
import { msToHMS } from "../utils";

const handlePress = () => {
  (async () => {
    await findKeyword("Perfume")
      .then((_tracks) => {
        console.log(_tracks);
      })
      .catch((e) => {
        console.error(e);
      });
  })();
};

const Home: NextPage = () => {
  // 画面に表示させるトラックリスト
  const [trackList, setTrackList] = useState<Track[] | undefined | null>(
    undefined
  );

  // 検索ボックスの中身
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handlePressSearch = (keyword: string) => {
    (async () => {
      await findKeyword(keyword)
        .then((_tracks) => {
          setTrackList(_tracks);
        })
        .catch((e) => {
          setTrackList(null);
        });
    })();
  };

  const Tbody = () => {
    if (trackList === undefined) {
      return (
        <tbody>
          <tr>
            <td colSpan={7} className="text-center">
              検索結果はありません
            </td>
          </tr>
        </tbody>
      );
    }
    if (trackList === null) {
      return (
        <tbody>
          <tr>
            <td colSpan={7} className="text-center">
              エラーが発生しました
            </td>
          </tr>
        </tbody>
      );
    }
    return (
      <tbody>
        {trackList.map((track) => (
          <tr>
            <td>{track.album ?? ""}</td>
            <td>{track.discCount ?? ""}</td>
            <td>{track.trackCount ?? ""}</td>
            <td>{track.name}</td>
            {/* <td>{track.totalTimeMs}</td> */}
            <td>{msToHMS(track.totalTimeMs ?? 0)}</td>
            <td>{track.artist}</td>
            <td>{track.sizeByte}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="bg-stone-100 w-screen h-screen">
      <div className="flex flex-col space-y-2 p-10">
        <h1 className="text-3xl text-lime-500">STATION サービス建設予定地</h1>
        <h2 className="text-xl text-stone-900">
          GW明け、仕事が忙しくない時にボチボチつくります。
        </h2>
        <div className="flex flex-col">
          <div className="">
            <h2 className="text-lime-500 text-xl font-bold">
              トラック検索機能の動作確認
            </h2>
            <div className="flex-row space-x-2">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                className="bg-amber-500 text-stone-900 p-2 rounded-md"
                onClick={() => handlePressSearch(searchKeyword)}
              >
                検索
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>アルバム名</th>
                <th></th>
                <th></th>
                <th>曲名</th>
                <th>再生時間</th>
                <th>アーティスト</th>
                <th>サイズ</th>
              </tr>
            </thead>
            <Tbody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
