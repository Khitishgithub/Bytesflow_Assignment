export function resultImage() {
  const imageArray = [
    
    'lionimage',
    'cat',
    'Dragon',
    'snake',
    'Dolphin',
    'gorilla',
   
  ];
  const randomImg = imageArray[Math.floor(Math.random() * imageArray.length)];
  return `/assets/output_img/${randomImg}.jpg`;
}
