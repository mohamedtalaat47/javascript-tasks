setInterval(now, 1000)

function now() {
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString()
}



var modal = document.getElementById("myModal")
var btn = document.getElementById("alarmBtn")
var span = document.getElementsByClassName("close")[0]

btn.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

var alarmForm = document.getElementById("alarmForm")
alarmForm.onsubmit = function (event) {
    event.preventDefault()


    var h = document.getElementById("h").value
    var m = document.getElementById("m").value
    var s = document.getElementById("s").value

    var millisec = parseInt(h) * 3600000 + parseInt(m) * 60000 + parseInt(s) * 1000
    function alarm() {
        alert('alarm!')
    }
    modal.style.display = "none"
    setTimeout(alarm, millisec)

}

document.getElementById("submitBtn").disabled = true;

function btnActivation() {

    if (!document.getElementById('h').value.length || !document.getElementById('m').value.length || !document.getElementById('s').value.length) {
        document.getElementById("submitBtn").disabled = true;
    } else {
        document.getElementById("submitBtn").disabled = false;

    }
}


