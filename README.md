# BeeHive.View

Simple view bindings.

### How to use

Create an instance of `BeeHive.View` and pass in the top level element:

```javascript
var view1 = new BeeHive.View(document.getElementById('heading1'));
var view2 = new BeeHive.View(document.getElementById('heading2'));
```

Subscribe to certain events that fire on the view object when attributes change:

```javascript
function toggle_visibility() {
  var is_visible = this.get('visibility');
  this.element.style.visibility = is_visible ? 'visible' : 'hidden';
}
view1.on('visibility:change', toggle_visibility);
```

See the DOM elements react automatically when attributes change:

```javascript
view1.set('visibility', false);
view2.set('visibility', false);
view1.set('visibility', true);
```

Event names are conventional, for example when a `visibility` attribute changes, the `visibility:change` event fires.

### Demo

Clone the repo and open `demo.html` that has the view objects mentioned above already in place so that you can play with them using your browser's console.

### Features

* Has no dependencies, no, not even jQuery.
* It’s more lightweight than Backbone, Angular, or [insertAnyOtherFrontendFrameWork]
* It’s currently less than 40 lines long.
* It’s been written on a train, and trains are cool.

### Todos

* Write tests.
* Implement `View#off`.
* Make it AMD compliant
* Create NPM package.
* ~~Create minified version just for comedy value.~~ It's 352 bytes!
* See if alternative getter/setter methods would be more suitable over time (Benchmarks at http://jsperf.com/getter-setter)
