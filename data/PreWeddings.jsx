import Img1 from "@/public/1.jpeg";
import Img2 from "@/public/8.jpg";
import Img3 from "@/public/3.jpg";
import Img4 from "@/public/4.jpg";
import Img5 from "@/public/5.jpg";
import Img6 from "@/public/6.jpg";
import Img7 from "@/public/7.jpg";
import Img9 from "@/public/9.jpg";
import Img10 from "@/public/10.jpg";
import Img11 from "@/public/11.jpg";
import Img12 from "@/public/12.jpg";
import Img13 from "@/public/13.jpg";
import Img14 from "@/public/14.jpg";
import Img15 from "@/public/15.jpg";

const allImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img9, Img10, Img11, Img12, Img13, Img14, Img15];

function getRandomImages(count) {
    return Array.from({ length: count }, () => allImages[Math.floor(Math.random() * allImages.length)]);
}

export const PreWeddingTypes = [
    {
        thumbnail: Img1,
        preWeddingName: "Wedding",
        preWeddingHref: "/PreWeddings/Wedding",
        preWeddingDesc: "Parth Studio",
        preWeddingImages: getRandomImages(9),
    },
    {
        thumbnail: Img2,
        preWeddingName: "Corporate Gala",
        preWeddingHref: "/PreWeddings/CorporateWedding",
        preWeddingDesc: "Weddingify Co.",
        preWeddingImages: getRandomImages(3),
    },
    {
        thumbnail: Img3,
        preWeddingName: "Music Festival",
        preWeddingHref: "/PreWeddings/MusicFest",
        preWeddingDesc: "Harmony Weddings",
        preWeddingImages: getRandomImages(6),
    },
    {
        thumbnail: Img4,
        preWeddingName: "Food Carnival",
        preWeddingHref: "/PreWeddings/FoodFest",
        preWeddingDesc: "Delight Caterers",
        preWeddingImages: getRandomImages(1),
    },
    {
        thumbnail: Img5,
        preWeddingName: "Art Exhibition",
        preWeddingHref: "/PreWeddings/ArtExpo",
        preWeddingDesc: "Creative Minds",
        preWeddingImages: getRandomImages(3),
    },
    {
        thumbnail: Img6,
        preWeddingName: "Sports Tournament",
        preWeddingHref: "/PreWeddings/SportsFest",
        preWeddingDesc: "Ace Athletics",
        preWeddingImages: getRandomImages(14),
    },
];