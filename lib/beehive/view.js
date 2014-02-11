(function(BeeHive) {
  function BeeHiveView(element) {
    var _events = {};

    this.element = element;
    this._attributes = {};

    this.set = function set(attr, value) {
      this._attributes[attr] = value;
      this.trigger(attr + ':change');
      return this;
    };

    this.get = function get(attr) {
      return this._attributes[attr];
    };

    this.trigger = function trigger(event_id) {
      var events = _events[event_id];
      for (var key in events) {
        var callback = events[key];
        if (typeof callback == 'function') callback.apply(this);
      }
    };

    this.on = function on(event_id, callback) {
      var current_events = _events[event_id];
      if (current_events) {
        current_events.push(callback);
      } else {
        _events[event_id] = [ callback ];
      }
    };

  }
  BeeHive.View = BeeHiveView;

})(window.BeeHive = window.BeeHive || {});
