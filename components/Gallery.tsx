// @ts-ignore
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type GalleryProps = {
  route: string;
};

const Gallery = ({ route }: GalleryProps) => {
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

  return (
    <div>
      {getDynamicImages().length ? (
        <div className="flex h-[50rem] flex-col justify-start overflow-hidden">
          <ImageGallery
            items={getDynamicImages()}
            slideInterval={2500}
            showThumbnails={false}
            originalAlt={route}
            description={`Screenshots of the ${route} project`}
          />
        </div>
      ) : (
        <p>Screenshots not yet available, check progess on live link.</p>
      )}
    </div>
  );
};

export default Gallery;
