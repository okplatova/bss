import axios from "axios";
import { useEffect, useState } from "react";
import translate from "translate";
export const useTranslate = () => {
  const [translateWord, seTranslateWord] = useState("");

  const resp = async (text: string) => {
    const resultText = await translate(text, {
      from: "ru",
      to: "en",
    });
    seTranslateWord(resultText);
  };

  return {
    translateWord,
    resp,
  };
};
