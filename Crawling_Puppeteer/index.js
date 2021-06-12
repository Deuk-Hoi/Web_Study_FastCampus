const axios = require('axios');
const cheerio = require('cheerio');

axios.get("http://example.com").then((response)=>{
    const htmlString = response.data; //html 문자열이 들어있다.
    const $ = cheerio.load(htmlString);  //획득한 HTML 문서를 다루기 쉽게 파싱해준다.
    const h1 = $('h1').text(); //h1에 할달된 텍스트 JQuery 문법과 비슷
    const href = $('a').attr('href'); //태그 안의 속성들의 값을 가져올 수 있다.
    console.log(href);
})