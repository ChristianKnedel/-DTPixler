# DTPixler
Sometimes we want to deal with dpi, cm, inch and mm values with JavaScript and convert them in pixels.

## Methods:
* setOutputResolution
* pixelToMillimeters
* pixelToCentimeters
* pixelToInch
* inchToPixel
* centimetersToPixel
* millimetersToPixel


## HowTo:
Convert between centimeters (cm), pixels and dots/inch (dpi), lines/inch (lpi) and pixel/inch (ppi):
```javascript
var pixler = new DTPixler();
pixler.setOutputResolution(600);
alert(pixler.centimetersToPixel(1) );
alert(pixler.pixelToCentimeters(600) );
```


## Reference:
You will find this functionality in [365Layouts.com](https://www.365Layouts.com).

![alt text](https://github.com/ChristianKnedel/-DTPixler/blob/master/886059-b9484b3860278b75256c6e24aef4d2e165e6ce22.jpg "365Layouts Javascript DTP Client")
