const Guark =
{
	// Call a hook.
	hook: function(name)
	{
		return this.call("hook", {name: name})
	},

	// Call exported Go functions.
	call: function(funcName, args)
	{
		return window.__guark__call(funcName, args || {})
	},

	// Send desktop notification.
	notify: function(args)
	{
		return this.call("notify.send", args)
	},
};



module.exports = Guark
