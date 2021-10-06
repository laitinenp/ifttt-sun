// A comment
const axios = require('axios')

const iFTTTMakerKey = "iqytkhFVRHqNxH-EqI-qBGtfVct1cSUNNuxPUh5iy2p"

const iFTTTSunSetHookUrl = 
	"https://maker.ifttt.com/trigger/SunSet/with/key/" +
	iFTTTMakerKey

axios.get( iFTTTSunSetHookUrl ).then( resp => {
	console.log( resp.data )
})
