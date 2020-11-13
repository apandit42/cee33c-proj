"use strict";
const Typed = window.Typed;
const anime = window.anime;

class SlideData {
    constructor() {
        this.slide1_choice = "";
        this.slide3_choice = "";
        this.slide5_choice = "";
    }
    setSlideData(slideNum, choiceVal) {
        this.current_slide = slideNum;
        if (slideNum == 1) {
            this.slide1_choice = choiceVal;
        } else if (slideNum == 3) {
            this.slide2_choice = choiceVal;
        } else {
            this.slide5_choice = choiceVal;
        }
    }
    getSlideData(slideNum) {
        if (slideNum == 2) {
            if (this.slide1_choice == "modern") {
                $("#q1_furn").load("loadsnippets/s2_modern.html", () => {
                    slideTo(slideNum);
                });
            } else if (this.slide1_choice == "minimal") {
                $("#q1_furn").load("loadsnippets/s2_minimal.html", () => {
                    slideTo(slideNum);
                });
            } else {
                $("#q1_furn").load("loadsnippets/s2_stylish.html", () => {
                    slideTo(slideNum);
                });
            }
        } else if (slideNum == 4) {
            if (this.slide3_choice == "alone") {
                $("#q2_furn").load("loadsnippets/s3_alone.html", () => {
                    slideTo(slideNum);
                });
            } else if (this.slide3_choice == "roommate") {
                $("#q2_furn").load("loadsnippets/s3_roommate.html", () => {
                    slideTo(slideNum);
                });
            } else {
                $("#q2_furn").load("loadsnippets/s3_family.html", () => {
                    slideTo(slideNum);
                });
            }
        } else if (slideNum == 6) {
            if (this.slide5_choice == "recycled") {
                $("#q3_furn").load("loadsnippets/s4_recycle.html", () => {
                    slideTo(slideNum);
                });
            } else if (this.slide5_choice == "ethics") {
                $("#q3_furn").load("loadsnippets/s4_ethics.html", () => {
                    slideTo(slideNum);
                });
            } else {
                $("#q3_furn").load("loadsnippets/s4_neutral.html", () => {
                    slideTo(slideNum);
                });
            }
        }
    }
}

let current_user = new SlideData();

function recycle_data(slideNum) {
    set_slide_data(slideNum, "recycled");
}

function ethics_data(slideNum) {
    set_slide_data(slideNum, "ethics");
}

function neutral_data(slideNum) {
    set_slide_data(slideNum, "neutral");
}

function alone_data(slideNum) {
    set_slide_data(slideNum, "alone");
}

function roommate_data(slideNum) {
    set_slide_data(slideNum, "roommate");
}

function family_data(slideNum) {
    set_slide_data(slideNum, "family");
}

function modern_data(slideNum) {
    set_slide_data(slideNum, "modern");
}

function minimal_data(slideNum) {
    set_slide_data(slideNum, "minimal");
}

function stylish_data(slideNum) {
    set_slide_data(slideNum, "stylish");
}

function set_slide_data(slideNum, choiceVal) {
    current_user.setSlideData(slideNum, choiceVal);
    console.log(choiceVal);
    let next_slide = slideNum + 1;
    console.log(next_slide);
    current_user.getSlideData(next_slide);
}

let intro_options = {
    strings: ['Welcome to <strong>IKEA</strong>!', 'Try our new house customizer and find the essentials perfect for you!'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 5000,
    backSpeed: 30,
};

let intro_typed = new Typed('.typed_intro', intro_options);

let slide1_options = {
    strings: ['', 'What is your <em>aesthetic</em>?'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 5000,
    backSpeed: 30,
};

let slide1_typed = new Typed('.typed_slide1', slide1_options);

let slide3_options = {
    strings: ['', 'How are you living these days?'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 5000,
    backSpeed: 30,
};

let slide3_typed = new Typed('.typed_slide3', slide3_options);

let slide5_options = {
    strings: ['', 'Which sustainability goal do you value most?'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 5000,
    backSpeed: 30,
};

let slide5_typed = new Typed('.typed_slide5', slide5_options);

function slideAfter0() {
    slideTo(1);
}

function slideTo(slideNum) {
    document.querySelector('main').scroll({left: window.innerWidth * slideNum, behavior: "smooth"});
    if (slideNum == 7) {
        document.querySelector('#ikea_anthem').play();
        let confettiSettings = { target: 'meatball_canvas' };
        let confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => {
            document.querySelector('#ikea_anthem').pause();
            confetti.clear();
            slideTo(8);
        }, 10000);
    }
}

function purchase_func() {
    document.querySelector('.final_click_evil').innerText = "Purchased";
    $(".final_click_evil").prop('onclick', null).off('click');
    document.querySelector('.bunguclickable').className = "bunguclickablegrid gap-x-2 items-center grid-rows-1 grid-cols-7 w-1/4 h-16 p-2 mr-20 mt-8";
    let bar = document.querySelector('.red_wine');
    bar.classList.toggle('bg-green-600');
    bar.classList.toggle('bg-red-800');
    document.querySelector('#final_house img.bungus').style.display = "none";
    document.querySelector('#final_house div.tungus').innerText = "Under the Surface";
    document.querySelector('#final_house').style.backgroundColor = '#b30000';
    document.querySelector('.title_bunk').style.color = '#ffffff';
    document.querySelector('.kitchen_func').style.color = '#ffffff';
    document.querySelector('.kitchen_func').className = "text-center kitchen_func text-5xl transition-all duration-300 text-gray-900 hover:text-6xl";
    document.querySelector('.kitchen_func').addEventListener('click', () => {
        $('#final_roomting').load('loadsnippets/kitchen_func.html', () => {
            slideTo(9);
        });
    });
    document.querySelector('.living_func').style.color = '#ffffff';
    document.querySelector('.living_func').className = "text-center living_func text-5xl transition-all duration-300 text-gray-900 hover:text-6xl";
    document.querySelector('.living_func').addEventListener('click', () => {
        $('#final_roomting').load('loadsnippets/living_func.html', () => {
            slideTo(9);
        });
    });
    document.querySelector('.bedroom_func').style.color = '#ffffff';
    document.querySelector('.bedroom_func').className = "text-center bedroom_func text-5xl transition-all duration-300 text-gray-900 hover:text-6xl";
    document.querySelector('.bedroom_func').addEventListener('click', () => {
        $('#final_roomting').load('loadsnippets/bedroom_func.html', () => {
            slideTo(9);
        });
    });
}