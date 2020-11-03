const Guark =
{
	env_data: null,

	env()
	{
		if (this.env_data === null) {
			return this.call("env").then(r => {
				this.env_data = r
				return r
			})
		}

		return new Promise((res) => res(this.env_data))
	},

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

window.close = function() {
	Guark.exit()
}


module.exports = Guark
