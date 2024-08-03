
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kevin",
    lastName: "Adhaikal",
    // initials: "Networking", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Programmer, Networking",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at Google"
        },
        {
            emoji: "📧",
            text: "kevin@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://Instagram.com/@KevinAdhaikal",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://youtube.com/@KevinAdhaikal",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://github.com/KevinAdhaikal",
            icon: "fa fa-github",
            label: 'github'
        },
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, my name is Muhammad Kevin Adhaikal, I am usually called Kevin. I like playing old school games, old school songs, and other old school things. I'm just an ordinary person doing normal activities",
    skills:
    {
        proficientWith: ['C Language', 'JavaScript', 'Networking'],
        exposedTo: ['nodejs', 'Visual Studio']
    }
    ,
    education: [
        {
            label: 'SD rahasia (2011 - 2017)',
            emoji: '📖'
        },
        {
            label: 'SMP Rahasia (2018 - 2021)',
            emoji: '🎭'
        },
        {
            label: 'SMK Cakra Nusantara (2021 - 2024)',
            emoji: '🎥'
        },
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://maulanya.com", //this should be a link to the live version of the project, if it has one
            source: "https://maulanya.com", // this should be a link to the **repository** of the project, where the code is hosted.
            image: 'https://cdn.discordapp.com/attachments/993439384797990982/1269125539394883616/image.png?ex=66aeecc3&is=66ad9b43&hm=1d04c816fe04865062c36e408669a297c6d9ba5604b1c6b6b3e2df875f17482e&'
        },
    ]
}