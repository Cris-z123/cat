const string = `
.cat-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 188px;
    background: #bfbab3;
    border-radius: 30px 90px 90px 90px;
}
.ear1, .ear2 {
    position: absolute;
    left: 20px;
    bottom: 150px;
    height: 50px;
    width: 50px;
    border-radius: 12px;
    background: #bfbab3;
    transform: rotate(45deg);
}
.ear2{
    position: absolute;
    left: 110px;
    bottom: 150px;
}
.stripe1, .stripe2, .stripe3 {
    position: absolute;
    left: 70px;
    top: 0;
    width: 10px;
    height: 25px;
    background: #808080;
    border-radius: 10px;
}
.stripe2 {
    position: absolute;
    left: 85px;
    top: 0;
}
.stripe3 {
    position: absolute;
    left: 100px;
    top: 0;
}
.stripe4, .stripe5 {
    position: absolute;
    left: 160px;
    top: 0;
    width: 20px;
    height: 25px;
    background: #808080;
    border-radius: 0 0 10px 10px;
}
.stripe5 {
    position: absolute;
    left: 190px;
    top: 0;
}
.beard-left1, .beard-right1, .beard-left2, .beard-right2 {
    width: 30px;
    height: 10px;
    background: #4e2c11;
    border-radius: 10px;
}
.beard-left1 {
    position: absolute;
    top: 45px;
    left: -10px;
    transform: rotate(10deg);
}
.beard-right1 {
    position: absolute;
    top: 65px;
    left: -10px;
    transform: rotate(-10deg);
}
.beard-left2 {
    position: absolute;
    top: 45px;
    left: 160px;
    transform: rotate(-10deg);
}
.beard-right2 {
    position: absolute;
    top: 65px;
    left: 160px;
    transform: rotate(10deg);
}
.eye1, .eye2 {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #4e2c11;
}
.eye2 {
    position: absolute;
    left: 125px;
    top: 40px;
}
.nose > p {
    display: block;
}
.footer1, .footer2{
    position: absolute;
    bottom: -20px;
    left: 50px;
    height: 35px;
    width: 30px;
    background: #bfbab3;
    border-radius: 15px;
}
.footer2{
    position: absolute;
    bottom: -20px;
    left: 200px;
}
.tail-row {
    position: absolute;
    bottom: 120px;
    left: 260px;
    height: 25px;
    width: 80px;
    background: #bfbab3;
    border-radius: 15px;
}
.tail-row::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 40px;
    height: 25px;
    width: 15px;
    background: #808080;
}
.tail-col {
    position: absolute;
    bottom: 120px;
    left: 320px;
    height: 50px;
    width: 25px;
    background: #bfbab3;
    border-radius: 15px;
}
`

const player = {
    id : undefined,
    speed : 100,
    n : 1,
    ui : {
        demo : document.querySelector("#demo"),
        demo2 : document.querySelector("#demo2")
    },
    init : () => {
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.paly()
        player.bindEvents()
    },
    events : {
        '#btnPause' : 'pause',
        '#btnPlay' : 'paly',
        '#btnSlow' : 'slow',
        '#btnNormal' : 'normal',
        '#btnFast' : 'fast'
    },
    bindEvents : () => {
        for(let key in player.events) {
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run : () => {
        player.n += 1
        if(player.n > string.length){
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo2.innerHTML = string.substring(0, player.n)
        player.ui.demo.scrollTop = demo.scrollHeight 
    },
    paly : () => {
        player.id = setInterval (player.run, player.speed)
    },
    pause : () => {
        window.clearInterval(player.id)
    },
    slow : () => {
        player.pause()
        player.speed = 200
        player.paly()
    },
    normal : () => {
        player.pause()
        player.speed = 100
        player.paly()
    },
    fast : () => {
        player.pause()
        player.speed = 0
        player.paly()
    }
}

player.init()
