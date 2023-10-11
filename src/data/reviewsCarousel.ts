interface Reviews {
    owner: string;
    text: string;
    vote: number;
}

const reviewsCarousel: Reviews[] = [
    {
        owner: "Peter Masters",
        text: "We thoroughly enjoyed our holiday in Sicily and were very pleased with our stay at Alesa. It's also the best one and the local office, Guissi and Domineco were always quick to respond and very helpful. soloSicily provide an excellent service. Thank you.",
        vote: 4,
    },
    {
        owner: "The Guardian",
        text: "The Guardian dioscovers south Sicily's secrets during a week's stay at Casa d'Eraclea. Quiet beaches, fresh seafood, pictureque towns and impressive ancient monuments all combine to create a wonderful week in southern Sicily.",
        vote: 4,
    },
];

export default reviewsCarousel;
