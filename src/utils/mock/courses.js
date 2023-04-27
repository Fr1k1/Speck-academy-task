import LectureImg1 from '../../assets/images/lecture-1.jpg';
import LectureImg2 from '../../assets/images/lecture-2.jpg';
import LectureImg3 from '../../assets/images/lecture-3.jpg';
//import LectureImg4 from '../../assets/images/lecture-4.jpg';
import LectureImg5 from '../../assets/images/lecture-5.jpg';
import LectureImg6 from '../../assets/images/lecture-6.jpg';
import LectureImg7 from '../../assets/images/lecture-7.jpg';
import LectureImg8 from '../../assets/images/lecture-8.jpg';
 
const coursesMock = [
    {
        id: 1,
        imgSrc: LectureImg1,
        imgAlt: "lekcija1",
        title: "Introduction",
        subtitle: "Get to know us better...",
        time: "60min",
        content: "In this course, you'll get to know the instructor and their teaching style, as well as the objectives and expectations of the course. We'll also cover some basic information about web development and programming."
    },
    {
        id: 2,
        imgSrc: LectureImg2,
        imgAlt: "lekcija2",
        title: "HTML & CSS",
        subtitle: "Learn HTML & CSS basics...",
        time: "100min",
        content: "In this course, you'll learn the basics of HTML and CSS, including how to structure and style web pages. Topics covered include HTML tags, CSS selectors, box model, and layout techniques."
    },
    {
        id: 3,
        imgSrc: LectureImg3,
        imgAlt: "lekcija3",
        title: "Version Control Systems",
        subtitle: "Learn GIT and Gitflow basics...",
        time: "90min",
        content: "In this course, you'll learn about version control systems and how to use Git and Gitflow for managing your codebase. Topics covered include creating and merging branches, resolving conflicts, and using repositories for collaboration."
    },
    {
        id: 4,
        imgSrc: LectureImg5,
        imgAlt: "lekcija4",
        title: "Advanced CSS",
        subtitle: "BEM methodology, grid, flex...",
        time: "120min",
        content: "In this course, you'll learn more advanced CSS techniques, including the BEM methodology for writing scalable and maintainable code, using grid and flex layouts for responsive design, and other tips and tricks for improving your CSS skills."
    },
    {
        id: 5,
        imgSrc: LectureImg5,
        imgAlt: "lekcija5",
        title: "JavaScript basics",
        subtitle: "Learn basics of JavaScript",
        time: "180min",
        content: "In this course, you'll learn the basics of JavaScript, including variables, data types, control structures, functions, and objects. You'll also learn about the Document Object Model (DOM) and how to use JavaScript to manipulate HTML and CSS."
    },
    {
        id: 6,
        imgSrc: LectureImg6,
        imgAlt: "lekcija6",
        title: "Advanced JavaScript",
        subtitle: "Learn professional JavaScript concepts",
        time: "240min",
        content: "In this course, you'll learn more advanced JavaScript concepts, including scope and closures, asynchronous programming, error handling, and using third-party libraries and APIs. You'll also learn about best practices for writing clean and maintainable code."
    },
    {
        id: 7,
        imgSrc: LectureImg7,
        imgAlt: "lekcija7",
        title: "Introduction to React",
        subtitle: "Let's start with React",
        time: "200min",
        content: "In this course, you'll learn the basics of React, a popular JavaScript library for building user interfaces. Topics covered include components, props, state, events, and JSX syntax. You'll also learn about the React ecosystem and how to use tools like create-react-app and React Developer Tools."
    },
    {
        id: 8,
        imgSrc: LectureImg8,
        imgAlt: "lekcija8",
        title: "Advanced React",
        subtitle: "Advanced concepts of React",
        time: "200min",
        content: "In this advanced React course, you'll dive deeper into the React ecosystem and learn advanced techniques for building complex user interfaces. Topics covered include server-side rendering, routing, form handling, and state management using tools like Redux and MobX. You'll also learn about advanced performance optimizations and testing techniques. By the end of the course, you'll be able to build scalable, production-ready applications using React."
    },
]

export default coursesMock;