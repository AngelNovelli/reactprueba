import angel from "../media/profile/angel.jpg"
import jeremias from "../media/profile/jere.jpg"
import thiago from "../media/profile/yukki.jpg"
import genaro from "../media/profile/gena.jpg"
import aramis from "../media/profile/aramis.jpg"
import jonas from "../media/profile/jonas.jpg"
import david from "../media/profile/david.jpg"
import nicolas from "../media/profile/nicolas.jpg"
import tiziano from "../media/profile/tiziano.jpg"
import angelr from "../media/profile/angelr.jpg"
import genar from "../media/profile/genar.jpg"
import thiagor from "../media/profile/thiago.jpg"
import jerer from "../media/profile/jerer.jpg"
import laura from "../media/profile/laura.jpg"
import short from "../media/thumbnails/shorts.jpg"
import video from "../media/thumbnails/pinterest_swap_challenge.jpg"
import videorecommended from "../media/thumbnails/miniatura.jpg"
import funnycats from "../media/thumbnails/funnycats.jpg"
import amazingdogs from "../media/thumbnails/amazingdogs.jpg"
import parrotstalking from "../media/thumbnails/parrotstalking.jpg"
import rabbits from "../media/thumbnails/rabbits.jpg"
import fitness from "../media/thumbnails/fitness.jpg"
import cooking from "../media/thumbnails/cooking.jpg"
import cookingshow from "../media/thumbnails/cookingshow.jpg"
import frogjumping from "../media/thumbnails/frogjumping.jpg"
import tech from "../media/thumbnails/tech.jpg"
import travel from "../media/thumbnails/travel.jpg"
import gaming from "../media/thumbnails/gaming.jpg" 
import wildlife from "../media/thumbnails/wildlife.jpg" 
import cabildo from "../media/yourChannel_media/thumbnails/cabildo.png"
import cjs from "../media/yourChannel_media/thumbnails/cjs.jpg"
import duki from "../media/yourChannel_media/thumbnails/duki.jpeg"

const popularChannels = [
    { name: "Angel", subs: "15k subs", photo: angelr },
    { name: "Thiago", subs: "20k subs", photo: thiagor },
    { name: "Jeremias", subs: "12k subs", photo: jerer },
    { name: "Genaro", subs: "30k subs", photo: genar },
    { name: "Aramis", subs: "25k subs", photo: aramis },
    { name: "Jonas", subs: "18k subs", photo: jonas },
    { name: "David", subs: "22k subs", photo: david},
    { name: "Nicolas", subs: "28k subs", photo: nicolas },
    { name: "Tiziano", subs: "17k subs", photo: tiziano },
    { name: "Laura", subs: "14k subs", photo: laura },
    { name: "Eduardo", subs: "16k subs", photo: thiagor },
    { name: "Fernanda", subs: "19k subs", photo: jerer },
    { name: "Gustavo", subs: "21k subs", photo: genar },
    { name: "Isabel", subs: "13k subs", photo: angelr },
    { name: "João", subs: "29k subs", photo: genar },
    { name: "Lucas", subs: "24k subs", photo: jeremias },
    { name: "Mariana", subs: "23k subs", photo: thiago },
    { name: "Gustavo", subs: "21k subs", photo: angel },
    { name: "Helena", subs: "17k subs", photo: angel },
    { name: "Isabel", subs: "13k subs", photo: angel },
    { name: "João", subs: "29k subs", photo: angel },
    { name: "Lucas", subs: "24k subs", photo: angel },
    { name: "Mariana", subs: "23k subs", photo: angel },
    { name: "Gustavo", subs: "21k subs", photo: angel },
    { name: "Helena", subs: "17k subs", photo: angel },
    { name: "Isabel", subs: "13k subs", photo: angel },
    { name: "João", subs: "29k subs", photo: angel },
    { name: "Lucas", subs: "24k subs", photo: angel },
    { name: "Mariana", subs: "23k subs", photo: angel },
    { name: "Gustavo", subs: "21k subs", photo: genaro },
    { name: "Helena", subs: "17k subs", photo: jeremias },
    { name: "Isabel", subs: "13k subs", photo: angel },
    { name: "João", subs: "29k subs", photo: angel },
    { name: "Lucas", subs: "24k subs", photo: genaro },
    { name: "Mariana", subs: "23k subs", photo: angel },

];

const shorts = [
    { nameshort: "Funny Cats", shortviews: "9k views • 1d ago", photo: funnycats },
    { nameshort: "Amazing Dogs", shortviews: "12k views • 2d ago", photo: amazingdogs },
    { nameshort: "Wildlife Wonders", shortviews: "15k views • 3d ago", photo: wildlife },
    { nameshort: "Travel Vlogs", shortviews: "20k views • 4d ago", photo: travel },
    { nameshort: "Tech Reviews", shortviews: "8k views • 5d ago", photo: tech },
    { nameshort: "Cooking Tips", shortviews: "11k views • 6d ago", photo: cooking },
    { nameshort: "Fitness Routines", shortviews: "14k views • 7d ago", photo: fitness },
    { nameshort: "Gaming Highlights", shortviews: "13k views • 9d ago", photo: gaming },
    { nameshort: "Music Covers", shortviews: "10k views • 10d ago", photo: short },
    { nameshort: "Art Tutorials", shortviews: "6k views • 11d ago", photo: short },
    { nameshort: "Pet Tricks", shortviews: "7k views • 12d ago", photo: short },
    { nameshort: "Comedy Skits", shortviews: "16k views • 13d ago", photo: short },
    { nameshort: "Quick Recipes", shortviews: "18k views • 14d ago", photo: short },
    { nameshort: "Life Hacks", shortviews: "21k views • 15d ago", photo: short },
    { nameshort: "Street Interviews", shortviews: "5k views • 16d ago", photo: short },
    { nameshort: "Motivational Quotes", shortviews: "8k views • 17d ago", photo: short },
    { nameshort: "Dance Moves", shortviews: "19k views • 18d ago", photo: short },
    { nameshort: "Nature Clips", shortviews: "17k views • 19d ago", photo: short },
    { nameshort: "Unboxing Gadgets", shortviews: "22k views • 20d ago", photo: short },
    { nameshort: "DIY Crafts", shortviews: "4k views • 21d ago", photo: short },
];

const videos = [
    { namevideo: "Cats Playing", videoviews: "5k views • 1d ago", photo: video },
    { namevideo: "Dogs Barking", videoviews: "8k views • 2d ago", photo: video },
    { namevideo: "Birds Singing", videoviews: "10k views • 3d ago", photo: video },
    { namevideo: "Fish Swimming", videoviews: "7k views • 4d ago", photo: video },
    { namevideo: "Hamsters Running", videoviews: "6k views • 5d ago", photo: video },
    { namevideo: "Turtles Crawling", videoviews: "3k views • 7d ago", photo: video },
    { namevideo: "Lizards Sunbathing", videoviews: "2k views • 8d ago", photo: video },
    { namevideo: "Parrots Talking", videoviews: "12k views • 6d ago", photo: parrotstalking },
    { namevideo: "Guinea Pigs Eating", videoviews: "1k views • 10d ago", photo: video },
    { namevideo: "Frogs Jumping", videoviews: "900 views • 11d ago", photo: frogjumping },
    { namevideo: "Rabbits Hopping", videoviews: "4k views • 5d ago", photo: rabbits },
    { namevideo: "Kittens Purring", videoviews: "15k views • 1d ago", photo: video },
    { namevideo: "Puppies Playing", videoviews: "20k views • 4d ago", photo: video },
    { namevideo: "Wildlife Documentary", videoviews: "50k views • 8d ago", photo: video },
    { namevideo: "Travel Guide", videoviews: "18k views • 9d ago", photo: travel },
    { namevideo: "Tech Unboxing", videoviews: "22k views • 7d ago", photo: video },
    { namevideo: "Cooking Show", videoviews: "16k views • 12d ago", photo: video },
    { namevideo: "Workout Routine", videoviews: "14k views • 13d ago", photo: video },
    { namevideo: "Gaming Stream", videoviews: "28k views • 14d ago", photo: video },
    { namevideo: "Music Video", videoviews: "35k views • 15d ago", photo: video },
    { namevideo: "Art Process", videoviews: "9k views • 16d ago", photo: video },
    { namevideo: "DIY Project", videoviews: "11k views • 17d ago", photo: video },
    { namevideo: "Movie Trailer", videoviews: "40k views • 18d ago", photo: video },
    { namevideo: "Book Review", videoviews: "3k views • 19d ago", photo: video },
    { namevideo: "Science Experiment", videoviews: "8k views • 20d ago", photo: video },
];

const recommendedVideos = [
    { namevideorecommended: "Swap Challenge", videoviewsrecommended: "25k views • 2d ago", photorecommended: videorecommended },
    { namevideorecommended: "Dance Off", videoviewsrecommended: "30k views • 3d ago", photorecommended: videorecommended },
    { namevideorecommended: "Guinea Pigs Eating", videoviewsrecommended: "1k views • 10d ago", photorecommended: videorecommended },
    { namevideorecommended: "Frogs Jumping", videoviewsrecommended: "900 views • 11d ago", photorecommended: frogjumping },
    { namevideorecommended: "Rabbits Hopping", videoviewsrecommended: "4k views • 5d ago", photorecommended: rabbits },
    { namevideorecommended: "Parrots Talking", videoviewsrecommended: "12k views • 6d ago", photorecommended: parrotstalking },
    { namevideorecommended: "Kittens Purring", videoviewsrecommended: "15k views • 1d ago", photorecommended: videorecommended },
    { namevideorecommended: "Puppies Playing", videoviewsrecommended: "20k views • 4d ago", photorecommended: videorecommended },
    { namevideorecommended: "Wildlife Documentary", videoviewsrecommended: "50k views • 8d ago", photorecommended: videorecommended },
    { namevideorecommended: "Travel Guide", videoviewsrecommended: "18k views • 9d ago", photorecommended: videorecommended },
    { namevideorecommended: "Tech Unboxing", videoviewsrecommended: "22k views • 7d ago", photorecommended: videorecommended },
    { namevideorecommended: "Cooking Show", videoviewsrecommended: "16k views • 12d ago", photorecommended: cookingshow },
    { namevideorecommended: "Workout Routine", videoviewsrecommended: "14k views • 13d ago", photorecommended: videorecommended },
    { namevideorecommended: "Gaming Stream", videoviewsrecommended: "28k views • 14d ago", photorecommended: videorecommended },
    { namevideorecommended: "Music Video", videoviewsrecommended: "35k views • 15d ago", photorecommended: videorecommended },
    { namevideorecommended: "Art Process", videoviewsrecommended: "9k views • 16d ago", photorecommended: videorecommended },
    { namevideorecommended: "DIY Project", videoviewsrecommended: "11k views • 17d ago", photorecommended: videorecommended },
    { namevideorecommended: "Movie Trailer", videoviewsrecommended: "40k views • 18d ago", photorecommended: videorecommended },
    { namevideorecommended: "Book Review", videoviewsrecommended: "3k views • 19d ago", photorecommended: videorecommended },
    { namevideorecommended: "Science Experiment", videoviewsrecommended: "8k views • 20d ago", photorecommended: videorecommended },

];

const foryouvideos = [
    { namevideo: "Cabildo History", videoviews: "2k views • 1d ago", photo: cabildo },
    { namevideo: "Inside the Cabildo", videoviews: "3.5k views • 2d ago", photo: cabildo },
    { namevideo: "Cabildo at Night", videoviews: "1.2k views • 3d ago", photo: cabildo },
    { namevideo: "Cabildo Restoration", videoviews: "4k views • 4d ago", photo: cabildo },
    { namevideo: "Cabildo Guided Tour", videoviews: "2.8k views • 5d ago", photo: cabildo },
    { namevideo: "Cabildo Events", videoviews: "900 views • 6d ago", photo: cabildo },
    { namevideo: "Cabildo Architecture", videoviews: "1.7k views • 7d ago", photo: cabildo },
    { namevideo: "Cabildo Legends", videoviews: "2.3k views • 8d ago", photo: cabildo },
    { namevideo: "Cabildo Documentary", videoviews: "5k views • 9d ago", photo: cabildo },
    { namevideo: "Cabildo in Art", videoviews: "1.1k views • 10d ago", photo: cabildo },
];

const videosyc = [
    { namevideo: "Duki en vivo", videoviews: "100k views • 1d ago", photo: duki },
    { namevideo: "Duki Freestyle", videoviews: "85k views • 2d ago", photo: duki },
    { namevideo: "Duki Entrevista", videoviews: "60k views • 3d ago", photo: duki },
    { namevideo: "Duki Backstage", videoviews: "45k views • 4d ago", photo: duki },
    { namevideo: "Duki y Amigos", videoviews: "70k views • 5d ago", photo: duki },
    { namevideo: "Duki en el Estudio", videoviews: "55k views • 6d ago", photo: duki },
    { namevideo: "Duki Reaccionando", videoviews: "40k views • 7d ago", photo: duki },
    { namevideo: "Duki en TV", videoviews: "30k views • 8d ago", photo: duki },
    { namevideo: "Duki Documental", videoviews: "95k views • 9d ago", photo: duki },
    { namevideo: "Duki Mejores Momentos", videoviews: "120k views • 10d ago", photo: duki },
];

const shortsyc = [
    { nameshort: "Cat Yoga Challenge", shortviews: "7k views • 1d ago", photo: cjs },
    { nameshort: "Epic Cat Jumps", shortviews: "15k views • 2d ago", photo: cjs },
    { nameshort: "Cat Snack Attack", shortviews: "11k views • 3d ago", photo: cjs },
    { nameshort: "Funny Cat Reactions", shortviews: "18k views • 4d ago", photo: cjs },
    { nameshort: "Cat vs Laser", shortviews: "22k views • 5d ago", photo: cjs },
    { nameshort: "Kitten Hide & Seek", shortviews: "9k views • 6d ago", photo: cjs },
    { nameshort: "Cat Nap Time", shortviews: "13k views • 7d ago", photo: cjs },
    { nameshort: "Cats in Boxes", shortviews: "17k views • 8d ago", photo: cjs },
    { nameshort: "Cat Fails Compilation", shortviews: "20k views • 9d ago", photo: cjs },
    { nameshort: "Cat Siblings Play", shortviews: "8k views • 10d ago", photo: cjs },
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

export { popularChannels, shorts, videos, textfooter, leftMenu, recommendedVideos, foryouvideos, shortsyc, videosyc };
