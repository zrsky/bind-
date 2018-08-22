(function(root, factory) {
	root.$ = root.DN = factory();
})(this, function() {
	var DN = {
		myBind: function(fn, context) {
			console.log(typeof fn)
			if (typeof fn != 'function') {
				throw new Error(fn + ' is not function');
			}
			var self = fn;
			var args = Array.prototype.slice.call(arguments, 2);
			var fResult = function() {
				self.apply(this, arguments);
				var bindArgs = Array.prototype.slice.call(arguments);
				return self.apply(this instanceof fResult ? this : context, args.concat(bindArgs));
			}
			fResult.prototype = new self();
			fResult.prototype.hibit = function() {
					console.log('我有两个坏毛病');
				}
				// fResult.prototype = self.prototype;
			return fResult;

		}
	};
	return DN;
})