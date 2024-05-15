"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d750.575462998649!2d77.10019945428462!3d28.424265854723647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715796830792!5m2!1sen!2sin" width="420" height="600" ></iframe>
  );
};

export default NewsLatterBox;
