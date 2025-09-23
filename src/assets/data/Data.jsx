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
import pity from "../media/yourChannel_media/thumbnails/pity.jpg"
import deleted from "../media/yourChannel_media/Delete.png"
import imageIcon from "../media/yourChannel_media/Image-icon.png"
import poll from "../media/yourChannel_media/Poll-icon.png"
import quiz from "../media/yourChannel_media/Quiz-icon.png"
import videoIcon from "../media/yourChannel_media/Video-icon.png"

const popularChannels = [
    { name: "Angel", subs: "15k subs", photo: angelr },
    { name: "Thiago", subs: "20k subs", photo: thiagor },
    { name: "Jeremias", subs: "12k subs", photo: jerer },
    { name: "Genaro", subs: "30k subs", photo: genar },
    { name: "Aramis", subs: "25k subs", photo: aramis },
    { name: "Jonas", subs: "18k subs", photo: jonas },
    { name: "David", subs: "22k subs", photo: david },
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

const videoLatest = [
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
    { namevideo: "Duki en el Estadio", videoviews: "110k views • 11d ago", photo: duki },
    { namevideo: "Duki Acústico", videoviews: "80k views • 12d ago", photo: duki },
    { namevideo: "Duki en Radio", videoviews: "65k views • 13d ago", photo: duki },
    { namevideo: "Duki Colaboraciones", videoviews: "90k views • 14d ago", photo: duki },
    { namevideo: "Duki Sesión de Fotos", videoviews: "50k views • 15d ago", photo: duki },
    { namevideo: "Duki en Premios", videoviews: "77k views • 16d ago", photo: duki },
    { namevideo: "Duki en el Studio", videoviews: "58k views • 17d ago", photo: duki },
    { namevideo: "Duki Preguntas y Respuestas", videoviews: "62k views • 18d ago", photo: duki },
    { namevideo: "Duki Videoclip", videoviews: "130k views • 19d ago", photo: duki },
    { namevideo: "Duki Ensayo", videoviews: "48k views • 20d ago", photo: duki },
    { namevideo: "Duki Fans", videoviews: "73k views • 21d ago", photo: duki },
    { namevideo: "Duki Viaje", videoviews: "67k views • 22d ago", photo: duki },
    { namevideo: "Duki Making Of", videoviews: "52k views • 23d ago", photo: duki },
    { namevideo: "Duki Top Canciones", videoviews: "140k views • 24d ago", photo: duki },
    { namevideo: "Cabildo en vivo", videoviews: "90k views • 1d ago", photo: cabildo },
    { namevideo: "Cabildo Freestyle", videoviews: "75k views • 2d ago", photo: cabildo },
    { namevideo: "Cabildo Entrevista", videoviews: "50k views • 3d ago", photo: cabildo },
    { namevideo: "Cabildo Backstage", videoviews: "35k views • 4d ago", photo: cabildo },
    { namevideo: "Cabildo y Amigos", videoviews: "60k views • 5d ago", photo: cabildo },
    { namevideo: "Cabildo en el Estudio", videoviews: "45k views • 6d ago", photo: cabildo },
    { namevideo: "Cabildo Reaccionando", videoviews: "30k views • 7d ago", photo: cabildo },
    { namevideo: "Cabildo en TV", videoviews: "20k views • 8d ago", photo: cabildo },
    { namevideo: "Cabildo Documental", videoviews: "85k views • 9d ago", photo: cabildo },
    { namevideo: "Cabildo Mejores Momentos", videoviews: "110k views • 10d ago", photo: cabildo },
    { namevideo: "Cabildo en el Estadio", videoviews: "100k views • 11d ago", photo: cabildo },
    { namevideo: "Cabildo Acústico", videoviews: "70k views • 12d ago", photo: cabildo },
    { namevideo: "Cabildo en Radio", videoviews: "55k views • 13d ago", photo: cabildo },
    { namevideo: "Cabildo Colaboraciones", videoviews: "80k views • 14d ago", photo: cabildo },
    { namevideo: "Cabildo en Premios", videoviews: "67k views • 16d ago", photo: cabildo },
    { namevideo: "Cabildo en el Studio", videoviews: "48k views • 17d ago", photo: cabildo },
    { namevideo: "Cabildo Preguntas y Respuestas", videoviews: "52k views • 18d ago", photo: cabildo },
    { namevideo: "Cabildo Videoclip", videoviews: "120k views • 19d ago", photo: cabildo },
    { namevideo: "Cabildo Ensayo", videoviews: "38k views • 20d ago", photo: cabildo },
    { namevideo: "Cabildo Fans", videoviews: "63k views • 21d ago", photo: cabildo },
    { namevideo: "Cabildo Viaje", videoviews: "57k views • 22d ago", photo: cabildo },
    { namevideo: "Cabildo Making Of", videoviews: "42k views • 23d ago", photo: cabildo },
    { namevideo: "Cabildo Top Canciones", videoviews: "130k views • 24d ago", photo: cabildo },
    { namevideo: "Cabildo Especial", videoviews: "10k views • 1d ago", photo: cabildo },
];

const videoPopular = [
    { namevideo: "Cabildo Celebración", videoviews: "100k views • 1d ago", photo: cabildo },
    { namevideo: "Cabildo Historia Viva", videoviews: "85k views • 2d ago", photo: cabildo },
    { namevideo: "Cabildo Entrevista Exclusiva", videoviews: "60k views • 3d ago", photo: cabildo },
    { namevideo: "Cabildo Tras Bambalinas", videoviews: "45k views • 4d ago", photo: cabildo },
    { namevideo: "Cabildo y la Comunidad", videoviews: "70k views • 5d ago", photo: cabildo },
    { namevideo: "Cabildo en el Estudio", videoviews: "55k views • 6d ago", photo: cabildo },
    { namevideo: "Cabildo Reacciones", videoviews: "40k views • 7d ago", photo: cabildo },
    { namevideo: "Cabildo en TV", videoviews: "30k views • 8d ago", photo: cabildo },
    { namevideo: "Cabildo Documental", videoviews: "95k views • 9d ago", photo: cabildo },
    { namevideo: "Cabildo Grandes Momentos", videoviews: "120k views • 10d ago", photo: cabildo },
    { namevideo: "Cabildo en el Estadio", videoviews: "110k views • 11d ago", photo: cabildo },
    { namevideo: "Cabildo Acústico", videoviews: "80k views • 12d ago", photo: cabildo },
    { namevideo: "Cabildo en Radio", videoviews: "65k views • 13d ago", photo: cabildo },
    { namevideo: "Cabildo Colaboraciones", videoviews: "90k views • 14d ago", photo: cabildo },
    { namevideo: "Cabildo Sesión de Fotos", videoviews: "50k views • 15d ago", photo: cabildo },
    { namevideo: "Cabildo en Premios", videoviews: "77k views • 16d ago", photo: cabildo },
    { namevideo: "Cabildo en el Studio", videoviews: "58k views • 17d ago", photo: cabildo },
    { namevideo: "Cabildo Preguntas y Respuestas", videoviews: "62k views • 18d ago", photo: cabildo },
    { namevideo: "Cabildo Videoclip", videoviews: "130k views • 19d ago", photo: cabildo },
    { namevideo: "Cabildo Ensayo", videoviews: "48k views • 20d ago", photo: cabildo },
    { namevideo: "Cabildo Fans", videoviews: "73k views • 21d ago", photo: cabildo },
    { namevideo: "Cabildo Viaje", videoviews: "67k views • 22d ago", photo: cabildo },
    { namevideo: "Cabildo Making Of", videoviews: "52k views • 23d ago", photo: cabildo },
    { namevideo: "Cabildo Top Videos", videoviews: "140k views • 24d ago", photo: cabildo },
    { namevideo: "Cabildo Especial", videoviews: "10k views • 1d ago", photo: cabildo },
];

const videoOldest = [
    { namevideo: "Video Clásico 1", videoviews: "100k views • 1d ago", photo: video },
    { namevideo: "Video Clásico 2", videoviews: "85k views • 2d ago", photo: video },
    { namevideo: "Video Clásico 3", videoviews: "60k views • 3d ago", photo: video },
    { namevideo: "Video Clásico 4", videoviews: "45k views • 4d ago", photo: video },
    { namevideo: "Video Clásico 5", videoviews: "70k views • 5d ago", photo: video },
    { namevideo: "Video Clásico 6", videoviews: "55k views • 6d ago", photo: video },
    { namevideo: "Video Clásico 7", videoviews: "40k views • 7d ago", photo: video },
    { namevideo: "Video Clásico 8", videoviews: "30k views • 8d ago", photo: video },
    { namevideo: "Video Clásico 9", videoviews: "95k views • 9d ago", photo: video },
    { namevideo: "Video Clásico 10", videoviews: "120k views • 10d ago", photo: video },
    { namevideo: "Video Clásico 11", videoviews: "110k views • 11d ago", photo: video },
    { namevideo: "Video Clásico 12", videoviews: "80k views • 12d ago", photo: video },
    { namevideo: "Video Clásico 13", videoviews: "65k views • 13d ago", photo: video },
    { namevideo: "Video Clásico 14", videoviews: "90k views • 14d ago", photo: video },
    { namevideo: "Video Clásico 15", videoviews: "50k views • 15d ago", photo: video },
    { namevideo: "Video Clásico 16", videoviews: "77k views • 16d ago", photo: video },
    { namevideo: "Video Clásico 17", videoviews: "58k views • 17d ago", photo: video },
    { namevideo: "Video Clásico 18", videoviews: "62k views • 18d ago", photo: video },
    { namevideo: "Video Clásico 19", videoviews: "130k views • 19d ago", photo: video },
    { namevideo: "Video Clásico 20", videoviews: "48k views • 20d ago", photo: video },
    { namevideo: "Video Clásico 21", videoviews: "73k views • 21d ago", photo: video },
    { namevideo: "Video Clásico 22", videoviews: "67k views • 22d ago", photo: video },
    { namevideo: "Video Clásico 23", videoviews: "52k views • 23d ago", photo: video },
    { namevideo: "Video Clásico 24", videoviews: "140k views • 24d ago", photo: video },
    { namevideo: "Video Clásico Especial", videoviews: "10k views • 1d ago", photo: video },
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

const shortsLatest = Array.from({ length: 150 }, (_, i) => ({
    nameshort: `Latest Short #${i + 1}`,
    shortviews: `${Math.floor(Math.random() * 20) + 1}k views • ${i + 1}d ago`,
    photo: short,
}));

const shortsPopular = Array.from({ length: 150 }, (_, i) => ({
    nameshort: `Popular Short #${i + 1}`,
    shortviews: `${Math.floor(Math.random() * 100) + 20}k views • ${i + 1}d ago`,
    photo: short,
}));

const shortsOldest = Array.from({ length: 150 }, (_, i) => ({
    nameshort: `Oldest Short #${i + 1}`,
    shortviews: `${Math.floor(Math.random() * 10) + 1}k views • ${50 - i}d ago`,
    photo: short,
}));

const playlists = [
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
    { namevideo: "Duki en el Estadio", videoviews: "110k views • 11d ago", photo: duki },
    { namevideo: "Duki Acústico", videoviews: "80k views • 12d ago", photo: duki },
    { namevideo: "Duki en Radio", videoviews: "65k views • 13d ago", photo: duki },
    { namevideo: "Duki Colaboraciones", videoviews: "90k views • 14d ago", photo: duki },
    { namevideo: "Duki Sesión de Fotos", videoviews: "50k views • 15d ago", photo: duki },
    { namevideo: "Duki en Premios", videoviews: "77k views • 16d ago", photo: duki },
    { namevideo: "Duki en el Studio", videoviews: "58k views • 17d ago", photo: duki },
    { namevideo: "Duki Preguntas y Respuestas", videoviews: "62k views • 18d ago", photo: duki },
    { namevideo: "Duki Videoclip", videoviews: "130k views • 19d ago", photo: duki },
    { namevideo: "Duki Ensayo", videoviews: "48k views • 20d ago", photo: duki },
    { namevideo: "Duki Fans", videoviews: "73k views • 21d ago", photo: duki },
    { namevideo: "Duki Viaje", videoviews: "67k views • 22d ago", photo: duki },
    { namevideo: "Duki Making Of", videoviews: "52k views • 23d ago", photo: duki },
    { namevideo: "Duki Top Canciones", videoviews: "140k views • 24d ago", photo: duki },
    { namevideo: "Cabildo en vivo", videoviews: "90k views • 1d ago", photo: cabildo },
    { namevideo: "Cabildo Freestyle", videoviews: "75k views • 2d ago", photo: cabildo },
    { namevideo: "Cabildo Entrevista", videoviews: "50k views • 3d ago", photo: cabildo },
    { namevideo: "Cabildo Backstage", videoviews: "35k views • 4d ago", photo: cabildo },
    { namevideo: "Cabildo y Amigos", videoviews: "60k views • 5d ago", photo: cabildo },
    { namevideo: "Cabildo en el Estudio", videoviews: "45k views • 6d ago", photo: cabildo },
    { namevideo: "Cabildo Reaccionando", videoviews: "30k views • 7d ago", photo: cabildo },
    { namevideo: "Cabildo en TV", videoviews: "20k views • 8d ago", photo: cabildo },
    { namevideo: "Cabildo Documental", videoviews: "85k views • 9d ago", photo: cabildo },
    { namevideo: "Cabildo Mejores Momentos", videoviews: "110k views • 10d ago", photo: cabildo },
    { namevideo: "Cabildo en el Estadio", videoviews: "100k views • 11d ago", photo: cabildo },
    { namevideo: "Cabildo Acústico", videoviews: "70k views • 12d ago", photo: cabildo },
    { namevideo: "Cabildo en Radio", videoviews: "55k views • 13d ago", photo: cabildo },
    { namevideo: "Cabildo Colaboraciones", videoviews: "80k views • 14d ago", photo: cabildo },
    { namevideo: "Cabildo en Premios", videoviews: "67k views • 16d ago", photo: cabildo },
    { namevideo: "Cabildo en el Studio", videoviews: "48k views • 17d ago", photo: cabildo },
    { namevideo: "Cabildo Preguntas y Respuestas", videoviews: "52k views • 18d ago", photo: cabildo },
    { namevideo: "Cabildo Videoclip", videoviews: "120k views • 19d ago", photo: cabildo },
    { namevideo: "Cabildo Ensayo", videoviews: "38k views • 20d ago", photo: cabildo },
    { namevideo: "Cabildo Fans", videoviews: "63k views • 21d ago", photo: cabildo },
    { namevideo: "Cabildo Viaje", videoviews: "57k views • 22d ago", photo: cabildo },
    { namevideo: "Cabildo Making Of", videoviews: "42k views • 23d ago", photo: cabildo },
    { namevideo: "Cabildo Top Canciones", videoviews: "130k views • 24d ago", photo: cabildo },
    { namevideo: "Cabildo Especial", videoviews: "10k views • 1d ago", photo: cabildo },
];

const iconos = [
    { name: "Poll", src: poll },
    { name: "Quiz", src: quiz },
    { name: "Video", src: videoIcon },
    { name: "Image", src: imageIcon },
];

const postVideos = [
    {
        id: 'rust-solo',
        thumbnail: duki,
        title: 'title of video – title of video – title of video – title of video',
        description: 'Rust - Solo vs Clans'
    },
    {
        id: 'cuphead-first',
        thumbnail: duki,
        title: 'title of video – title of video – title of video – title of video',
        description: 'Cuphead - First Time'
    },

];

const unpublishedVideos = [
    {
        id: 'video-1',
        thumbnail: duki,
        title: 'title of video – title of video – title of video – title of video',
    },
    {
        id: 'video-2',
        thumbnail: duki, 
        title: 'another title – another title – another title – another title',
    },
];

const trending = [
    { title: "Epic Cat Tricks", nombre: "CatMaster", vistas: "12k views", ano: "1 year", description: "Watch these cats perform amazing tricks!" },
    { title: "Cooking with Laura", nombre: "LauraChef", vistas: "8.5k views", ano: "2 years", description: "Delicious recipes and cooking tips from Laura." },
    { title: "Travel Vlog: Japan", nombre: "WanderWorld", vistas: "20k views", ano: "3 years", description: "Join us as we explore the wonders of Japan." },
    { title: "Tech Unboxing 2024", nombre: "TechGuru", vistas: "15k views", ano: "6 months", description: "Unboxing and reviewing the latest gadgets." },
    { title: "Funny Dog Moments", nombre: "DogLover", vistas: "30k views", ano: "2 weeks", description: "A compilation of the funniest dog moments." },
    { title: "Fitness at Home", nombre: "FitLife", vistas: "5k views", ano: "4 months", description: "Easy home workouts for everyone." },
    { title: "Art Tutorial: Watercolor", nombre: "ArtByAna", vistas: "3.2k views", ano: "1 month", description: "Step-by-step watercolor painting tutorial." }
]

const trendingshorts = Array.from({ length: 30 }, (_, i) => ({
    nameshort: `Trending Short #${i + 1}`,
    shortviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: short,
}));

const catscribersshorts = Array.from({ length: 30 }, (_, i) => ({
    nameshort: `Catscribers Short #${i + 1}`,
    shortviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: short,
}));

const educationshorts = Array.from({ length: 30 }, (_, i) => ({
    nameshort: `Education Short #${i + 1}`,
    shortviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: short,
}));

const historyvideo = Array.from({ length: 30 }, (_, i) => ({
    namevideo: `History Video #${i + 1}`,
    videoviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: cabildo,
}));

const playlistvideo = Array.from({ length: 30 }, (_, i) => ({
    namevideo: `Playlists Video #${i + 1}`,
    videoviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: duki,
}));

const viewlatervideo = Array.from({ length: 30 }, (_, i) => ({
    namevideo: `View Later Video #${i + 1}`,
    videoviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: frogjumping,
}));

const likedvideo = Array.from({ length: 30 }, (_, i) => ({
    namevideo: `Liked Video #${i + 1}`,
    videoviews: `${Math.floor(Math.random() * 50) + 10}k views • ${i + 1}d ago`,
    photo: rabbits,
}));

const myPlaylistsData = Array.from({ length: 12 }, (_, i) => ({
    id: `pl-${String(i + 1).padStart(3, '0')}`,
    thumbnail: duki,
    videoCount: Math.floor(Math.random() * 50) + 1,
    name: `Playlist #${i + 1}`,
    visibility: i % 2 === 0 ? 'public' : 'private',
}));

const ViewLaterData = Array.from({ length: 12 }, (_, i) => ({
    id: `pl-${String(i + 1).padStart(3, '0')}`,
    thumbnail: cabildo,
    videoCount: Math.floor(Math.random() * 50) + 1,
    name: `View Later #${i + 1}`,
    visibility: i % 2 === 0 ? 'public' : 'private',
}));

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

export { popularChannels, shorts, videos, textfooter, leftMenu, recommendedVideos, foryouvideos, shortsyc, videosyc, videoLatest, videoPopular, videoOldest, shortsLatest, shortsPopular, shortsOldest, playlists, iconos, postVideos, unpublishedVideos, trending, trendingshorts, catscribersshorts, educationshorts, historyvideo, likedvideo, viewlatervideo, playlistvideo, myPlaylistsData, ViewLaterData };
