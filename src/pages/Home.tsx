import React, { useState } from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        home world {count}
      </div>
    </Layout>
  );
};
export default Home;
