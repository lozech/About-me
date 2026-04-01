const blackBtn = document.querySelector(".black-toggle");
const whiteBtn = document.querySelector(".white-toggle");

blackBtn.addEventListener("click", ()=>{
    document.body.classList.add("black-page");
});

whiteBtn.addEventListener("click", () => {
    document.body.classList.remove("black-page");
});


const indexPage = document.querySelector("#index-page");
const lastPage = document.querySelector("#last-page");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.target.id === "index-page") {
                if (entry.isIntersecting) {
                    document.body.classList.add("index");
                } else {
                    document.body.classList.remove("index");
                }
            }

            if (entry.target.id === "last-page") {
                if (entry.isIntersecting) {
                    document.body.classList.add("last");
                } else {
                    document.body.classList.remove("last");
                }
            }
        });
    },
    {
        threshold: 0.6
    }
);

observer.observe(indexPage);
observer.observe(lastPage);



const uiSections = document.querySelectorAll(".ui-section");
const contentSections = document.querySelectorAll(".content-section");
const webSections = document.querySelectorAll(".web-section");

const uiMenu = document.querySelector(".ui-submenu");
const contentMenu = document.querySelector(".content-submenu");
const webMenu = document.querySelector(".web-submenu");

function createSubMenu(sections, container) {
    sections.forEach((_, i) => {
        const btn = document.createElement("span");
        btn.textContent = i + 1;

        btn.addEventListener("click", () => {
        sections[i].scrollIntoView({
            behavior: "smooth"
        });
        });

        container.appendChild(btn);
    });
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
    let timeout;

    item.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        item.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
        item.classList.remove("active");
        }, 200);
    });
});

document.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
});

createSubMenu(uiSections, uiMenu);
createSubMenu(contentSections, contentMenu);
createSubMenu(webSections, webMenu);

function createFirstUISection(type, title, leftImg, rightImg) {
    return `
        <div class="ui-inner">
            <p class="ui-title">UI Design</p>
            <p class="ui-desc2">Skill : Photoshop</p>
            

            <div class="ui-sub">
                <p class="type">Concept Type ${type}.</p>
                <p class="type-title">${title}</p>
            </div>

            <div class="ui-book">
                <img src="${leftImg}" alt="">
                <img src="${rightImg}" alt="" class="rightimg">
            </div>
        </div>
    `;
}

function createUISection(type, title, leftImg, rightImg) {
    return `
        <div class="ui-inner">
            <p class="ui-title">UI Design</p>

            <div class="ui-sub">
                <p class="type">Concept Type ${type}.</p>
                <p class="type-title">${title}</p>
            </div>

            <div class="ui-book">
                <img src="${leftImg}" alt="">
                <img src="${rightImg}" alt="" class="rightimg">
            </div>
        </div>
    `;
}

const sections = document.querySelectorAll(".ui-section");

const data = [
    [1, "Classic", "./images/fontana1.png", "./images/fontana2.png"],
    [2, "Kitsch", "./images/ably1.png", "./images/ably2.png"],
    [3, "Creepy Cute", "./images/world1.png", "./images/world2.png"],
];

sections.forEach((section, i) => {
    const [type, title, left, right] = data[i];

    if (i === 0) {
        section.innerHTML = createFirstUISection(type, title, left, right);
    } else {
        section.innerHTML = createUISection(type, title, left, right);
    }
});


function createContentSection(title, leftImg, rightImg, link, isFirst, desc1, desc2, desc3) {
    return `
        <div class="content-inner">
            <p class="content-title">${title}</p>

            <div class="content-sub">
                <p class="type2">사이트 주소 : </p>
                ${
                    link
                        ? `<a href="${link}" target="_blank" class="link-btn">${link}</a>`
                        : ""
                }
            </div>
                    
            ${desc1?.trim() ? `
                <div class="content-skill">
                    <p class="content-img-desc">
                        <span class="tits">Skills : </span>
                        <span class="skill">${desc1}</span>
                    </p>
                </div>
            ` : ""}

            <div class="content-book">
                <img src="${leftImg}" alt="">
                ${rightImg ? `<img src="${rightImg}" alt="" class="rightimg">` : ""}
            </div>
                
            <div class="content-wrap">
                ${desc2?.trim() ? `<p class="content-img-desc"><span class="tits">만든 페이지 : </span> ${desc2}</p>` : ""}
                ${desc3?.trim() ? `
                    <p class="content-img-desc2">
                        <span class="tits">기획의도 :</span>
                        <span class="desc-text">${desc3}</span>
                    </p>` : ""
                }
            </div>
            
        </div>
        `;
}

const sections2 = document.querySelectorAll(".content-section");

const data2 = [
    [
        1, "soopsori", "./images/soopsori.png", null, "https://lozech.github.io/soopsori/",
        "HTML5/CSS3/JS","메인", "숲소리는 자연의 공간을 구현하는 키즈 가구 브랜드입니다. 코딩을 처음 시작하며 제작한 페이지로, 환경과 아이들을 고려한 UX를 구현하고자 했습니다. 메인 페이지 구조와 퀵메뉴, 서브메뉴 등 기본적인 기능을 처음으로 직접 구현해보며 구조를 이해한 작업입니다."
    ],
    [
        2, "MAMMOTH COFFEE", "./images/mmth.png", null, "https://lozech.github.io/mmth/",
        "HTML5/CSS3/JS","메인", "합리적인 가격에 양질의 커피를 추구하는 커피브랜드 매머드커피입니다. 메인배너를 영상으로 채운 작업이 처음이었으며, 홍보적인 부분이 두각될 수 있도록 여러 애니메이션 효과들이 돋보일 수 있는 UI를 진행해보았습니다."],
    [
        3, "oth", "./images/oth.png", null, "https://lozech.github.io/oth/",
        "HTML5/CSS3","메인", "일상과 여행에서 얻은 영감을 오감으로 풀어내는 브랜드 오티에이치콤마(Oth,), 압화도구/독서링/무드등과 같이 인테리어 소품을 판매하는 브랜드인만큼 감각적인 부분이 잘 드러나는 것에 집중한 프로젝트였습니다."],
    [
        4, "Ably-event", "./images/ably-event1.png", "./images/ably-event2.png", "https://lozech.github.io/ably/",
        "HTML5/CSS3/JQuery","이벤트페이지", "처음으로 진행한 팀프로젝트로서 에이블리 쇼핑몰을 리뉴얼 해봤습니다. 기존 사이트의 PC버전 부재로 인해 리뉴얼 대상으로 선정하였습니다. 기존에 가독성이 떨어지던 이벤트 배너들을 상세페이지로 제작하며 기획 감각을 키웠습니다. 또한 의류브랜드로서의 감각을 부각하기 위해 JQuery를 활용해 인터랙션 기능을 직접 구현해봤습니다."],
    [
        5, "Something Play", "./images/something.png", null, "https://lozech.github.io/somethingplay/",
        "HTML5/CSS3/JQuery","메인", "파주 헤이리마을에 위치한 소품샵 브랜드, 기존 사이트의 파비콘과 로고를 감각적으로 재디자인해보며 주도적으로 기획하고자 했던 첫번째 사이트 입니다. 자바스크립트를 활용하여 캐러셀 기능도 구현하며 부가요소들을 더 활용해보고자 했습니다."],
    [
        6, "JO'S LOUNGE", "./images/jo's.png", null, "https://lozech.github.io/jo-s/",
        "HTML5/CSS3/JQuery","메인", "계절에 어울리는 가벼운 소재를 사용하여 편안한 공간을 구성하게 도와주는 잠옷 브랜드, 기존 사이트의 클래식한 감각을 살리기 위해 필요한 부분에 집중하였습니다. 큰 전환율 변화를 일으키지 않는 부분은 간추리고 가독성을 높이는 부분에 집중하여 리뉴얼을 진행했습니다."],
];

sections2.forEach((section2, i) => {
    const [type, title, left, right, link, desc1, desc2, desc3] = data2[i];

    if (title === "Ably-event") {
        section2.classList.add("double");
    }

    section2.innerHTML = createContentSection(
        title,
        left,
        right,
        link,
        i === 0,
        desc1,
        desc2,
        desc3
    );
});


function createWebSection(title, leftImg, rightImg, link, isFirst, desc1, desc2, desc3) {
    return `
        <div class="web-inner">
            <p class="web-title">${title}</p>

            <div class="web-sub">
                <p class="type2">사이트 주소 : </p>
                ${
                    link
                        ? `<a href="${link}" target="_blank" class="link-btn">${link}</a>`
                        : ""
                }
            </div>

            ${desc1?.trim() ? `
                <div class="web-skill">
                    <p class="web-img-desc">
                        <span class="tits">Skills : </span>
                        <span class="skill">${desc1}</span>
                    </p>
                </div>
            ` : ""}
            
            <div class="web-book">
                <img src="${leftImg}" alt="">
                ${rightImg ? `<img src="${rightImg}" alt="">` : ""}
            </div>

            <div class = "web-wrap">
                ${desc2?.trim() ? `<p class="web-img-desc"><span class="tits">만든 페이지 : </span> ${desc2}</p>` : ""}
                ${desc3?.trim() ? `
                    <p class="web-img-desc2">
                        <span class="tits">기획의도 :</span>
                        <span class="desc-text">${desc3}</span>
                    </p>` : ""
                }
            </div>
        </div>
        `;
}

const sections3 = document.querySelectorAll(".web-section");

const data3 = [
    [
        1, "More Vision", "./images/morevision.png", null,"https://lozech.github.io/More-Vision/",
        "JS/Swiper.js/GSAP","메인(전 페이지 구현)", "모어비전은 래퍼 박재범이 장르 문화를 기반으로 설립한 새로운 엔터테인먼트 허브입니다. 처음으로 swiper.js와 gsap을 활용하여 사이트 전체를 리뉴얼 해보았습니다."
    ],
    [
        2, "EMET SOUND","./images/emet2.png", null, "https://lozech.github.io/emet-sound/",
        "REACT/JS/GSAP","전체 페이지", "에메트사운드 레이블은 장르의 경계를 허물고 '에메트스러움'을 음악으로 치환하는 사운드 프로듀싱 허브입니다. 리액트 라이브러리를 사용하여 진행한 프로젝트로서 사이트 구현에 있어서 속도를 높이고자 하였습니다. 링크 간의 이동이 자연스럽고, 컴포넌트 활용이 자유로운 리액트를 통해 하나의 사이트를 더욱 더 효과적으로 완성할 수 있었습니다."],
    [
        3, "Beyond Sangsang", "./images/beyond2.png", null, "https://lozech.github.io/Beyond-Sangsang/",
        "REACT/JS","전체 페이지", "비욘드상상은 작가와 프로듀서진들로 구성된 광고 제작사입니다. 리액트로 진행한 두번째 프로젝트로서 해당 브랜드에서 추구하는 시선을 끄는 그림을 만드는 이야기에 매력을 느끼고 프로젝트 대상으로 선정하였습니다. 기존 사이트에서 사진과 영상이 로딩이 느린 점을 개선하며 완성도를 높였습니다. 애니메이션 효과를 심층적으로 활용하여 동적인 요소들을 확장하고자 했습니다."],
    [4, "Blackpaper", "./images/blackpaper.png", null, "https://lozech.github.io/blackpaper/",
        "REACT/JS","전체 페이지", "블랙페이퍼는 방송인 유병재 등이 설립한 크리에이티브 아티스트 매니지먼트사입니다. 리액트로 구현한 세번째 프로젝트로서 블랙페이퍼만의 색깔을 담기 위해 테마별 파비콘을 지정하고 블랙모드/화이트 모드 토글도 제작해보았습니다. 기존 사이트 내 미비한 링크 부분도 보충하여 보다 완성도 있는 리뉴얼을 진행해보았습니다."],
];

sections3.forEach((section3, i) => {
    const [type, title, left, right, link, desc1, desc2, desc3] = data3[i];

    if (!right) {
        section3.classList.add("single");
    }
    section3.innerHTML = createWebSection(
        title,
        left,
        right,
        link,
        i === 0,
        desc1,
        desc2,
        desc3
    );
});