import type { NextPage } from "next";
import Layout from "../layout/layout";

const Index: NextPage = () => {
  return (
    <Layout track={{ trackID: 99999, name: "TEMP_NAME" }}>
      <div>
        {[...Array(50)].map((_, i) => (
          <p key={`${i}_temp`}>TEMP_{i}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
