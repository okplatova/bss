import { useState } from "react";
import translate from "translate";

export const handleTranslate = async (text: string) => {
  const resultText = await translate(text, {
    from: "ru",
    to: "en",
  });
  const a = resultText + "hello";
  return "yes";
};
