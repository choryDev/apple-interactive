(()=> {

    let yOffset = 0; // window.pageYoffset 대신 쓸 변수;  

    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            type: 'normal',
            heightNum: 5,
            scrollHeight: 0,
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];

    const setLayout = () => {
        sceneInfo.map(v => {
            v.scrollHeight = v.heightNum * window.innerHeight;
            if(v.objs){
                v.objs.container.style.height = `${v.scrollHeight}px`;
            }
        });
    }

    
    const scrollLoop = () => {
        
        console.log(yOffset);
    }


    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', ()=> {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

})();