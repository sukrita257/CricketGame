var heading = document.createElement("div");
heading.style.textAlign = "center";
heading.innerHTML = "<img src='ball.png' style='width:30px; height:30px;'>CRICKET 10";
document.body.appendChild(heading);
var tracker = document.createElement("div");
tracker.className = "tracker";
document.body.appendChild(tracker);
var timer = document.createElement("div");
timer.style.fontSize = "40px";
timer.innerHTML = "TIMER<br>" + 1;
var btn1 = document.createElement("button");
btn1.id = "btn1";
btn1.innerText = "HIT 1";
var btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.innerText = "HIT 2";
btn2.disabled = true;
btn2.style.backgroundColor = "lightblue";
var res_btn = document.createElement("button");
res_btn.innerText = "GENERATE RESULT";
res_btn.disabled = true;
res_btn.style.backgroundColor = "lightblue";
var result = document.createElement("div");
result.appendChild(res_btn);
res_btn.onclick = function () {
    result.innerHTML += "<br> MATCH WON BY<br>";
    if (flag == 0) {
        result.innerHTML += "TEAM 1<br>";
    }
    else {
        result.innerHTML += "TEAM 2<br>";
    }
    result.innerHTML += "<hr style='border: 1px solid lightgray'>MAN OF THE MATCH<br>";
    result.innerHTML += player + "<br>" + p_team + "<br>SCORE: " + p_max;
    res_btn.disabled = true;
    res_btn.style.backgroundColor = "lightblue";
    btn1.disabled = true;
    btn1.style.backgroundColor = "lightblue";
    btn2.disabled = true;
    btn2.style.backgroundColor = "lightblue";
};
var main_div = document.createElement("div");
main_div.style.display = "flex";
main_div.style.justifyContent = "space-between";
var Team = /** @class */ (function () {
    function Team(num) {
        var team = document.createElement("div");
        team.className = "team";
        team.innerText = "TEAM " + num + " SCORE";
        var score = document.createElement("div");
        score.id = "sc" + num;
        score.innerText = "0";
        team.appendChild(score);
        if (num == 1) {
            team.appendChild(btn1);
        }
        else {
            team.appendChild(btn2);
        }
        tracker.appendChild(team);
    }
    return Team;
}());
var Table = /** @class */ (function () {
    function Table(num) {
        var table = document.createElement("table");
        table.innerText = "TEAM " + num + " SCORE BOARD";
        "TEAM " + num + " SCORE BOARD";
        var tr_head = document.createElement("tr");
        var heads = ["TEAM " + num.toString(), "B1", "B2", "B3", "B4", "B5", "B6", "Total"];
        for (var i_1 = 0; i_1 < 8; i_1++) {
            var th = document.createElement("th");
            th.innerText = heads[i_1];
            tr_head.appendChild(th);
        }
        table.appendChild(tr_head);
        for (var i_2 = 1; i_2 <= 10; i_2++) {
            var tr = document.createElement("tr");
            var p_name = document.createElement("td");
            p_name.innerText = "Player " + (i_2).toString();
            tr.appendChild(p_name);
            for (var j_1 = 1; j_1 <= 7; j_1++) {
                var td = document.createElement("td");
                td.id = num + "_" + (i_2).toString() + "_" + (j_1).toString();
                console.log(td.id);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        main_div.appendChild(table);
    }
    return Table;
}());
var t1 = new Table(1);
main_div.appendChild(result);
var t2 = new Table(2);
var team1 = new Team(1);
tracker.appendChild(timer);
var team2 = new Team(2);
document.body.appendChild(main_div);
var time = 1;
var clock = setInterval(function () {
    time++;
    if (time > 55 && time <= 60) {
        timer.style.color = "red";
    }
    else {
        timer.style.color = "black";
    }
    timer.innerHTML = "TIMER<br>" + time;
    if (time == 60) {
        time = 0;
    }
}, 1000);
// setTimeout(clock, 60000);
setTimeout(function () {
    btn1.disabled = true;
    btn1.style.backgroundColor = "lightblue";
    btn2.disabled = false;
    btn2.style.backgroundColor = "blue";
    max = tot_sum;
    i = 1;
    j = 1;
    sum = 0;
    tot_sum = 0;
}, 60000);
setTimeout(function () {
    btn1.disabled = true;
    btn1.style.backgroundColor = "lightblue";
    btn2.disabled = true;
    btn2.style.backgroundColor = "lightblue";
    res_btn.disabled = false;
    res_btn.style.backgroundColor = "blue";
    if (tot_sum > max) {
        flag = 1;
    }
    clearInterval(clock);
}, 120000);
var i = 1;
var j = 1;
var sum = 0;
var tot_sum = 0;
var max = 0;
var flag = 0;
var p_max = 0;
var player = "";
var p_team = "";
btn1.onclick = function () {
    var sc = (Math.floor(Math.random() * 6));
    document.getElementById("1_" + i + "_" + j).innerText = sc.toString();
    var p_score = document.getElementById("1_" + i + "_7");
    sum = sum + sc;
    p_score.innerText = sum.toString();
    var score = document.getElementById("sc1");
    tot_sum = tot_sum + sc;
    score.innerText = tot_sum.toString();
    j++;
    if (sc == 0 || j == 7) {
        if (sum > p_max) {
            p_max = sum;
            player = "PLAYER" + i;
            p_team = "TEAM 1";
        }
        i++;
        j = 1;
        sum = 0;
    }
    if (i == 11) {
        max = tot_sum;
        btn1.disabled = true;
        btn1.style.backgroundColor = "lightblue";
        btn2.disabled = false;
        btn2.style.backgroundColor = "blue";
        i = 1;
        j = 1;
        sum = 0;
        tot_sum = 0;
        time = 0;
    }
};
btn2.onclick = function () {
    var sc = (Math.floor(Math.random() * 6));
    document.getElementById("2_" + i + "_" + j).innerText = sc.toString();
    var p_score = document.getElementById("2_" + i + "_7");
    sum = sum + sc;
    p_score.innerText = sum.toString();
    var score = document.getElementById("sc2");
    tot_sum = tot_sum + sc;
    score.innerText = tot_sum.toString();
    j++;
    if (sc == 0 || j == 7) {
        if (sum > p_max) {
            p_max = sum;
            player = "PLAYER" + i;
            p_team = "TEAM 2";
        }
        i++;
        j = 1;
        sum = 0;
    }
    if (i == 11) {
        if (tot_sum > max) {
            flag = 1;
        }
        btn2.disabled = true;
        btn2.style.backgroundColor = "lightblue";
        res_btn.disabled = false;
        res_btn.style.backgroundColor = "blue";
        clearInterval(clock);
    }
};
