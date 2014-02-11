(function(BeeHive) {
  function BeeHiveView(element) {
    var bindings = {};

    this.element = element;
    this._attributes = {};

    this.set = function set(attr, value) {
      this._attributes[attr] = value;
      this.trigger(attr + ':change');
      return this;
    }

    this.get = function get(attr) {
      return this._attributes[attr];
    }


    function trigger(event_id) {
      var callbacks = bindings[event_id];
      for (var i in callbacks) {
        var callback = callbacks[i];
        callback.apply(this);
      }
    }
    this.trigger = trigger;

    function on(event_id, callback) {
      var current_callbacks = bindings[event_id];
      if (current_callbacks) {
        current_callbacks.push(callback);
      }
      else {
        bindings[event_id] = [callback];
      }
    }
    this.on = on;
  }
  BeeHive.View = BeeHiveView;

})(window.BeeHive = window.BeeHive || {});
