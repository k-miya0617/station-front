import path from "path";

// 環境設定ファイルを読み込む ※github非公開
const tracksUrl = "/api/Tracks/";

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

// 該当するトラックIDのファイルをDLする
export const getTrack = async (trackID: number, location: string) => {
  const fileName = path.basename(location);
  await fetch(`${tracksUrl}${trackID}`)
    .then((res) => res.blob())
    .then((blob) => {
      const anchor = document.createElement("a");
      anchor.href = window.URL.createObjectURL(blob);
      anchor.download = fileName;
      anchor.click();
    });
};

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
