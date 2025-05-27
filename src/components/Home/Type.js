import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "../../hooks/useTranslation";

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [
          t("Software Developer"),
          t("AI Engineer"),
          t("Frontend Developer"),
          t("Full Stack Developer")
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
