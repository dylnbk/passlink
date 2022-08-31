
const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#generate-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector("h1").innerHTML = message;
}

document.getElementById("generate").addEventListener("click", function() {

    document.querySelector('#generate-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    
    valueA = new Array(11).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36)[Math.random()<.5?"toString":"toUpperCase"]();});
    document.getElementById("passA").innerHTML = valueA;

    encrypted = btoa(valueA);
    output = document.getElementById("link-input");
    output.innerHTML = `${window.location}#${encrypted}`;
    output.href = `${window.location}#${encrypted}`;

    document.getElementById("copy-content").onclick = function () {
        navigator.clipboard.writeText(`${window.location}#${encrypted}`);
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    };
});

