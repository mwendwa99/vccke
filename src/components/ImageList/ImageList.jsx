import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Paper from "@mui/material/Paper";

// images
import vcck1 from "Images/kariadudu/1.jpg";
import vcck2 from "Images/kariadudu/2.jpg";
import vcck3 from "Images/kariadudu/3.jpg";
import vcck4 from "Images/kariadudu/4.jpg";
import vcck5 from "Images/kariadudu/5.jpg";
import vcck6 from "Images/kariadudu/6.jpg";
import vcck7 from "Images/kariadudu/7.jpg";
import vcck8 from "Images/kariadudu/8.jpg";
import vcck9 from "Images/kariadudu/9.jpg";
import vcck10 from "Images/kariadudu/10.jpg";
import vcck11 from "Images/kariadudu/11.jpg";
import vcck12 from "Images/kariadudu/12.jpg";
import vcck13 from "Images/kariadudu/13.jpg";
import vcck14 from "Images/kariadudu/14.jpg";

export default function TitlebarBelowMasonryImageList() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [openImage, setOpenImage] = useState(0);

  const handleImageClick = (image) => {
    setIsImageOpen(true);
    setOpenImage(image);
  };

  const handleCloseImage = () => {
    setOpenImage(null);
    setIsImageOpen(false);
  };

  useEffect(() => {
    const closeImageOnOutsideClick = (event) => {
      if (isImageOpen) {
        if (!document.getElementById("image-paper").contains(event.target)) {
          handleCloseImage();
        }
      }
    };

    document.addEventListener("mousedown", closeImageOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeImageOnOutsideClick);
    };
  }, [isImageOpen]);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          height: 800,
          overflowY: "scroll",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "#ccc #ccc", // For Firefox
        }}
        className="custom-scrollbar"
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                onClick={() => handleImageClick(item.img)}
                style={{ cursor: "pointer" }}
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      {isImageOpen && (
        <Paper
          id="image-paper"
          elevation={0}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
            width: "100%",
          }}
          onClick={handleCloseImage}
        >
          <img
            src={openImage}
            alt="Opened Image"
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Paper>
      )}
    </>
  );
}

const itemData = [
  {
    img: vcck1,
    // title: "Bed",
    // author: "swabdesign",
  },
  {
    img: vcck2,
    // title: "Books",
    // author: "Pavel Nekoranec",
  },
  {
    img: vcck3,
    // title: "Sink",
    // author: "Charles Deluvio",
  },
  {
    img: vcck4, // title: "Kitchen",
    // author: "Christian Mackie",
  },
  {
    img: vcck5,
    // title: "Blinds",
    // author: "Darren Richardson",
  },
  {
    img: vcck6,
    // title: "Chairs",
    // author: "Taylor Simpson",
  },
  {
    img: vcck7,
    // title: "Laptop",
    // author: "Ben Kolde",
  },
  {
    img: vcck8,
    // title: "Doors",
    // author: "Philipp Berndt",
  },
  {
    img: vcck9,
    // title: "Coffee",
    // author: "Jen P.",
  },
  {
    img: vcck10,
    // title: "Storage",
    // author: "Douglas Sheppard",
  },
  {
    img: vcck11,
    // title: "Candle",
    // author: "Fi Bell",
  },
  {
    img: vcck12,
    // title: "Coffee table",
    // author: "Hutomo Abrianto",
  },
  {
    img: vcck13,
    // title: "Coffee table",
    // author: "Hutomo Abrianto",
  },
  {
    img: vcck14,
    // title: "Coffee table",
    // author: "Hutomo Abrianto",
  },
];
