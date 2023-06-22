// @ts-ignore
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import designo0 from "../assets/projects/designo/designo-0.png";
import designo1 from "../assets/projects/designo/designo-1.png";
import designo2 from "../assets/projects/designo/designo-2.png";
import designo3 from "../assets/projects/designo/designo-3.png";
import designo4 from "../assets/projects/designo/designo-4.png";
import designo5 from "../assets/projects/designo/designo-5.png";
import designo6 from "../assets/projects/designo/designo-6.png";
import designo7 from "../assets/projects/designo/designo-7.png";
import designo8 from "../assets/projects/designo/designo-8.png";
import Image from "next/image";
// import img from '../public/designo/designo-0.png'
type GalleryProps = {
  route: string;
};

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/300/200/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/300/200/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/300/200/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

const Gallery = ({ route }: GalleryProps) => {
  console.log(route);

  const getDynamicImages = () => {
    let dynamicImages: any = [];
    if (route === "designo") {
      dynamicImages = [
        {
          original: "/designo/designo-0.png",
          thumbnail: "/designo/designo-0.png",
        },
        {
          original: "/designo/designo-1.png",
          thumbnail: "/designo/designo-1.png",
        },
        {
          original: "/designo/designo-2.png",
          thumbnail: "/designo/designo-2.png",
        },
        {
          original: "/designo/designo-3.png",
          thumbnail: "/designo/designo-3.png",
        },
        {
          original: "/designo/designo-4.png",
          thumbnail: "/designo/designo-4.png",
        },
        {
          original: "/designo/designo-5.png",
          thumbnail: "/designo/designo-5.png",
        },
        {
          original: "/designo/designo-6.png",
          thumbnail: "/designo/designo-6.png",
        },
        {
          original: "/designo/designo-7.png",
          thumbnail: "/designo/designo-7.png",
        },
        {
          original: "/designo/designo-8.png",
          thumbnail: "/designo/designo-8.png",
        },
      ];
    }

    return dynamicImages;
  };
  console.log(getDynamicImages());
  return (
    <div>
      {getDynamicImages().length ? (
        <>
          <ImageGallery
            items={getDynamicImages()}
            slideInterval={2500}
            showThumbnails={false}
          />
        </>
      ) : (
        <p>aaa</p>
      )}{" "}
    </div>
  );
};

export default Gallery;
