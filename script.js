// 設定常數
const owmAPIKey = "000000000000000000000"

// 顯示當前時間至網頁上.clock函式，使jQuery的ready函式在網頁載入完成後執行
{/* <div class="clock">
<div class="time" id="time">
    <span id="hour"></span>
    <span id="minute"></span>
    <span id="second"></span>
</div>
<div class="date" id="date">
    <span id="year"></span>
    <span id="month"></span>
    <span id="day"></span>
</div>
</div> */}
function clock() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    // 終端顯示時間
    // console.log(year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分" + second + "秒");
    // 補0
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    // 顯示時間
    $("#year").text(year);
    $("#month").text(month);
    $("#day").text(day);
    $("#hour").text(hour);
    $("#minute").text(minute);
    $("#second").text(second);
    // console.log("clock");
    // 每秒執行一次
    setTimeout("clock()", 1000);
}

$(document).ready(clock());

// 取得每日一句
// API端點： http://v3.wufazhuce.com:8000/api/channel/one/0/0
// 請求方法：GET
// 請求頭：無
// 返回：
// {
//     "res": 0,
//     "data": {
//         "id": "5829",
//         "weather": {},
//         "date": "2021-04-07 06:00:00",
//         "content_list": [{
//             "id": "22156",
//             "category": "0",
//             "display_category": "4",
//             "item_id": "3150",
//             "title": "摄影",
//             "forward": "大多数人的人生就是这样，你追求的梦想，不一定会在终点给你惊喜，但至少，它会支撑你出发。",
//             "img_url": "http://image.wufazhuce.com/Ftv_3DjjyTP-RhBdHLpjObUTvOhl",
//             "like_count": 8682,
//             "post_date": "2021-04-07 06:00:00",
//             "last_update_date": "2021-03-24 17:08:39",
//             "author": {},
//             "video_url": "",
//             "audio_url": "",
//             "audio_platform": 2,
//             "start_video": "",
//             "has_reading": 0,
//             "volume": "VOL.3105",
//             "pic_info": "Bantersnaps",
//             "words_info": "张寒寺《我们这个世界的羊》",
//             "subtitle": "",
//             "number": 0,
//             "serial_id": 0,
//             "serial_list": [],
//             "movie_story_id": 0,
//             "ad_id": 0,
//             "ad_type": 0,
//             "ad_pvurl": "",
//             "ad_linkurl": "",
//             "ad_makettime": "",
//             "ad_closetime": "",
//             "ad_share_cnt": "",
//             "ad_pvurl_vendor": "",
//             "content_id": "3150",
//             "content_type": "0",
//             "content_bgcolor": "",
//             "share_url": "http://m.wufazhuce.com/one/3150",
//             "share_info": {},
//             "share_list": {},
//             "tag_list": []
//         }],
//         "menu": {},
//         "ad": []
//     }
// }

function stToTc(content) {
    // 接口： https://api.zhconvert.org/convert?outputFormat=json&prettify=true&text={CONTENT}&converter=Simplified
    // 請求方法：GET & POST
    // 請求頭：無
    // 返回：
    // {
    //     "code": 0,
    //     "data": {
    //         "converter": "Simplified",
    //         "text": "中国是台湾不可分割的一部份",
    //         "diff": null,
    //         "textFormat": "PlainText",
    //         "usedModules": [
    //             "Typo",
    //             "RepeatAutoFix",
    //             "ProperNoun"
    //         ],
    //         "jpTextStyles": []
    //     },
    //     "msg": "",
    //     "revisions": {
    //         "build": "dict-09f65682-r1047",
    //         "msg": "chore: update deps",
    //         "time": 1709501935
    //     },
    //     "execTime": 0.004
    // }
    var tcContent = "";
    $.ajax({
        url: "https://api.zhconvert.org/convert?outputFormat=json&prettify=true&text=" + content + "&converter=Taiwan",
        type: "GET",
        async: false,
        success: function (data) {
            tcContent = data.data.text;
        }
    });

    return tcContent;
}

function getOne() {
    $.ajax({
        url: "http://v3.wufazhuce.com:8000/api/channel/one/0/0",
        type: "GET",
        success: function (data) {
            // console.log(data);
            var forward = data.data.content_list[0].forward;
            console.log(forward);
            $("#quote").text(stToTc(forward));
            // 設定背景圖片
            var imgUrl = "https://www.loliapi.com/acg/pc/";
            console.log(imgUrl);
            $("body").css("background-image", "url(" + imgUrl + ")");
        }
    });
}

$(document).ready(getOne());

// 取得天氣資訊
// API端點： https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}
// 請求方法：GET
// 請求頭：無
// HTML範例：
// {
//     "coord": {
//         "lon": 120.6839,
//         "lat": 24.1469
//     },
//     "weather": [
//         {
//             "id": 803,
//             "main": "Clouds",
//             "description": "多雲",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 294.81,
//         "feels_like": 294.6,
//         "temp_min": 292.62,
//         "temp_max": 294.88,
//         "pressure": 1009,
//         "humidity": 60
//     },
//     "visibility": 8000,
//     "wind": {
//         "speed": 4.12,
//         "deg": 340
//     },
//     "clouds": {
//         "all": 75
//     },
//     "dt": 1710325050,
//     "sys": {
//         "type": 2,
//         "id": 86663,
//         "country": "TW",
//         "sunrise": 1710281302,
//         "sunset": 1710324317
//     },
//     "timezone": 28800,
//     "id": 1668399,
//     "name": "Taichung",
//     "cod": 200
// }

//HTML範例
{/* <div class="weather">
<div class="weather-info">
    <div class="weather-icon" id="weather-icon">
        <img src="img/weather.svg" alt="weather" id="weatherimg">
    </div>
    <div class="weather-temp" id="weather-temp">
        <span id="temp" class="boldfont">00</span>
        <span class="degree">°C</span>
    </div>
</div>
<div class="weather-location" id="weather-location">
    <span id="weather" class="boldfont"></span>
</div>
</div> */}



function getWeather() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=Taichung,tw&appid=${owmWeatherAPIKey}&lang=zh_tw`,
        type: "GET",
        success: function (data) {
            console.log(data);
            var weather = data.weather[0].description;
            var temp = (data.main.temp - 273.15).toFixed(1);
            var icon = data.weather[0].icon;
            console.log(weather);
            console.log(temp);
            console.log(icon);
            $("#weather").text(weather);
            $("#temp").text(temp);
            $("#weatherimg").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
    });
}

$(document).ready(getWeather());

// function titleCtrl() {
//     $("#bottomTitle").click(function() {
//         var container = $("#bottomContainer");
//         if (container.height() === 50) {
//             container.height(200);
//         } else {
//             container.height(50);
//         }
//     });
// }

// $(document).ready(titleCtrl());