let images = ['./png/fb/fb_png_compressed/1.png', './png/fb/fb_png_compressed/2.png', './png/fb/fb_png_compressed/3.png', './png/fb/fb_png_compressed/4.png', './png/fb/fb_png_compressed/5.png', './png/fb/fb_png_compressed/6.png', './png/fb/fb_png_compressed/7.png', './png/fb/fb_png_compressed/8.png', './png/fb/fb_png_compressed/9.png', './png/fb/fb_png_compressed/10.png', './png/fb/fb_png_compressed/11.png', './png/fb/fb_png_compressed/12.png', './png/fb/fb_png_compressed/13.png', './png/fb/fb_png_compressed/14.png', './png/fb/fb_png_compressed/15.png', './png/fb/fb_png_compressed/16.png', './png/fb/fb_png_compressed/17.png', './png/fb/fb_png_compressed/18.png', './png/fb/fb_png_compressed/19.png', './png/fb/fb_png_compressed/20.png'];


function load() {
    let overlayImages = document.getElementById('overlay');
    images.forEach((imgPath, index) => {
        overlayImages.innerHTML += ` 
         <img onclick="openWindow(${index})" src="${imgPath}" alt="Pictures">
      `;
  });
}

let imageIndex = 0;

function openWindow(index) {
    imageIndex = index;
    let content = document.getElementById("overlay");
    let dynamicImages = document.getElementById("overlayImage");
    content.style.display = "inline-flex";
    dynamicImages.src = images[index];
}


function closeWindow() {
    document.getElementById("overlay").style.display = "none";
}

function changeImage(direction) {
    imageIndex += direction;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    } else if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    let slideImgs = document.getElementById("overlayImage");
    slideImgs.src = images[imageIndex];
}

//  Sidebar Functions

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex'

}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none'
}

window.addEventListener("resize", (event) => {

    if (window.innerWidth >= 800){
        hideSidebar();
    }
    
    });

