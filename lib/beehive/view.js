(function() {

  function BeeHiveView(element) {
    this.element = element;
    var attributes = {};

    function set(attr, value) {
      attributes[attr] = value;
      this.__trigger(attr + ':change');
      return this;
    }
    this.set = set;

    function get(attr) { return attributes[attr]; }
    this.get = get;
  }

  /* Add evented beehaviour */
  BeeHive.Live.extend(BeeHiveView);

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
