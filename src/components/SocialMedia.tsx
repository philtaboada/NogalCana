import TikTokEmbed from "./TiktokEmbed";

const SocialMedia = () => {
  return (
    <div id="otros" className="px-6 pb-12 md:px-12 bg-white text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <section className="my-8">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
            <h1 className="text-center text-[#7A7A7A] max-md:text-4xl mb-10 xl:text-5xl font-bold">
              REDES SOCIALES
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdestiladosnogal&tabs=timeline&width=340&height=750&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=965013454082304"
                width="340"
                height="750"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>

            <div className="flex flex-col items-center max-w-lg lg:mx-0">
              <TikTokEmbed />
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@destiladosnogal/video/7221929230228131077"
                data-video-id="7221929230228131077"
                style={{"maxWidth": "605px", "minWidth": "300px"}}
              >
                {" "}
                <section>
                  {" "}
                  <a
                    target="_blank"
                    title="@destiladosnogal"
                    href="https://www.tiktok.com/@destiladosnogal?refer=embed"
                  >
                    @destiladosnogal
                  </a>{" "}
                  <a
                    title="cañapurahuancayo"
                    target="_blank"
                    href="https://www.tiktok.com/tag/ca%C3%B1apurahuancayo?refer=embed"
                  >
                    #cañapurahuancayo
                  </a>{" "}
                  <a
                    title="cañazohuancayo"
                    target="_blank"
                    href="https://www.tiktok.com/tag/ca%C3%B1azohuancayo?refer=embed"
                  >
                    #cañazohuancayo
                  </a>{" "}
                  <a
                    title="cañapuraoriginal"
                    target="_blank"
                    href="https://www.tiktok.com/tag/ca%C3%B1apuraoriginal?refer=embed"
                  >
                    #cañapuraoriginal
                  </a>{" "}
                  <a
                    title="huancayocañapura"
                    target="_blank"
                    href="https://www.tiktok.com/tag/huancayoca%C3%B1apura?refer=embed"
                  >
                    #huancayocañapura
                  </a>{" "}
                  @Sol☀️{" "}
                  <a
                    title="nogaldestilados"
                    target="_blank"
                    href="https://www.tiktok.com/tag/nogaldestilados?refer=embed"
                  >
                    #nogaldestilados
                  </a>{" "}
                  <a
                    title="huancayonogaldestilados"
                    target="_blank"
                    href="https://www.tiktok.com/tag/huancayonogaldestilados?refer=embed"
                  >
                    #huancayonogaldestilados
                  </a>{" "}
                  <a
                    target="_blank"
                    title="♬ sonido original - Destilados Nogal"
                    href="https://www.tiktok.com/music/sonido-original-7221929229129173765?refer=embed"
                  >
                    ♬ sonido original - Destilados Nogal
                  </a>{" "}
                </section>{" "}
              </blockquote>{" "}
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMedia;
