import { Input } from "@chakra-ui/react";
import Head from "next/head";
import React, { useRef, useState } from "react";
import DynamicText from "@components/DynamicText";
import styles from "@styles/Home.module.css";

const Home = () => {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    ref.current.changeValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText ref={ref} />
        <Input value={value} onChange={handleChange} placeholder="Here is a sample placeholder" size="md" width="250px" maxWidth="500px"/>
      </main>
    </div>
  );
};

export default Home;
