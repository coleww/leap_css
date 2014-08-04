Mapping to Browser Coordinates
There are many differences between Leap Motion coordinates and browser coordinates.

The origin of the browsers’ coordinate system is in the upper left corner of the browser window’s client display area.

This is NOT the same as the upper left corner of the browser’s window because of the title bar, etc.

The y-axis of the page goes down, not up.

There is no z-axis in conventional page layout (unless you use CSS 3D or Famo.us).

If the window is scrolled, the apparent top of the display area may be well above the display pane (and hidden).

There is a whole system of CSS 3 coordinates that are way too deep to go into (but worth learning)

The browser allows any combination of units – pixels, pt, ems, and in some contexts, percentage. (see http://www.quirksmode.org/css/units-values/)

The browser’s coordinates are in pixels, not in millimeters.

This does NOT mean that you can’t have -x or -y values for DOM elements – you can but they probably won’t be visible.

You can define the interaction area of a web app in many ways, but to use the entire client area of the current window, get the width and height using the window object: window.innerWidth (x) is the width of the display panel and window.innerHeight (y) is the height. These numbers are pixel measurements.

So, to find the pixel position corresponding to a Leap Motion controller coordinate:

var leapPoint = Leap.vec3.create(50, -75, 100); //could be any point
var iBox = frame.interactionBox();
var normalizedPoint = iBox.normalizePoint(leapPoint, true);

int appX = normalizedPoint.x * window.innerWidth;
int appY = (1 - normalizedPoint.y) * window.innerHeight;
The Canvas drawing API uses the same y-down, x-right coordinate system as the browser so the above applies to canvas painting as well.

Selecting and Clicking on DOM objects
Browser DOM events are very mouse-centric; they have click, over, mousedown and mouseup events specifically tooled to the mouse. When engineering interactions with DOM you will have to define your own handlers to respond to interactions performed with the Leap Motion controller, and create a “virtual cursor” to represent the mechanic of interaction you choose to use. Also, be sure to compensate for window scrolling (up-down and left-right) if you intend to use absolute positioning to move DOM elements that act as cursors for fingers and hands.