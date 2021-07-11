const imgs = [
  "background_NC_001.jpg", 
  "background_NC_002.jpg", 
  "background_NC_003.jpg", 
  "background_NC_004.jpg", 
  "background_NC_005.jpg", 
  "background_NC_006.jpg", 
  "background_NC_007.jpg", 
  "background_NC_008.jpg", 
  "background_NC_009.jpg", 
  "background_NC_010.jpg", 
];

const chosenBackgroundImg = imgs[Math.floor(Math.random() * imgs.length)];

const backgroundImg = document.createElement('img');
backgroundImg.src = `img/${chosenBackgroundImg}`;

document.body.appendChild(backgroundImg);