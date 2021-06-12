const axios = require('axios');
const cheerio = require('cheerio');


axios.get("https://www.tistory.com/category/getMoreCategoryPost.json?category=life&lastPublished=0&first=true").then((responce)=>{
    const htmlString = responce.data;

    console.log(htmlString.data.list);
})