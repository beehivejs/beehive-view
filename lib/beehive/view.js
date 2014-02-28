(function() {

  function BeeHiveView(element) {
    this.element = element;
    var events = {};
    var attributes = {};

    function set(attr, value) {
      attributes[attr] = value;
      this.trigger(attr + ':change');
      return this;
    }
    this.set = set;

    function get(attr) { return attributes[attr]; }
    this.get = get;

    function trigger(event_id) {
      var callbacks = events[event_id];
      for (var i in callbacks) {
        var callback = callbacks[i];
        callback.apply(this);
      }
    }
    this.trigger = trigger;

    function on(event_id, callback) {
      var current_callbacks = events[event_id];
      if (current_callbacks) {
        current_callbacks.push(callback);
      }
      else {
        events[event_id] = [callback];
      }
    }
    this.on = on;
  }

  /* Export to CommonJS if applicable */
  if (typeof module == 'object' && typeof module.exports == 'object') {
    module.exports = BeeHiveView;
  }

  /* Ensure window.BeeHive is defined and then set the BeeHive.View object */
  else
  {
    window.BeeHive = window.BeeHive || {};
    BeeHive.View = BeeHiveView;
  }

})();
