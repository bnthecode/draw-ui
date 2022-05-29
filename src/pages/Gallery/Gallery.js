import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import drawingHttp from "../../http/drawings-http";
import GalleryContent from "../../containers/GalleryContent/GalleryContent";
import GalleryLoader from "../../components/GalleryLoader/GalleryLoader";

const Gallery = ({ dispatch }) => {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);

  const fetchArtwork = async () => {
    try {
      const data = await drawingHttp.getDrawings();
      setGallery(data);
    } catch (error) {
      alert(`error fetching gallery items ${error.message}`);
    } finally {
      setLoadingContent(false);
    }
  };

  const handleNavigation = () => {
    navigate("/create");
  };

  useEffect(() => {
    fetchArtwork();
  }, []);

  return loadingContent ? (
    <GalleryLoader />
  ) : (
    <GalleryContent
      handleNavigation={handleNavigation}
      gallery={gallery}
      dispatch={dispatch}
    />
  );
};

export default Gallery;
