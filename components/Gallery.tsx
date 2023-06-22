// @ts-ignore
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/300/200/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/300/200/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/300/200/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <div>
      <ImageGallery items={images} slideInterval={2500} />
    </div>
  );
};

export default Gallery;
