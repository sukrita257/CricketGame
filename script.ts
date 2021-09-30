let heading = document.createElement("div");
heading.style.textAlign = "center"
heading.innerHTML = "<img src='ball.png' style='width:30px; height:30px;'>CRICKET 10"
document.body.appendChild(heading)

let tracker = document.createElement("div");
tracker.className = "tracker"
document.body.appendChild(tracker)

let timer = document.createElement("div");
timer.style.fontSize = "40px"
timer.innerHTML = "TIMER<br>"+1

let btn1 = document.createElement("button")
btn1.id = "btn1"
btn1.innerText = "HIT 1"

let btn2 = document.createElement("button")
btn2.id = "btn2"
btn2.innerText = "HIT 2"
btn2.disabled = true
btn2.style.backgroundColor="lightblue"

let res_btn = document.createElement("button")
res_btn.innerText = "GENERATE RESULT"
res_btn.disabled = true
res_btn.style.backgroundColor="lightblue"

let result = document.createElement("div")
result.appendChild(res_btn)
res_btn.onclick = function(){
    result.innerHTML += "<br> MATCH WON BY<br>"
    if(flag==0){
        result.innerHTML += "TEAM 1<br>"
    }
    else{
        result.innerHTML += "TEAM 2<br>"
    }
    result.innerHTML += "<hr style='border: 1px solid lightgray'>MAN OF THE MATCH<br>"
    result.innerHTML += player+"<br>"+p_team+"<br>SCORE: "+p_max

    res_btn.disabled=true
    res_btn.style.backgroundColor="lightblue"
    btn1.disabled=true
    btn1.style.backgroundColor="lightblue"
    btn2.disabled=true
    btn2.style.backgroundColor="lightblue"
}

let main_div = document.createElement("div")
main_div.style.display = "flex"
main_div.style.justifyContent = "space-between"

class Team {
    constructor(num:number){
        let team = document.createElement("div");
        team.className = "team"
        team.innerText = "TEAM "+num+" SCORE"

        let score = document.createElement("div")
        score.id = "sc"+num
        score.innerText = "0"
        team.appendChild(score)
        
        if(num==1){team.appendChild(btn1)}
        else{team.appendChild(btn2)}

        tracker.appendChild(team)
    }
}

class Table{
    constructor(num:number){
        let table = document.createElement("table");
        table.innerText = "TEAM "+num+" SCORE BOARD";
        "TEAM "+num+" SCORE BOARD"
        let tr_head = document.createElement("tr");
        let heads = ["TEAM "+num.toString(), "B1", "B2", "B3", "B4", "B5", "B6", "Total"]
        for(let i=0; i<8; i++){
            let th = document.createElement("th");
            th.innerText = heads[i];
            tr_head.appendChild(th)
        }
        table.appendChild(tr_head)
        for(let i=1; i<=10; i++){
            let tr = document.createElement("tr");
            let p_name = document.createElement("td");
            p_name.innerText = "Player "+(i).toString()
            tr.appendChild(p_name)
            for(let j=1; j<=7; j++){
                let td = document.createElement("td");
                td.id = num +"_"+ (i).toString() +"_"+ (j).toString()
                console.log(td.id)
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
        main_div.appendChild(table)
    }
}

let t1 = new Table(1)
main_div.appendChild(result)
let t2 = new Table(2)

let team1 = new Team(1)
tracker.appendChild(timer)
let team2 = new Team(2)

document.body.appendChild(main_div)

let time=1
let clock = setInterval(function(){
    time++
    if(time>55 && time<=60){
        timer.style.color = "red"
    }
    else{
        timer.style.color = "black"
    }
    timer.innerHTML = "TIMER<br>"+time
    if(time==60){
        time=0
    }
}, 1000);

setTimeout(function(){
    btn1.disabled = true
    btn1.style.backgroundColor="lightblue"
    btn2.disabled = false
    btn2.style.backgroundColor="blue"
    max=tot_sum
    i=1
    j=1  
    sum=0
    tot_sum=0
}, 60000);

setTimeout(function(){
    btn1.disabled = true
    btn1.style.backgroundColor="lightblue"
    btn2.disabled = true
    btn2.style.backgroundColor="lightblue"
    res_btn.disabled = false
    res_btn.style.backgroundColor="blue"
    if(tot_sum>max){
        flag=1
    }
    clearInterval(clock)
}, 120000);

let i=1
let j=1  
let sum=0
let tot_sum=0
let max=0
let flag=0
let p_max=0
let player=""
let p_team=""
btn1.onclick = function(){  
    let sc = (Math.floor(Math.random() * 6))
    document.getElementById("1_"+i+"_"+j).innerText = sc.toString()
    let p_score = document.getElementById("1_"+i+"_7")
    sum = sum + sc
    p_score.innerText = sum.toString()

    let score = document.getElementById("sc1")
    tot_sum = tot_sum + sc
    score.innerText = tot_sum.toString()
    j++
    if(sc==0||j==7){
        if(sum>p_max){
            p_max=sum
            player="PLAYER"+i
            p_team="TEAM 1"
        }
        i++
        j=1
        sum=0
    }
    if(i==11){
        max=tot_sum
        btn1.disabled=true
        btn1.style.backgroundColor="lightblue"
        btn2.disabled=false
        btn2.style.backgroundColor="blue"
        i=1
        j=1  
        sum=0
        tot_sum=0
        time=0
    }
}

btn2.onclick = function(){
    let sc = (Math.floor(Math.random() * 6))
    document.getElementById("2_"+i+"_"+j).innerText = sc.toString()
    let p_score = document.getElementById("2_"+i+"_7")
    sum = sum + sc
    p_score.innerText = sum.toString()

    let score = document.getElementById("sc2")
    tot_sum = tot_sum + sc
    score.innerText = tot_sum.toString()
    j++
    if(sc==0||j==7){
        if(sum>p_max){
            p_max=sum
            player="PLAYER"+i
            p_team="TEAM 2"
        }
        i++
        j=1
        sum=0
    }
    if(i==11){
        if(tot_sum>max){
            flag=1
        }
        btn2.disabled=true
        btn2.style.backgroundColor="lightblue"
        res_btn.disabled=false
        res_btn.style.backgroundColor="blue"
        clearInterval(clock)
    }
}