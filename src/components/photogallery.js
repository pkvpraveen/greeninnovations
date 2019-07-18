import React, {useCallback, useState} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

export default function PhotoShop({data}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const photos = data.allFile.edges.map(e => {
    return ({
      src: e.node.childImageSharp.fluid.src,
      height: 50,
      width: 50 * e.node.childImageSharp.fluid.aspectRatio
    })
  })
  const openLightbox = useCallback((event, {photo, index}) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

