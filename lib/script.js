window.addEventListener('DOMContentLoaded', function() {
    animateText();
    handleSctionWidth();
    workScrollEffect();
    naviActive();
});

// intro 텍스트 애니메이션
const animateText = () => {
    const strongElement = document.querySelector('.intro-title strong');
    const text = '< EESEUL />';
    strongElement.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.setAttribute('data-aos', 'fade-up');
        span.setAttribute('data-aos-delay', index * 50);
        
        strongElement.appendChild(span);
    });
};

// 네비
const naviActive = () => {
    window.addEventListener('scroll', function() {
        let activeNav;

        // 네비
        const navInfo = document.querySelector('.section-navigation .nav-about');
        const navWorks = document.querySelector('.section-navigation .nav-project');
        const navPosts = document.querySelector('.section-navigation .nav-post');
        const navContact = document.querySelector('.section-navigation .nav-contact');
        const navItems = [navInfo, navWorks, navPosts, navContact]; 

        // 섹션
        const infoSection = document.querySelector('.section-info');
        const worksSection = document.querySelector('.section-works');
        const postSection = document.querySelector('.section-posts');
        const contactSection = document.querySelector('.section-contact');

        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // 각 섹션의 위치에 따라 네비게이션에 active 클래스 추가
        if (scrollPosition >= (infoSection.offsetTop + 800) && scrollPosition < (worksSection.offsetTop + 800)) {
            activeNav = navInfo;
        } else if (scrollPosition >= (worksSection.offsetTop + 800) && scrollPosition < (postSection.offsetTop + 800)) {
            activeNav = navWorks;
        } else if (scrollPosition >= (postSection.offsetTop + 800) && scrollPosition < (contactSection.offsetTop + 800)) {
            activeNav = navPosts;
        } else if (scrollPosition >= contactSection.offsetTop) {
            activeNav = navContact;
        }        

        navItems.forEach(nav => {
            nav.classList.remove('active');
        });
        activeNav.classList.add('active');
    });
};

// 스크롤시 width 변경
const handleSctionWidth = () => {
    ScrollTrigger.create({
        trigger: '.section-content',
        start: 'top 85%',
        scrub: 1,
        onEnter: () => document.querySelector('.section-content .section-bg').classList.add('max'),
        onLeaveBack: () => document.querySelector('.section-content .section-bg').classList.remove('max'),
    });
}

// work experience 
const workScrollEffect = () => {
    const items = document.querySelectorAll('.works-list .work-item'); // 모든 work-item을 선택

    items.forEach((item) => {
        ScrollTrigger.create({
            trigger: item, // 각 item을 트리거로 설정
            start: 'top 100%', // top 70% 위치에 도달할 때
            onEnter: () => item.classList.add('action'), // 해당 item에 action 클래스 추가
            onLeaveBack: () => item.classList.remove('action'), // 스크롤이 위로 되돌아갈 때 클래스 제거
        });
    });
};

// 모달
const modalOpen = (modal) => {
    const thisModal = document.querySelector(modal);
    thisModal.classList.add('active');
}
const modalClose = (modal) => {
    modal.closest('.modal').classList.remove('active');
}

// 이메일 클릭시
const onclickEmail = () => {
    navigator.clipboard.writeText('sseul2323@gmail.com');
    modalOpen('.modal.mail-modal');
}