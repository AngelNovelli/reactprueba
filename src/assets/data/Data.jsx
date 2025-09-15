import angel from "../../assets/angel.jpg"
import jeremias from "../../assets/jere.jpg"
import thiago from "../../assets/yukki.jpg"
import genaro from "../../assets/gena.jpg"
import short from "../../assets/shorts.jpg"
import video from "../../assets/pinterest_swap_challenge.jpg"

const popularChannels = [
    { name: "Angel", subs: "15k subs", photo: angel },
    { name: "Thiago", subs: "20k subs", photo: thiago },
    { name: "Jeremias", subs: "12k subs", photo: jeremias },
    { name: "Genaro", subs: "30k subs", photo: genaro },
    { name: "Maria", subs: "25k subs", photo: angel },
    { name: "Ana", subs: "18k subs", photo: angel },
    { name: "Beatriz", subs: "22k subs", photo: angel },
    { name: "Carlos", subs: "28k subs", photo: angel },
    { name: "Diana", subs: "14k subs", photo: angel },
    { name: "Eduardo", subs: "16k subs", photo: angel },
    { name: "Fernanda", subs: "19k subs", photo: angel },
    { name: "Gustavo", subs: "21k subs", photo: angel },
    { name: "Helena", subs: "17k subs", photo: angel },
    { name: "Isabel", subs: "13k subs", photo: angel },
    { name: "João", subs: "29k subs", photo: angel },
    { name: "Lucas", subs: "24k subs", photo: angel },
    { name: "Nicolas", subs: "27k subs", photo: angel },
];

const shorts = [
    { nameshort: "Funny Cats", shortviews: "9k views • 1d ago", photo: short },
    { nameshort: "Amazing Dogs", shortviews: "12k views • 2d ago", photo: short },
    { nameshort: "Wildlife Wonders", shortviews: "15k views • 3d ago", photo: short },
    { nameshort: "Travel Vlogs", shortviews: "20k views • 4d ago", photo: short },
    { nameshort: "Tech Reviews", shortviews: "8k views • 5d ago", photo: short },
    { nameshort: "Cooking Tips", shortviews: "11k views • 6d ago", photo: short },
    { nameshort: "Fitness Routines", shortviews: "14k views • 7d ago", photo: short },
    { nameshort: "Gaming Highlights", shortviews: "13k views • 9d ago", photo: short },
    { nameshort: "Music Covers", shortviews: "10k views • 10d ago", photo: short },
    { nameshort: "Art Tutorials", shortviews: "6k views • 11d ago", photo: short },
];

const videos = [
    { namevideo: "Cats Playing", videoviews: "5k views • 1d ago", photo: video },
    { namevideo: "Dogs Barking", videoviews: "8k views • 2d ago", photo: video },
    { namevideo: "Birds Singing", videoviews: "10k views • 3d ago", photo: video },
    { namevideo: "Fish Swimming", videoviews: "7k views • 4d ago", photo: video },
    { namevideo: "Hamsters Running", videoviews: "6k views • 5d ago", photo: video },
    { namevideo: "Turtles Crawling", videoviews: "3k views • 7d ago", photo: video },
    { namevideo: "Lizards Sunbathing", videoviews: "2k views • 8d ago", photo: video },
];

const textfooter = [
    { textfooter: "About" },
    { textfooter: "Press" },
    { textfooter: "Copyright" },
    { textfooter: "Contact us" },
    { textfooter: "Advertise" },
    { textfooter: "Developers" },
    { textfooter: "Terms" },
    { textfooter: "Privacy" },
    { textfooter: "Policy & Safety" },
    { textfooter: "How CaTube works" },
    { textfooter: "Test new features" },

];

const leftMenu = [
    { icon: "home", text: "Home", link: "/index.html" },
    
    { divider: true },
    
    { icon: "radar", text: "Discover", link: "/discover/discover.html" },
    { icon: "celebration", text: "CaTube Party", link: "/party/party.html" },
    { icon: "school", text: "CaTube Education", link: "/education/education.html" },

    { divider: true },

    { icon: "auto_awesome_motion", text: "Shorts", link: "/shorts/shorts.html" },
    { icon: "crown", text: "Trending", link: "/trending/trending.html" },
    { icon: "subscriptions", text: "Catscribers", link: "/subscribers/subscriptions.html" },

    { divider: true },

    { icon: "account_circle", text: "You", link: "/you/you.html" },
    { icon: "history", text: "History", link: "/you/you.html" },
    { icon: "playlist_play", text: "Playlist", link: "/you/you.html" },
    { icon: "schedule", text: "View later", link: "/you/you.html" },
    { icon: "favorite", text: "Liked", link: "/you/you.html" },
    { icon: "smart_display", text: "Your videos", link: "/studio/studio.html?section=content" },
];

export { popularChannels, shorts, videos, textfooter, leftMenu };
