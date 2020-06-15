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

// Overrride window alert
window.alert = function(message) {
	console.log("use dialog plugin instead of alert:", message)
}

window.confirm = function(message) {
	console.log("use dialog plugin instead of confirm:", message)
}

module.exports = Guark
