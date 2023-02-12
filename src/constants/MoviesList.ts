import movie_poster_1 from "../assets/movie_poster_1.png";
import poster_2 from "../assets/poster_2.png";
import After from "../assets/After.png";
import Titane from "../assets/Titane.png";
import DarioArgento from "../assets/DarioArgento.jpg";
import AmericanPsycho from "../assets/AmericanPsycho.jpg";
import LaLaLand from "../assets/LaLaLand.jpg";

//This has 2 data structures one is for movie list and other(theatreSeatLayout) is for theatre details...
//When ever the user finalises time, screen No., then based on theatre name and screen number the the theatre seat layout will be filtered from theatreSeatLayout

export const movieList = [
  {
    id: "4j7uyt",
    poster: movie_poster_1,
    title: "The Riddle",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "A",
    genres: ["Drama", "Action"],
    liked: 83,
    runtime: "2h 23m",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
  {
    id: "4i9poy",
    poster: poster_2,
    title: "The Journey",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "U/A",
    genres: ["Drama", "Action"],
    liked: 83,
    runtime: "2h 53m",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
  {
    id: "lkBn32",
    poster: After,
    title: "After",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "U",
    genres: ["Drama", "Action"],
    liked: 78,
    runtime: "2h 3m",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
  {
    id: "9iurgs",
    poster: Titane,
    title: "Titane",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "A",
    genres: ["Drama", "Action"],
    liked: 90,
    runtime: "2h",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
  {
    id: "Dfgbew",
    poster: DarioArgento,
    title: "Dario Argento",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "U/A",
    genres: ["Drama", "Action"],
    liked: 92,
    runtime: "2h 23m",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
  {
    id: "k93lcn",
    poster: AmericanPsycho,
    title: "American Psycho",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "A",
    genres: ["Drama", "Action"],
    liked: 77,
    runtime: "1h 10m",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
  {
    id: "0psm2m",
    poster: LaLaLand,
    title: "La La Land",
    languages: ["English"],
    description:
      "An ambitious London sports journalist, an enigmatic tramp, and a police press officer team up to solve a series of murders that follow the discovery of an unpublished manuscript by Charles Dickens in a present day Thames-side pub.",
    certificate: "A",
    genres: ["Drama", "Action"],
    liked: 78,
    runtime: "2h 23m",
    theatreDetails: [
      {
        name: "Inox-Inorbit",
        screenNo: 1,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Forum",
        screenNo: 2,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
      {
        name: "Inox-Gold",
        screenNo: 3,
        shows: [
          { time: "9:00 AM", screenNo: 1, price: 120 },
          { time: "12:00 PM", screenNo: 2, price: 120 },
          { time: "4:00 PM", screenNo: 3, price: 120 },
        ],
      },
    ],
  },
];
export const theatreSeatLayout = [
  {
    theatreName: "Inox-Inorbit",
    screenNo: 1,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
    },
  },
  {
    theatreName: "Inox-Inorbit",
    screenNo: 2,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
    },
  },
  {
    theatreName: "Inox-Inorbit",
    screenNo: 3,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
      J: 20,
    },
  },
  {
    theatreName: "Inox-Forum",
    screenNo: 1,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
    },
  },
  {
    theatreName: "Inox-Forum",
    screenNo: 2,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
    },
  },
  {
    theatreName: "Inox-Forum",
    screenNo: 3,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
      J: 20,
    },
  },
  {
    theatreName: "Inox-Gold",
    screenNo: 1,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
    },
  },
  {
    theatreName: "Inox-Gold",
    screenNo: 2,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
    },
  },
  {
    theatreName: "Inox-Gold",
    screenNo: 3,
    seatLayout: {
      A: 20,
      B: 20,
      C: 20,
      D: 20,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      I: 20,
      J: 20,
    },
  },
];
