import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import galleryLoaderStyles from "./gallery-loader-styles";

const GalleryLoader = () => {
  const { container, loadingIcon } = galleryLoaderStyles;
  return (
    <div style={{ ...container }}>
      <FontAwesomeIcon
        style={{
          ...loadingIcon,
        }}
        icon={faPencilAlt}
      ></FontAwesomeIcon>
      <h2
        style={{
          color: "grey",
        }}
      >
        loading gallery ...
      </h2>
    </div>
  );
};

export default GalleryLoader;
