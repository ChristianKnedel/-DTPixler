/**
 * @class Simple calculating dpi, cm, inch and mm in Javascript 
 * @author Christian Knedel <c.knedel@365layouts.de>
 */
DTPixler = function()
{
  /**
   * dpi / ppi / lpi / Resolution
   */
  this.outputResolution = 300;  
};

/**
 * set dpi / ppi / lpi Resolution
 *
 * @param {int} resolution (output resolution)
 * @returns void
 */
DTPixler.prototype.setOutputResolution = function(resolution)
{
  this.outputResolution = resolution 
};

/**
 * convert a Pixel value to Millimeter
 *
 * @param {int} valueInPx
 * @returns A Millimeter string ends with " mm"
 */
DTPixler.prototype.pixelToMillimeters = function(valueInPx)
{
  var mmValue  = Math.round(parseInt(valueInPx) *  25.4 / this.outputResolution);
    
  if(isNaN(mmValue))
  {
    return "0 mm";
  }
  else
  {
    return mmValue + " mm";  
  }   
};

/**
 * convert a Pixel value to Centimeter
 *
 * @param {int} valueInPx
 * @returns A Centimeter string ends with " cm"
 */
DTPixler.prototype.pixelToCentimeters = function(valueInPx)
{
  return (Math.round((parseInt(valueInPx) *  2.54 / this.outputResolution) * 10) / 10) + " cm";
};

/**
 * convert a Pixel value to inch
 *
 * @param {int} valueInPx
 * @returns A Centimeter string ends with " inch"
 */
DTPixler.prototype.pixelToInch = function(valueInPx)
{
  return (Math.round((parseInt(valueInPx)  / this.outputResolution) * 100) / 100) + " inch";
};

/**
 * convert a inch value to Pixel
 *
 * @param {int} valueInInch
 * @returns A Centimeter string ends with "px"
 */

DTPixler.prototype.inchToPixel = function(valueInInch)
{
  return parseInt(parseFloat(valueInInch) * this.outputResolution) + "px";
};

/**
 * convert a Millimeter value to Pixel
 *
 * @param {int} valueInMm
 * @returns A string ends with "px"
 */

DTPixler.prototype.centimetersToPixel = function(valueInMm)
{
  return parseInt(parseFloat(valueInMm) / 2.54 * this.outputResolution) + "px";
};

/**
 * convert a Millimeter value to Pixel
 *
 * @param {int} valueInMm
 * @returns A string ends with "px"
 */

DTPixler.prototype.millimetersToPixel = function(valueInMm)
{
  return parseInt(parseFloat(valueInMm) / 25.4 * this.outputResolution) + "px";
};
