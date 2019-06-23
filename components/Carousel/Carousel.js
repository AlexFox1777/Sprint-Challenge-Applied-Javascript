/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.activeImg = this.carousel.querySelector('.active-img');
        console.log(this.activeImg);
        this.imgs = this.carousel.querySelectorAll('[data-img]');
        this.pic = this.carousel.querySelector(`[data-img='${this.imgIndex}']`);
        this.leftBtn.addEventListener('click', () => this.changeImg('left'));
        this.rightBtn.addEventListener('click', () => this.changeImg('right'));
        this.imgIndex = 0;
        /*this.leftBtn.addEventListener('click', () => this.leftButton());
        this.rightBtn.addEventListener('click', () => this.rightButton());*/
    }
    changeImg(direction){
        this.direction = direction;
        if(this.direction === 'right'){
            this.pic = this.carousel.querySelector(`[data-img='${++this.imgIndex}']`);
        } else this.pic  = this.carousel.querySelector(`[data-img='${--this.imgIndex}']`);
        this.activeImg.remove('active-img');
        const active = this.pic.classList.add('active-img');
     /*   console.log(this.imgIndex);
        console.log(this.pic);
        console.log(active);*/
    }
    // rightButton(){
    //     const nextImg = this.carousel.querySelector(`[data-img='${++this.imgIndex}']`);
    //     this.imgs.forEach(pic => pic.classList.remove('active-img'));
    //     nextImg.classList.add('.active-img');
    //     console.log(this.imgIndex);
    //     console.log(nextImg);
    // }
    // leftButton(){
    //     const pastImg = this.carousel.querySelector(`[data-img='${--this.imgIndex}']`);
    //     this.imgs.forEach(pic => pic.classList.remove('active-img'));
    //     pastImg.classList.add('.active-img');
    //     console.log(this.imgIndex);
    //     console.log(pastImg);
    // }
}

let carousel = document.querySelectorAll('.carousel')
    .forEach(one => new Carousel(one));


