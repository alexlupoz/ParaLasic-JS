# ParaLasic-JS
A lightweight and very simple Parallax Effect plugin made with Jquery

## Usage
```
var paralasicValue = $('.paralasic').attr('data-paralasic');
$('.paralasic').css('background-position', 'center top -' + scrollTop * paralasicValue + 'px');
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
<div id="myParallax" class="paralasic" data-paralasic="0.5">
  <h1>I'm ParaLasic</h1>
</div>
```

## License
This plugin is free under MIT license for personal or commercial use.
