import LightGallery from "lightgallery/react";
import "../components/Gallery.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  { src: "/gallery.webp", alt: "image 1" },
  { src: "/gallery1.webp", alt: "image 2" },
  { src: "/gallery2.webp", alt: "image 2" },
  { src: "/gallery3.webp", alt: "image 3" },
  { src: "/gallery4.webp", alt: "image 4" },
  { src: "/gallery5.webp", alt: "image 5" },
  { src: "/gallery6.webp", alt: "image 6" },
  { src: "/gallery7.webp", alt: "image 7" },
  { src: "/gallery8.webp", alt: "image 8" },
  { src: "/gallery9.webp", alt: "image 9" },
  { src: "/gallery10.webp", alt: "image 10" },
  { src: "/gallery11.webp", alt: "image 11" },
  { src: "/gallery12.webp", alt: "image 12" },
  { src: "/gallery13.webp", alt: "image 13" },
  { src: "/gallery14.webp", alt: "image 14" },
  { src: "/gallery15.webp", alt: "image 15" },
  { src: "/gallery16.webp", alt: "image 16" },
  { src: "/gallery17.webp", alt: "image 17" },
  { src: "/gallery18.webp", alt: "image 18" },
  { src: "/gallery19.webp", alt: "image 19" },
  { src: "/gallery20.webp", alt: "image 20" },
  { src: "/gallery21.webp", alt: "image 21" },
  { src: "/gallery22.webp", alt: "image 22" },
  { src: "/gallery23.webp", alt: "image 23" },
  { src: "/gallery24.webp", alt: "image 24" },
  { src: "/gallery25.webp", alt: "image 25" },
  { src: "/gallery26.webp", alt: "image 26" },
  { src: "/gallery27.webp", alt: "image 27" },
  { src: "/gallery28.webp", alt: "image 28" },
  { src: "/gallery29.webp", alt: "image 29" },
  { src: "/gallery30.webp", alt: "image 30" },
  { src: "/gallery31.webp", alt: "image 31" },
  { src: "/gallery32.webp", alt: "image 32" },
];

export default function Gallery() {
  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };
  return (
    <div className="mt-10 md:mt-20">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgShare,
          lgRotate,
        ]}
      >
        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img alt={image.alt} src={image.src} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}
