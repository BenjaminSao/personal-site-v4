export const updates: readonly update[] = [
    {
        title: "TIPS",
        description:
            "Hello everyone and welcome to my personal website, version 4.0.0! Please feel free to give any advice through the contact form (no spam please)",
        date: "11/07/2023",
    },
    {
        title: "Website Release",
        description:
            "Today marks the day when the very first iteration of my website is released. Hope you all enjoy :)",
        date: "11/07/2023",
    },
    {
        title: "First Post!",
        description:
            "Hello everyone, and welcome to my personal website (or web app)! This is going to be my very first post. Just a bit of info for this section right here, it'll contain my recent updates and interesting stuff in my life, kinda like a blog. That's pretty much it! Thanks for visiting my site ;)",
        date: "11/07/2023",
    },
];

interface update {
    title: string;
    description: string;
    date: string;
}
