//Better markup examples than this, mostly meant to showcase / practice
const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px"
}

//take in an image source and reformat it correctly for later resizing
function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;

    for(let i = 0; i < 5; i++){
        markup[i] = imgSrc + "-" + width + ".jpg" + width + "w";
        width += 400;
    }

    return markup.join();
}

//loop through each image
for(let i = 0; i < IMAGES.length; i++){
    //find all actual images based on src
    let imgSrc = IMAGES[i].getAttribute("src");
    //slice off last 8 characters to have just image names
    imSrc = imgSrc.slice(0, -8);
    //create the srcset
    let srcset = makeSrcset(imgSrc);
    //set the image at i to correct srcset
    IMAGES[i].setAttribute("srcset", srcset);
    //grab html data type attribute
    let type = IMAGES[i].getAttribute("data-type");
    //get the sizes
    let sizes = SIZES[type];
    //set the sizes
    SIZES[i].setAttribute("sizes", sizes);
    
}