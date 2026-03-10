const BACKEND = "http://localhost:8080";

const photosBtn = document.getElementById("photosBtn");
const videosBtn = document.getElementById("videosBtn");
const container = document.getElementById("mediaContainer");

const viewer = document.getElementById("viewer");
const viewerContent = document.getElementById("viewerContent");
const downloadBtn = document.getElementById("downloadBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeViewer");

let items = [];
let currentType = "image";
let currentIndex = 0;

/* LOAD MEDIA */

async function load(){

const res = await fetch(BACKEND + "/api/gallery");

items = await res.json();

render();

}

/* RENDER GRID */

function render(){

container.innerHTML="";

items
.filter(i=>i.type===currentType)
.forEach((item,index)=>{

const card=document.createElement("div");
card.className="card";

let media;

if(item.type==="image"){

media=document.createElement("img");

}else{

media=document.createElement("video");
media.muted=true;

}

media.src=BACKEND+item.mediaUrl;

card.appendChild(media);

const title=document.createElement("div");
title.className="title";
title.textContent=item.title;

card.appendChild(title);

card.onclick=()=>openViewer(index);

container.appendChild(card);

});

}

/* OPEN VIEWER */

function openViewer(index){

const filtered=items.filter(i=>i.type===currentType);

currentIndex=index;

viewer.style.display="flex";

showMedia(filtered[currentIndex]);

}

/* SHOW MEDIA */

function showMedia(item){

viewerContent.innerHTML="";

let media;

if(item.type==="image"){

media=document.createElement("img");

}else{

media=document.createElement("video");
media.controls=true;
media.autoplay=true;

}

media.src=BACKEND+item.mediaUrl;

viewerContent.appendChild(media);

downloadBtn.href=BACKEND+item.mediaUrl;

}

/* NAVIGATION */

prevBtn.onclick=()=>{

const filtered=items.filter(i=>i.type===currentType);

currentIndex=(currentIndex-1+filtered.length)%filtered.length;

showMedia(filtered[currentIndex]);

};

nextBtn.onclick=()=>{

const filtered=items.filter(i=>i.type===currentType);

currentIndex=(currentIndex+1)%filtered.length;

showMedia(filtered[currentIndex]);

};

closeBtn.onclick=()=>viewer.style.display="none";

/* TABS */

photosBtn.onclick=()=>{

currentType="image";

photosBtn.classList.add("active");
videosBtn.classList.remove("active");

render();

};

videosBtn.onclick=()=>{

currentType="video";

videosBtn.classList.add("active");
photosBtn.classList.remove("active");

render();

};

load();