var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.jpg')
    {
	myImage.setAttribute('src','images/firefox-icon2.jpg');
    }
    else
    {
	myImage.setAttribute('src','images/firefox-icon.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    if (!localStorage.getItem('name')){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool,'+myName;
    }
    else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool,'+storedName;
    }
}

myButton.onclick = function(){
    setUserName();
}
