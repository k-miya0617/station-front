// 環境設定ファイルを読み込む ※github非公開
import { stationConfig } from "../../env";

const tracksUrl = stationConfig.apiBaseURL + "Tracks/";

export interface Track {
  trackID: number;
  sizeByte?: number | undefined;
  totalTimeMs?: number | undefined;
  discNumber?: number | undefined;
  discCount?: number | undefined;
  trackNumber?: number | undefined;
  trackCount?: number | undefined;
  year?: number | undefined;
  bpm?: number | undefined;
  artworkCount?: number | undefined;
  name?: string | undefined;
  artist?: string | undefined;
  album?: string | undefined;
  albumArtist?: string | undefined;
  composer?: string | undefined;
  genre?: string | undefined;
  playCount?: number | undefined;
  kind?: string | undefined;
  location?: string | undefined;
  dateAdded?: Date | undefined;
  dateModified?: Date | undefined;
}

// キーワードの該当するトラックのリストを取得する
export const findKeyword = async (keyword: string) => {
  const response = await fetch(`${tracksUrl}FindKeyword?Keyword=${keyword}`);
  if (response.status === 404) return undefined;
  const tracks = response.json();
  return tracks;
};

// アルバム一覧を取得する
export const albumList = async () => {
  const response = await fetch(`${tracksUrl}AlbumList`);
  const albums = response.json();
  return albums;
};
