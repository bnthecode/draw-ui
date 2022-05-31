import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import drawingHttp from "../../http/drawings-http";
import GalleryLoader from "../../components/GalleryLoader/GalleryLoader";
import MyArtwork from "../../containers/MyArtwork/MyArtwork";
import PublicGallery from "../../containers/PublicGallery/PublicGallery";
import galleryPageStyles from "./gallery-page-styles";
import { Button, MenuItem, Select, Typography } from "@mui/material";

const Gallery = ({ dispatch }) => {
  const navigate = useNavigate();
  const deafultGallery = window.location.href.split("/")[4] || "public";
  const user = JSON.parse(localStorage.getItem("user"));
  const [gallery, setGallery] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);
  const [galleryType, setGalleryType] = useState(deafultGallery);

  const getEndpoint = () => {
    const { getDrawings, getUserDrawings } = drawingHttp;
    return galleryType === "my-artwork" ? getUserDrawings : getDrawings;
  };

  const fetchArtwork = async () => {
    try {
      const method = getEndpoint();
      const data = await method();
      setGallery(data);
    } catch (error) {
      alert(`error fetching gallery items ${error.message}`);
    } finally {
      setLoadingContent(false);
      navigate(`/gallery/${galleryType}`);
    }
  };

  const handleNavigation = () => {
    navigate("/create");
  };

  const handleGalleryChange = ({ target: { value } }) => {
    setGalleryType(value);
  };

  const determineTitle = () =>
    galleryType === "public" ? "Gallery" : "My Art";

  useEffect(() => {
    fetchArtwork();
    // dependency issue, no causes need to create new function.
    // will work to remove later
    // eslint-disable-next-line
  }, [galleryType]);

  const { button, title, container, select } = galleryPageStyles;
  return loadingContent ? (
    <GalleryLoader />
  ) : (
    <div style={{ ...container }}>
      <Typography
        style={{
          ...title,
        }}
      >
        {" "}
        {determineTitle()}
      </Typography>
      <Button
        onClick={handleNavigation}
        style={{
          ...button,
        }}
      >
        + create new project
      </Button>
      <Select
        style={{
          ...select,
        }}
        onChange={handleGalleryChange}
        value={galleryType}
      >
        <MenuItem style={{ fontFamily: "cursive" }} value={"my-artwork"}>
          my artwork
        </MenuItem>
        <MenuItem style={{ fontFamily: "cursive" }} value={"public"}>
          public gallery
        </MenuItem>
      </Select>
      <Routes>
        <Route
          path="/public"
          element={
            <PublicGallery
              handleNavigation={handleNavigation}
              gallery={gallery}
              dispatch={dispatch}
              username={user.username}
            />
          }
        ></Route>
        <Route
          path="/my-artwork"
          element={
            <MyArtwork
              handleNavigation={handleNavigation}
              gallery={gallery}
              dispatch={dispatch}
              username={user.username}
              fetchArtwork={fetchArtwork}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Gallery;
