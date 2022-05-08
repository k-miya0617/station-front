import type { NextPage } from "next";
import { classNames } from "../utils";

const Search: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="h-10 w-full bg-lime-500 text-stone-900 dark:text-stone-100">
          SEARCH
        </div>
        <div
          className={classNames(
            "flex-1 overflow-y-scroll",
            "bg-stone-100 text-stone-900",
            "dark:bg-stone-900 dark:text-stone-100"
          )}
        >
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
        </div>
      </div>
    </>
  );
};

export default Search;
