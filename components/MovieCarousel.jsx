// // Import Swiper React components
// import React, { useRef, useState } from "react";
// import { Box } from "@chakra-ui/layout";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ImageCapture from "./ImageCapture.jsx";
// import itonya from "../public/WebDevPictures/IMG_3713.JPG";
// import midsommar from "../public/WebDevPictures/midsommar.jpg";
// import ladybird from "../public/WebDevPictures/ladybird.jpg";
// import intothewild from "../public/WebDevPictures/into-the-wild.jpg";
// import silenceofthelambs from "../public/WebDevPictures/silence-of-the-lambs.jpg";
// import uncutgems from "../public/WebDevPictures/uncut-gems.jpg";
// import goodfellas from "../public/WebDevPictures/goodfellas.jpg";
// import themartian from "../public/WebDevPictures/the-martian.jpg";
// import manchester from "../public/WebDevPictures/manchester.jpeg";
// import nomadland from "../public/WebDevPictures/nomadland.jpg";

// // Import Swiper styles
// import "swiper/css";

// const MovieCarousel = () => {
//   return (
//     <Box marginTop="161vw" >
//       <Swiper
//         spaceBetween={10}
//         slidesPerView={3}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <ImageCapture imgSrc={itonya} widthVar="25vw" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={midsommar} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={ladybird} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={intothewild} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={silenceofthelambs} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={uncutgems} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={goodfellas} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={themartian} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={manchester} widthVar="25vw"/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <ImageCapture imgSrc={nomadland} widthVar="25vw"/>
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// };

// export default MovieCarousel;
