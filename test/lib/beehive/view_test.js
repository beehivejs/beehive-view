var assert = require("assert");
var View = require("./../../../lib/beehive/view");

describe('BeeHive.View', function(){
  describe('#get()', function(){
    context('when the attribute is NOT set', function() {
      it('returns undefined', function() {
        var view = new View();
        assert.equal(undefined, view.get('nuffin'));
      });
    });

    context('when the attribute is set', function() {
      it('returns the attribute successfully', function(){
        var view = new View();
        view.set('foo', 1);
        assert.equal(1, view.get('foo'));
      });
    });
  });

  describe('#set()', function() {
    it('sets the attribute properly', function() {
      var view = new View();
      view.set('foo', 1);
      assert.equal(1, view.get('foo'));
    });

    it('does not expose the attribute', function() {
      var view = new View();
      view.set('foo', 1);
      assert.equal(undefined, view.foo);
    });

    it('triggers the appropriate change event', function () {
      var view = new View();

      var element_visible = false;

      function changeVisibility() {
        element_visible = true;
      }

      view.on('visibility:change', changeVisibility);
      view.set('visibility', true);
      assert.equal(true, element_visible);
    });

    it('raises when no value has been passed in');
  })
});
