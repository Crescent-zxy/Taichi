const html = document.querySelector("#html");
const style = document.querySelector("#style");

const string = `/* hi
 * 我们来画一个太极图吧
 * 首先准备一个div
 */
 #div{
    border: 1px solid black;
    width: 200px;
    height: 200px;
 }
 /* 接下来把 div 变成一个圆 */
 #div{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
 }
 /* 太极是阴阳形成的
 * 一黑一白
 */
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 太极生两仪 */
#div::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 一个太极图就画好啦
 * 现在我们让它转起来
*/
@keyframes rotation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
#div{
    animation: rotation 10s linear infinite;
}
`;

let string2 = "";
let n = 0;
const trans = {
    "\n": "<br>",
    " ": "&nbsp",
};

let step = () => {
    setTimeout(() => {
        string2 += trans[string[n]] || string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 30);
}

step();