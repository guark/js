const Guark =
{
	// Invoke a hook.
	hook(name)
	{
		return this.call("hook", {name: name})
	},

	// Call exported Go functions.
	call(funcName, args)
	{
		return window.__guark__call(funcName, args || {})
	},

	// Send desktop notification.
	notify(message, args)
	{
		return this.call("notify.send", Object.assign(args || {}, {message: message}))
	},
};

module.exports = Guark
