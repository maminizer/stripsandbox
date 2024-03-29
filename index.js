import { WorkItem } from "./js/workItem.js";
import { Preview } from "./js/preview.js";
import {preloadImages} from "./js/utils.js"
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.07,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
lenis.stop();


preloadImages('img').then(() => {
  // Once images are preloaded, remove the 'loading' indicator/class from the body
  document.body.classList.remove('loading');
  panelloader();
});

const panelloader = () => {
  const box_even = document.querySelectorAll(".box_even");
  const box_odd = document.querySelectorAll(".box_odd");
  const header_text = new SplitType("#text-hero");
  const image_hero = document.querySelector(".image-container");
  const navbar_divider = document.querySelector(".navbar span");
  const navbar_logo = document.querySelector("#navbar-logo");

  function enableLenis() {
    lenis.start();
  }

  // Images parallax
  const container = document.querySelector(".image-container");
  const img = container.querySelector(".image-parallax");

  const tl_banner = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    },
  });
  tl_banner.fromTo(
    img,
    {
      yPercent: -20,
      ease: "none",
    },
    {
      yPercent: 20,
      ease: "none",
    }
  );

  //   Initiate the timeline
  let tl = gsap.timeline({
    onComplete: enableLenis,
    defaults: {
      ease: "power4.inOut",
    },
  });

  box_even.forEach((box) => {
    tl.to(
      box,
      {
        y: "-105%",
        duration: 1.5,
        onComplete: () => gsap.set(box, { opacity: 0 }),
      },
      "start"
    );
  });

  box_odd.forEach((box) => {
    tl.to(
      box,
      {
        y: "105%",
        duration: 1.5,
        onComplete: () => gsap.set(box, { opacity: 0 }),
      },
      "start"
    );
  });
  tl.to(
    header_text.chars,
    {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
      ease: "power3.inOut",
    },
    "start"
  ),
    tl.fromTo(
      image_hero,
      {
        x: "100%",
        delay: 1,
        duration: 2,
        ease: "power4.inOut",
      },
      {
        x: "-0.05%",
        delay: 1,
        duration: 2,
        opacity : 1,
        ease: "power4.inOut",
      },
      "start"
    );
  tl.from(
    navbar_divider,
    {
      x: "-100%",
      delay: 1,
      duration: 2.3,
      ease: "power3.inOut",
    },
    "start"
  );
  tl.to(
    navbar_logo,
    {
      y: -50,
      delay: 2,
      duration: 1.2,
      ease: "power4.inOut",
    },
    "start"
  ),
    tl.to(
      ".menu_navbar",
      {
        y: 0,
        delay: 2.2,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "start"
    );
  tl.from(
    ".btn",
    {
      opacity: 0,
      y: 0,
      delay: 2.5,
      duration: 1.2,
      ease: "power4.inOut",
    },
    "start"
  );
};

// menu navigation animation
let tl_menu = gsap.timeline({ paused: true });
tl_menu
  .to(
    ".navbar",
    {
      opacity: 0,
      // duration: 1,
      ease: "power4.inOut",
    },
    "start"
  )
  .to(".navbar", {
    zIndex: -1,
  })
  .to(
    ".menu-container",
    {
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
    },
    "start"
  )
  .to(
    ".menu-container",
    {
      zIndex: 9999999,
      duration: 1,
      ease: "power4.inOut",
    },
    "start"
  )
  .from(
    ".left-menu",
    {
      y: "-100%",
      duration: 1.5,
      ease: "power4.inOut",
    },
    "start"
  )
  .from(
    ".right-menu",
    {
      y: "100%",
      duration: 1.5,
      ease: "power4.inOut",
    },
    "start"
  )
  .addLabel("AnimateRight", ">")
  .from(
    ".menu-btn a",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    "AnimateRight-=70%"
  )
  .from(
    ".menu-btn a",
    {
      y: "30%",
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    ">-1.3"
  )
  .from(
    ".menu-btn",
    {
      borderBottomWidth: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    ">-1.3"
  )
  .from(
    ".right-menu-info",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    "AnimateRight-=70%"
  )
  .from(
    ".right-menu-info",
    {
      y: "30%",
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    ">-1.3"
  )
  .addLabel("RightTitle", "<")
  .from(
    ".right-menu-socials",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    "RightTitle+=0.5"
  )
  .from(
    ".right-menu-socials",
    {
      y: "30%",
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    ">-1.3"
  )
  .from(
    ".right-menu-footer-divider",
    {
      width: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    ">-0.5"
  )
  .addLabel("RightFooter", "<")
  .from(
    ".right-menu-footer-info",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    "RightFooter+=0.5"
  )
  .from(
    ".right-menu-footer-info",
    {
      y: "30%",
      duration: 1,
      stagger: 0.05,
      ease: "power4.inOut",
    },
    ">-1.3"
  )
  .from(
    ".item-2",
    {
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
    },
    ">-1"
  );

function openMenu() {
  tl_menu.play();
}

function closeMenu() {
  tl_menu.reverse();
}

document.querySelector(".btn").addEventListener("click", () => {
  openMenu();
});

document.querySelector(".item-2").addEventListener("click", () => {
  closeMenu();
});

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let random = gsap.utils.random(0, 100, 4, true);
let randomImageSize = gsap.utils.random(200, 500, true);

function setImages() {
  const images = document.querySelectorAll(".image");
  images.forEach((image) => {
    let randomY = Math.round((random() * screenHeight) / 200);
    let randomW = Math.round(random() * screenWidth) / 100;

    //image.style.top = Math.round(screenHeight + randomY) + "px";
    image.style.top = Math.round(screenHeight) + "px";

    image.style.left = randomW + "px";

    if (screenWidth < 800) {
      image.style.width = Math.round(randomImageSize() / 3) + "px";
      console.log(
        (image.style.width = Math.round(randomImageSize() / 3) + "px")
      );
    } else {
      image.style.width = Math.round(randomImageSize()) + "px";
    }

    // Make larger images appear closer
    image.style.zIndex = Math.round(image.style.width.replace("px", "") / 40);
  });
}

const animateImageGallery = () => {
  gsap
    .to(".image", {
      y: function (index, target) {
        return -Math.round(target.offsetHeight + screenHeight) + "px";
      },
      ease: "none",
      duration: function (index, target) {
        return 10000 / target.style.width.replace("px", "");
      },
      stagger: {
        amount: 3,
        repeat: -1,
        delay: function (index, target) {
          return -10000 / target.style.width.replace("px", "");
        },
      },
    })
    .progress(0.5);
};

// GSAP Scroll Triggers work section
const scroll = () => {
  [...document.querySelectorAll("[data-split]")].forEach((el) => {
    animateWords(el);
  });
};

const animateWords = (el) => {
  // from: https://www.npmjs.com/package/split-type#splitting-text
  // Important: The following style should be applied to all target elements. This prevents the characters from shifting slightly when text is split/reverted.
  gsap.set(el, { "font-kerning": "none" });

  // Apply SplitType
  const st = new SplitType(el, { types: "lines, words" });

  const lines = st.lines;

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: "+=300%",
        scrub: true,
        pin: el,
      },
    })
    .set(el, { perspective: 1000 });

  for (const [linepos, line] of lines.entries()) {
    gsap.set(line, { transformStyle: "preserve-3d" });

    const words = line.querySelectorAll(".word");

    tl.to(
      words,
      {
        ease: "power2",
        opacity: 0,
        xPercent: (pos, _, arr) =>
          pos < arr.length / 2
            ? Math.abs(pos - arr.length / 2) * gsap.utils.random(-40, -10)
            : Math.abs(pos - arr.length / 2) * gsap.utils.random(10, 40),
        yPercent: (pos, _, arr) =>
          Math.abs(pos - arr.length / 2) * gsap.utils.random(-80, -40) - 150,
        rotationY: (pos, _, arr) =>
          pos > arr.length / 2
            ? Math.abs(pos - arr.length / 2) * -15
            : Math.abs(pos - arr.length / 2) * 15,
        z: (pos, _, arr) =>
          Math.abs(pos - arr.length / 2)
            ? gsap.utils.random(-40, -20)
            : gsap.utils.random(20, 40),
        stagger: {
          each: 0.01,
          from: "edges",
        },
      },
      linepos * 0.05
    );
  }
};

setImages();
animateImageGallery();
scroll();
// Expand the about us section
const aboutUsAnimation = gsap.to(".about-wrapper", {
  width: "100vw",
  ease: "back",
});

ScrollTrigger.create({
  trigger: ".about-title",
  start: "top center",
  end: "bottom center",
  scrub: 1,
  animation: aboutUsAnimation,
});

// Event section image full width animation
const eventAnimation = gsap.to(
  ".events-transition",
  {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  0
);

ScrollTrigger.create({
  trigger: ".events-transition",
  start: "top top",
  end: "+=30%",
  scrub: true,
  pin: true,
  animation: eventAnimation,
  markers: false,
});

// event section color fade transition
const eventImageFadeAnimation = gsap.to(".fullwidth-image__overlay", {
  opacity: 0.7,
});

ScrollTrigger.create({
  trigger: ".events-transition",
  start: "top top",
  end: "+=30%",
  scrub: 1,
  animation: eventImageFadeAnimation,
  markers: false, // Reference to your GSAP animation
});

// event section text reveal animation
const eventTextAnimation = gsap.from(".fullwidth-image__text", { opacity: 0 });

ScrollTrigger.create({
  trigger: ".events-transition",
  start: "top top",
  end: "+=30%",
  scrub: 1,
  animation: eventTextAnimation,
  markers: false, // Reference to your GSAP animation
});




// work subsection
const body = document.body;

// .content element
const contentEl = document.querySelector(".work-subcontent");

// top and bottom overlay overlay elements
const overlayRows = [...document.querySelectorAll(".overlay__row")];

// Preview instances array
const previews = [];
[...document.querySelectorAll(".preview")].forEach((preview) =>
  previews.push(new Preview(preview))
);

// Item instances array
const items = [];
[...document.querySelectorAll(".item")].forEach((item, pos) =>
  items.push(new WorkItem(item, previews[pos]))
);

const openItem = (item) => {
  gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: "power3.inOut",
      },
    })
    .add(() => {
      // pointer events none to the content
      contentEl.classList.add("content--hidden");
    }, "start")

    .addLabel("start", 0)
    .set(
      [item.preview.DOM.innerElements, item.preview.DOM.backCtrl],
      {
        opacity: 0,
      },
      "start"
    )
    .to(
      overlayRows,
      {
        scaleY: 1,
      },
      "start"
    )

    .addLabel("content", "start+=0.6")

    .add(() => {
      body.classList.add("preview-visible");
      body.style.overflow = "hidden";
      item.preview.DOM.el.classList.add("preview--current");
    }, "content")
    // Image animation (reveal animation)
    .to(
      [item.preview.DOM.image, item.preview.DOM.imageInner],
      {
        startAt: { y: (pos) => (pos ? "101%" : "-101%") },
        y: "0%",
      },
      "content"
    )

    .add(() => {
      for (const line of item.preview.multiLines) {
        line.in();
      }
      gsap.set(item.preview.DOM.multiLineWrap, {
        opacity: 1,
        delay: 0.1,
      });
    }, "content")
    // animate frame element
    .to(
      item.preview.DOM.innerElements,
      {
        ease: "expo",
        startAt: { yPercent: 101 },
        yPercent: 0,
        opacity: 1,
      },
      "content+=0.3"
    )
    .to(
      item.preview.DOM.backCtrl,
      {
        opacity: 1,
      },
      "content"
    );
};

const closeItem = (item) => {
  gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: "power3.inOut",
      },
    })
    .addLabel("start", 0)
    .to(
      item.preview.DOM.innerElements,
      {
        yPercent: -101,
        opacity: 0,
      },
      "start"
    )
    .add(() => {
      body.style.overflowY = "visible";
      for (const line of item.preview.multiLines) {
        line.out();
      }
    }, "start")

    .to(
      item.preview.DOM.backCtrl,
      {
        opacity: 0,
      },
      "start"
    )

    .to(
      item.preview.DOM.image,
      {
        y: "101%",
      },
      "start"
    )
    .to(
      item.preview.DOM.imageInner,
      {
        y: "-101%",
      },
      "start"
    )

    // animate frame element

    .addLabel("grid", "start+=0.6")

    .to(
      overlayRows,
      {
        //ease: 'expo',
        scaleY: 0,
        onComplete: () => {
          item.preview.DOM.el.classList.remove("preview--current");
          contentEl.classList.remove("content--hidden");
        },
      },
      "grid"
    );
};

for (const item of items) {
  // Opens the item preview
  item.DOM.link.addEventListener("click", () => openItem(item));
  // Closes the item preview
  item.preview.DOM.backCtrl.addEventListener("click", () => closeItem(item));
}


// animate text on scroll 

const tl_intro = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro-container",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    markers: 0,
}});

// tl_intro.from(
//   ".introduction",
//   {
//     opacity: 0,
//     duration: 1,
//     ease: "power4.inOut",
//   },
//   "start+=10%"
// )
// .from(
//   ".introduction",
//   {
//     y: "30%",
//     duration: 1,
//     ease: "power4.inOut",
//   },
//   "start"
// )
tl_intro.from(
  ".quote",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".quote",
  {
    y: "30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)
.from(
  ".quotation-mark",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".quotation-mark",
  {
    y: "30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)

const tl_about = gsap.timeline({
  scrollTrigger: {
    trigger: ".welcome-container",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_about.from(
  ".left-welcome",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
    stagger : 0.05
  },
  "start+=10%"
)
.from(
  ".left-welcome",
  {
    x: "30%",
    duration: 1,
    ease: "power4.inOut",
    stagger : 0.05
  },
  "start"
)

const tl_welcome = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-discription",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_welcome.from(
  ".contentLeft",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
    stagger : 0.05
  },
  "start+=10%"
)
.from(
  ".contentLeft",
  {
    x: "-30%",
    duration: 1,
    ease: "power4.inOut",
    stagger : 0.05
  },
  "start"
)
.from(
  ".contentRight",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
    stagger : 0.05
  },
  "start+=10%"
)
.from(
  ".contentRight",
  {
    x: "30%",
    duration: 1,
    ease: "power4.inOut",
    stagger : 0.05
  },
  "start"
)
// experiences section animation 

const tl_experience_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_experience_1.from(
  ".text-1",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".text-1",
  {
    y: "30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)

const tl_experience_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Img-1",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_experience_2.from(
  ".Img-1",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".Img-1",
  {
    x: "-30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)

const tl_experience_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".img-2",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_experience_3.from(
  ".img-2",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
    delay : 1,
  },
  "start+=10%"
)
.from(
  ".img-2",
  {
    x: "30%",
    duration: 1,
    ease: "power4.inOut",
    delay : 1,
  },
  "start"
)

const tl_experience_4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-2",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_experience_4.from(
  ".text-2",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".text-2",
  {
    x: "30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)

const tl_experience_5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".img-3",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_experience_5.from(
  ".img-3",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".img-3",
  {
    x: "-30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)

const tl_experience_6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-3",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    // markers: 1,
}});

tl_experience_6.from(
  ".text-3",
  {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  },
  "start+=10%"
)
.from(
  ".text-3",
  {
    y: "-30%",
    duration: 1,
    ease: "power4.inOut",
  },
  "start"
)


lenis.stop();
// storytelling section 

let lenis_new;
// Selecting DOM elements
const contentElements = [...document.querySelectorAll('.content--sticky')];
const totalContentElements = contentElements.length;

// Initializes Lenis for smooth scrolling with specific properties
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis_new = new Lenis({
		lerp: 0.2, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis_new.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis_new.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

// Function to handle scroll-triggered animations
const scroll_story = () => {

    contentElements.forEach((el, position) => {
        
		const isLast = position === totalContentElements-1;
		const isPreLast = position === totalContentElements-2;

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: () => {
					if ( isLast ) {
						return 'top top';
					}
					else if ( isPreLast ) {
						return 'bottom top';
					}
					else {
						return 'bottom+=100% top';
					}
				},
                end: '+=100%',
                scrub: true
            }
        })
        .to(el, {
			ease: 'none',
            yPercent: -100
        }, 0)


    });
  }

// Initialization function
const init = () => {
    initSmoothScrolling(); // Initialize Lenis for smooth scrolling
    scroll_story(); // Apply scroll-triggered animations
};

init();


const tl_storytelling_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".seperator-storytelling",
    start: "top bottom-=10%",
}});

tl_storytelling_1.from(
  ".seperator-storytelling",
  {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
  },
  "start+=10%"
)
.from(
  ".seperator-storytelling",
  {
    x: "100%",
    duration: 1.5,
    ease: "power4.out",
  },
  "start"
)



const tl_events_sep = gsap.timeline({
  scrollTrigger: {
    trigger: ".seperator-events",
    start: "top bottom-=10%",
}});

tl_events_sep.from(
  ".seperator-events",
  {
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
  },
  "start+=10%"
)
.from(
  ".seperator-events",
  {
    x: "-100%",
    duration: 1.5,
    ease: "power4.out",
  },
  "start"
)
