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
		return window["__guark_func_"+ funcName.replace('.', '$')](args || {})
	},

	// Send desktop notification.
	notify(message, args)
	{
		return this.call("notify.send", Object.assign(args || {}, {message: message}))
	},

	// exit the app.
	exit()
	{
		return this.call("exit")
	},
};

//
// Overrride default window funcs.
//
window.alert = function(message) {
	console.log("use dialog plugin instead of alert:", message)
}

window.confirm = function(message) {
	console.log("use dialog plugin instead of confirm:", message)
}

window.close = Guark.exit

module.exports = Guark
