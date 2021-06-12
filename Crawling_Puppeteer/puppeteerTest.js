const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


(async ()=>{
    const browser = await puppeteer.launch({
        headless : false,
    });
    const page = await browser.newPage();
    
    await page.setViewport({
        width : 1440,
        height: 1080,
    });
    
    await page.goto("https://www.naver.com"); //사이트 방문
    const html = await page.content(); //브라우저 html 문서를 읽어오는 방법
    const $ = cheerio.load(html);
    let hrefArray = []

    $("ul.list_theme > li > a").each((index, element)=>{
        const href = $(element).attr('href');
        const title = $(element).find('.title').text();
        hrefArray.push({
            href,
            title
        });
    });
    console.log(hrefArray)
    await browser.close();
})();

//즉시 실행 함수 IIFE [아래와 같다.]

/*const pptr = async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
};

pptr();*/
