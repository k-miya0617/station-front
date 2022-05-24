import type { NextPage } from "next";
import Layout from "../layout/layout";

const Settings: NextPage = () => {
  return (
    <Layout
      track={{
        trackID: 99999,
        name: "LLONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_ONG_",
      }}
      currentPageName="settings"
    >
      <div>
        SETTINGS
        {[...Array(50)].map((_, i) => (
          <p key={`${i}_temp`}>TEMP_{i}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Settings;
