module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
		[
			"module-resolver",
			{
				"cwd": "babelrc",
				"root": ["./src"],
				"extensions": [".js", ".ios.js", ".android.js"],
				"alias": {
					"@screen": "./src/screen",
					"@sagas": "./src/sagas",
					"@firebase":"./src/firebase",
					"@reducers": "./src/reducers",
					"@store": "./src/store",
					"@assets": "./src/assets",
					"@constants": "./src/constants",
					"@validators": "./src/validators",
					"@navigator": "./src/navigators",
					"@api": "./src/api"
				}
			}
		]
	]
};
