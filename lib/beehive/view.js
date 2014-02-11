(function(BeeHive) {
  function BeeHiveView(element) {
    var _events = {}
      , _eventsById;

    this.element = element;
    this._attributes = {};

    _eventsById = function _eventsById(event_id) {
      var event = _events[event_id];
      if (!event) _events[event_id] = [];
      return event || _eventsById(event_id);
    };

    this.set = function set(attr, value) {
      this._attributes[attr] = value;
      this.trigger(attr + ':change');
      return this;
    };

    this.get = function get(attr) {
      return this._attributes[attr];
    };

    this.trigger = function trigger(event_id) {
      var events = _eventsById(event_id);
      for (var key in events) {
        var callback = events[key];
        if (typeof callback == 'function') callback.apply(this);
      }
    };

    this.on = function on(event_id, callback) {
      var current_events = _eventsById(event_id);
      current_events.push(callback);
    };

  }
  BeeHive.View = BeeHiveView;

})(window.BeeHive = window.BeeHive || {});
