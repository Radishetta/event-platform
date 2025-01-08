import React from "react";

export const Event = () => {
  async function logFile() {
    try {
      const filePath = resolve("../../data/events.json");
      const contents = await readFile(filePath, { encoding: "utf8" });
      console.log(contents);
    } catch (err) {
      console.error(err.message);
    }
  }
  return <div onLoad={logFile}>{contents}Event</div>;
};
