# ParaLasic-JS
A lightweight and very simple Parallax Effect plugin made with Jquery

## Usage
```
$('.paralasic').css('background-position', 'center top -' + scrollTop * 1.8 + 'px'); /* 1.7 ´o valor padrão. Quanto menor o número, menor o efeito */
```

## CSS

```
.paralasic {
	background:
	linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
	url(https://static.photocdn.pt/images/articles/2017/04/28/iStock-517188688.jpg);
	
	background-attachment: fixed;
	background-size: cover;
	background-size: 100vw;
	background-position: center top;
	background-repeat: no-repeat;
	background-color: #000000;
}
```

## HTML

Just add the class "paralasic" on the HTML element
```
<div id="myParallax" class="paralasic">
  <h1>I'm ParaLasic</h1>
</div>
```
