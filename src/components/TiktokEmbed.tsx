import { useEffect } from "react";

const TikTokEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Eliminar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TikTokEmbed;