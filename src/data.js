import Image1 from "./assets/images/lecture-1.jpg";
import Image2 from "./assets/images/lecture-2.jpg";
import Image3 from "./assets/images/lecture-3.jpg";

import Image4 from "./assets/images/lecture-5.jpg";


export const courses = [

    {

        imgSrc: Image1,     //nejdu zagrade jer bi to inace znacilo objekt
        imgAlt: "Introduction",
        title: "Introduction",
        subtitle: "Get to know us better",
        time: "60 min",

    },

    {

        imgSrc: Image2,
        imgAlt: "HTML & CSS",
        title: "HTML & CSS",
        subtitle: "Learn HTML & CSS basics...",
        time: "100 min",



    },

    {

        imgSrc: Image3,
        imgAlt: "Version Control Systems",
        title: "Version Control Systems",
        subtitle: "Learn GIT and Gitflow basics...",
        time: "90 min",

    },


    {

        imgSrc: Image4,
        imgAlt: "Advanced CSS",
        title: "Advanced CSS",
        subtitle: "BEM methodology, grid, flex...",
        time: "120 min",

    },


]