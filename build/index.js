const fs = require('fs')

// Inform Go guark when js app and server started.
const useGuarkLockFile = function()
{
	fs.writeFile(`${process.cwd()}/guark.lock`, 'Do not delete me!', function (err)
	{
		if (err) throw err;
	})
}

// Check UI build dest.
const checkBeforeBuild = function()
{
	if (process.env.NODE_ENV == 'production' && !process.env.GUARK_BUILD_DIR) {

		console.error('ERROR: Guark build env dir not provided!')
		process.exit(1)
	}
}

module.exports.checkBeforeBuild = checkBeforeBuild
module.exports.useGuarkLockFile = useGuarkLockFile
