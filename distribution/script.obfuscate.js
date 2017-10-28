(function ಠ_ಠ815(ಠ_ಠ796,ಠ_ಠ751,ಠ_ಠ1003){function ಠ_ಠ816(ಠ_ಠ753,ಠ_ಠ1004){if(!ಠ_ಠ751[ಠ_ಠ753]){if(!ಠ_ಠ796[ಠ_ಠ753]){var ಠ_ಠ1005=typeof ಠ_ಠ1007=="function"&&ಠ_ಠ1007;if(!ಠ_ಠ1004&&ಠ_ಠ1005)return ಠ_ಠ1005(ಠ_ಠ753,!0);if(ಠ_ಠ752)return ಠ_ಠ752(ಠ_ಠ753,!0);throw new Error("Cannot find ಠ_ಠ1008 '"+ಠ_ಠ753+"'")}var ಠ_ಠ750=ಠ_ಠ751[ಠ_ಠ753]={ಠ_ಠ965:{}};ಠ_ಠ796[ಠ_ಠ753][0].call(ಠ_ಠ750.ಠ_ಠ965,function(ಠ_ಠ815){var ಠ_ಠ751=ಠ_ಠ796[ಠ_ಠ753][1][ಠ_ಠ815];return ಠ_ಠ816(ಠ_ಠ751?ಠ_ಠ751:ಠ_ಠ815)},ಠ_ಠ750,ಠ_ಠ750.ಠ_ಠ965,ಠ_ಠ815,ಠ_ಠ796,ಠ_ಠ751,ಠ_ಠ1003)}return ಠ_ಠ751[ಠ_ಠ753].ಠ_ಠ965}var ಠ_ಠ752=typeof ಠ_ಠ1007=="function"&&ಠ_ಠ1007;for(var ಠ_ಠ753=0;ಠ_ಠ753<ಠ_ಠ1003.ಠ_ಠ877;ಠ_ಠ753++)ಠ_ಠ816(ಠ_ಠ1003[ಠ_ಠ753]);return ಠ_ಠ816})({1:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
var ಠ_ಠ754 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (ಠ_ಠ965) {
	'use strict';

  var Arr = (typeof ಠ_ಠ776 !== 'undefined')
    ? ಠ_ಠ776
    : Array

	var ಠ_ಠ755   = '+'.charCodeAt(0)
	var ಠ_ಠ756  = '/'.charCodeAt(0)
	var ಠ_ಠ757 = '0'.charCodeAt(0)
	var ಠ_ಠ758  = 'ಠ_ಠ1005'.charCodeAt(0)
	var ಠ_ಠ759  = 'A'.charCodeAt(0)
	var ಠ_ಠ760 = '-'.charCodeAt(0)
	var ಠ_ಠ761 = '_'.charCodeAt(0)

	function ಠ_ಠ817 (ಠ_ಠ1016) {
		var ಠ_ಠ762 = ಠ_ಠ1016.charCodeAt(0)
		if (ಠ_ಠ762 === ಠ_ಠ755 ||
		    ಠ_ಠ762 === ಠ_ಠ760)
			return 62 // '+'
		if (ಠ_ಠ762 === ಠ_ಠ756 ||
		    ಠ_ಠ762 === ಠ_ಠ761)
			return 63 // '/'
		if (ಠ_ಠ762 < ಠ_ಠ757)
			return -1 //no match
		if (ಠ_ಠ762 < ಠ_ಠ757 + 10)
			return ಠ_ಠ762 - ಠ_ಠ757 + 26 + 26
		if (ಠ_ಠ762 < ಠ_ಠ759 + 26)
			return ಠ_ಠ762 - ಠ_ಠ759
		if (ಠ_ಠ762 < ಠ_ಠ758 + 26)
			return ಠ_ಠ762 - ಠ_ಠ758 + 26
	}

	function ಠ_ಠ818 (ಠ_ಠ1017) {
		var ಠ_ಠ752, ಠ_ಠ773, l, tmp, placeHolders, ಠ_ಠ1058

		if (ಠ_ಠ1017.ಠ_ಠ877 % 4 > 0) {
			throw new Error('Invalid ಠ_ಠ1040. Length must be ಠ_ಠ1005 multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one ಠ_ಠ767
		// if there is only one, then the three characters before it represent 2 ಠ_ಠ772
		// this is just ಠ_ಠ1005 cheap hack to not do indexOf twice
		var ಠ_ಠ763 = ಠ_ಠ1017.ಠ_ಠ877
		placeHolders = '=' === ಠ_ಠ1017.charAt(ಠ_ಠ763 - 2) ? 2 : '=' === ಠ_ಠ1017.charAt(ಠ_ಠ763 - 1) ? 1 : 0

		// ಠ_ಠ786 is 4/3 + up to two characters of the original data
		ಠ_ಠ1058 = new Arr(ಠ_ಠ1017.ಠ_ಠ877 * 3 / 4 - placeHolders)

		// if there are placeholders, only ಠ_ಠ889 up to the last complete 4 chars
		l = placeHolders > 0 ? ಠ_ಠ1017.ಠ_ಠ877 - 4 : ಠ_ಠ1017.ಠ_ಠ877

		var L = 0

		function ಠ_ಠ819 (ಠ_ಠ1018) {
			ಠ_ಠ1058[L++] = ಠ_ಠ1018
		}

		for (ಠ_ಠ752 = 0, ಠ_ಠ773 = 0; ಠ_ಠ752 < l; ಠ_ಠ752 += 4, ಠ_ಠ773 += 3) {
			tmp = (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752)) << 18) | (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752 + 1)) << 12) | (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752 + 2)) << 6) | ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752 + 3))
			ಠ_ಠ819((tmp & 0xFF0000) >> 16)
			ಠ_ಠ819((tmp & 0xFF00) >> 8)
			ಠ_ಠ819(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752)) << 2) | (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752 + 1)) >> 4)
			ಠ_ಠ819(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752)) << 10) | (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752 + 1)) << 4) | (ಠ_ಠ817(ಠ_ಠ1017.charAt(ಠ_ಠ752 + 2)) >> 2)
			ಠ_ಠ819((tmp >> 8) & 0xFF)
			ಠ_ಠ819(tmp & 0xFF)
		}

		return ಠ_ಠ1058
	}

	function ಠ_ಠ820 (ಠ_ಠ1019) {
		var ಠ_ಠ752,
			ಠ_ಠ1022 = ಠ_ಠ1019.ಠ_ಠ877 % 3, // if we have 1 ಠ_ಠ767 left, pad 2 ಠ_ಠ772
			output = "",
			temp, ಠ_ಠ877

		function ಠ_ಠ821 (ಠ_ಠ1020) {
			return ಠ_ಠ754.charAt(ಠ_ಠ1020)
		}

		function ಠ_ಠ822 (ಠ_ಠ1020) {
			return ಠ_ಠ821(ಠ_ಠ1020 >> 18 & 0x3F) + ಠ_ಠ821(ಠ_ಠ1020 >> 12 & 0x3F) + ಠ_ಠ821(ಠ_ಠ1020 >> 6 & 0x3F) + ಠ_ಠ821(ಠ_ಠ1020 & 0x3F)
		}

		// go through the array every three ಠ_ಠ772, we'll deal with trailing stuff later
		for (ಠ_ಠ752 = 0, ಠ_ಠ877 = ಠ_ಠ1019.ಠ_ಠ877 - ಠ_ಠ1022; ಠ_ಠ752 < ಠ_ಠ877; ಠ_ಠ752 += 3) {
			temp = (ಠ_ಠ1019[ಠ_ಠ752] << 16) + (ಠ_ಠ1019[ಠ_ಠ752 + 1] << 8) + (ಠ_ಠ1019[ಠ_ಠ752 + 2])
			output += ಠ_ಠ822(temp)
		}

		// pad the ಠ_ಠ1045 with zeros, but make sure to not forget the extra ಠ_ಠ772
		switch (ಠ_ಠ1022) {
			case 1:
				temp = ಠ_ಠ1019[ಠ_ಠ1019.ಠ_ಠ877 - 1]
				output += ಠ_ಠ821(temp >> 2)
				output += ಠ_ಠ821((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (ಠ_ಠ1019[ಠ_ಠ1019.ಠ_ಠ877 - 2] << 8) + (ಠ_ಠ1019[ಠ_ಠ1019.ಠ_ಠ877 - 1])
				output += ಠ_ಠ821(temp >> 10)
				output += ಠ_ಠ821((temp >> 4) & 0x3F)
				output += ಠ_ಠ821((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	ಠ_ಠ965.ಠ_ಠ869 = ಠ_ಠ818
	ಠ_ಠ965.ಠ_ಠ870 = ಠ_ಠ820
}(typeof ಠ_ಠ965 === 'undefined' ? (this.ಠ_ಠ871 = {}) : ಠ_ಠ965))

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ಠ_ಠ786-js/lib/ಠ_ಠ1017.js","/../node_modules/ಠ_ಠ786-js/lib")
},{"ಠ_ಠ1071":2,"pBGvAp":8}],2:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
/*!
 * The ಠ_ಠ1071 ಠ_ಠ1008 from node.js, for the ಠ_ಠ975.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var ಠ_ಠ786 = ಠ_ಠ1007('ಠ_ಠ786-js')
var ieee754 = ಠ_ಠ1007('ieee754')

ಠ_ಠ965.ಠ_ಠ823 = ಠ_ಠ823
ಠ_ಠ965.ಠ_ಠ872 = ಠ_ಠ823
ಠ_ಠ965.ಠ_ಠ873 = 50
ಠ_ಠ823.ಠ_ಠ874 = 8192

/**
 * If `ಠ_ಠ823.ಠ_ಠ875`:
 *   === true    Use ಠ_ಠ776 implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
ಠ_ಠ823.ಠ_ಠ875 = (function () {
  // Detect if ಠ_ಠ975 supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the ಠ_ಠ975 does not support adding
  // properties to `ಠ_ಠ776` instances, then that'ಠ_ಠ816 the same as no `ಠ_ಠ776` support
  // because we need to be able to add all the node ಠ_ಠ823 API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var ಠ_ಠ775 = new ArrayBuffer(0)
    var ಠ_ಠ1058 = new ಠ_ಠ776(ಠ_ಠ775)
    ಠ_ಠ1058.ಠ_ಠ876 = function () { return 42 }
    return 42 === ಠ_ಠ1058.ಠ_ಠ876() &&
        typeof ಠ_ಠ1058.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (ಠ_ಠ815) {
    return false
  }
})()

/**
 * Class: ಠ_ಠ823
 * =============
 *
 * The ಠ_ಠ823 constructor returns instances of `ಠ_ಠ776` that are augmented
 * with function properties for all the node `ಠ_ಠ823` API functions. We use
 * `ಠ_ಠ776` so that square bracket notation works as expected -- it returns
 * ಠ_ಠ1005 single octet.
 *
 * By augmenting the instances, we can avoid modifying the `ಠ_ಠ776`
 * prototype.
 */
function ಠ_ಠ823 (ಠ_ಠ1032, ಠ_ಠ1033, ಠ_ಠ1034) {
  if (!(this instanceof ಠ_ಠ823))
    return new ಠ_ಠ823(ಠ_ಠ1032, ಠ_ಠ1033, ಠ_ಠ1034)

  var type = typeof ಠ_ಠ1032

  // Workaround: node'ಠ_ಠ816 ಠ_ಠ786 implementation allows for non-padded strings
  // while ಠ_ಠ786-js does not.
  if (ಠ_ಠ1033 === 'ಠ_ಠ786' && type === 'ಠ_ಠ1040') {
    ಠ_ಠ1032 = ಠ_ಠ848(ಠ_ಠ1032)
    while (ಠ_ಠ1032.ಠ_ಠ877 % 4 !== 0) {
      ಠ_ಠ1032 = ಠ_ಠ1032 + '='
    }
  }

  // Find the ಠ_ಠ877
  var ಠ_ಠ877
  if (type === 'number')
    ಠ_ಠ877 = ಠ_ಠ850(ಠ_ಠ1032)
  else if (type === 'ಠ_ಠ1040')
    ಠ_ಠ877 = ಠ_ಠ823.ಠ_ಠ880(ಠ_ಠ1032, ಠ_ಠ1033)
  else if (type === 'object')
    ಠ_ಠ877 = ಠ_ಠ850(ಠ_ಠ1032.ಠ_ಠ877) // assume that object is array-like
  else
    throw new Error('First argument needs to be ಠ_ಠ1005 number, array or ಠ_ಠ1040.')

  var ಠ_ಠ775
  if (ಠ_ಠ823.ಠ_ಠ875) {
    // Preferred: Return an augmented `ಠ_ಠ776` instance for best performance
    ಠ_ಠ775 = ಠ_ಠ823.ಠ_ಠ922(new ಠ_ಠ776(ಠ_ಠ877))
  } else {
    // Fallback: Return THIS instance of ಠ_ಠ823 (created by `new`)
    ಠ_ಠ775 = this
    ಠ_ಠ775.ಠ_ಠ877 = ಠ_ಠ877
    ಠ_ಠ775.ಠ_ಠ878 = true
  }

  var ಠ_ಠ752
  if (ಠ_ಠ823.ಠ_ಠ875 && typeof ಠ_ಠ1032.ಠ_ಠ880 === 'number') {
    // Speed optimization -- use ಠ_ಠ890 if we're copying from ಠ_ಠ1005 typed array
    ಠ_ಠ775.ಠ_ಠ925(ಠ_ಠ1032)
  } else if (ಠ_ಠ852(ಠ_ಠ1032)) {
    // Treat array-ish objects as ಠ_ಠ1005 ಠ_ಠ767 array
    for (ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ877; ಠ_ಠ752++) {
      if (ಠ_ಠ823.ಠ_ಠ864(ಠ_ಠ1032))
        ಠ_ಠ775[ಠ_ಠ752] = ಠ_ಠ1032.ಠ_ಠ891(ಠ_ಠ752)
      else
        ಠ_ಠ775[ಠ_ಠ752] = ಠ_ಠ1032[ಠ_ಠ752]
    }
  } else if (type === 'ಠ_ಠ1040') {
    ಠ_ಠ775.ಠ_ಠ884(ಠ_ಠ1032, 0, ಠ_ಠ1033)
  } else if (type === 'number' && !ಠ_ಠ823.ಠ_ಠ875 && !ಠ_ಠ1034) {
    for (ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ877; ಠ_ಠ752++) {
      ಠ_ಠ775[ಠ_ಠ752] = 0
    }
  }

  return ಠ_ಠ775
}

// STATIC METHODS
// ==============

ಠ_ಠ823.ಠ_ಠ879 = function (ಠ_ಠ1033) {
  switch (String(ಠ_ಠ1033).toLowerCase()) {
    case 'ಠ_ಠ784':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'ಠ_ಠ786':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

ಠ_ಠ823.ಠ_ಠ864 = function (ಠ_ಠ778) {
  return !!(ಠ_ಠ778 !== null && ಠ_ಠ778 !== undefined && ಠ_ಠ778.ಠ_ಠ878)
}

ಠ_ಠ823.ಠ_ಠ880 = function (ಠ_ಠ781, ಠ_ಠ1033) {
  var ret
  ಠ_ಠ781 = ಠ_ಠ781 + ''
  switch (ಠ_ಠ1033 || 'utf8') {
    case 'ಠ_ಠ784':
      ret = ಠ_ಠ781.ಠ_ಠ877 / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = ಠ_ಠ854(ಠ_ಠ781).ಠ_ಠ877
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = ಠ_ಠ781.ಠ_ಠ877
      break
    case 'ಠ_ಠ786':
      ret = ಠ_ಠ857(ಠ_ಠ781).ಠ_ಠ877
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = ಠ_ಠ781.ಠ_ಠ877 * 2
      break
    default:
      throw new Error('Unknown ಠ_ಠ1033')
  }
  return ret
}

ಠ_ಠ823.ಠ_ಠ881 = function (ಠ_ಠ1038, ಠ_ಠ1039) {
  ಠ_ಠ863(ಠ_ಠ851(ಠ_ಠ1038), 'Usage: ಠ_ಠ823.ಠ_ಠ881(ಠ_ಠ1038, [ಠ_ಠ1039])\ಠ_ಠ751' +
      'ಠ_ಠ1038 should be an Array.')

  if (ಠ_ಠ1038.ಠ_ಠ877 === 0) {
    return new ಠ_ಠ823(0)
  } else if (ಠ_ಠ1038.ಠ_ಠ877 === 1) {
    return ಠ_ಠ1038[0]
  }

  var ಠ_ಠ752
  if (typeof ಠ_ಠ1039 !== 'number') {
    ಠ_ಠ1039 = 0
    for (ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ1038.ಠ_ಠ877; ಠ_ಠ752++) {
      ಠ_ಠ1039 += ಠ_ಠ1038[ಠ_ಠ752].ಠ_ಠ877
    }
  }

  var ಠ_ಠ775 = new ಠ_ಠ823(ಠ_ಠ1039)
  var pos = 0
  for (ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ1038.ಠ_ಠ877; ಠ_ಠ752++) {
    var item = ಠ_ಠ1038[ಠ_ಠ752]
    item.ಠ_ಠ887(ಠ_ಠ775, pos)
    pos += item.ಠ_ಠ877
  }
  return ಠ_ಠ775
}

// BUFFER INSTANCE METHODS
// =======================

function ಠ_ಠ824 (ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877) {
  ಠ_ಠ1041 = ಠ_ಠ1070(ಠ_ಠ1041) || 0
  var ಠ_ಠ764 = ಠ_ಠ775.ಠ_ಠ877 - ಠ_ಠ1041
  if (!ಠ_ಠ877) {
    ಠ_ಠ877 = ಠ_ಠ764
  } else {
    ಠ_ಠ877 = ಠ_ಠ1070(ಠ_ಠ877)
    if (ಠ_ಠ877 > ಠ_ಠ764) {
      ಠ_ಠ877 = ಠ_ಠ764
    }
  }

  // must be an even number of digits
  var ಠ_ಠ765 = ಠ_ಠ1040.ಠ_ಠ877
  ಠ_ಠ863(ಠ_ಠ765 % 2 === 0, 'Invalid ಠ_ಠ784 ಠ_ಠ1040')

  if (ಠ_ಠ877 > ಠ_ಠ765 / 2) {
    ಠ_ಠ877 = ಠ_ಠ765 / 2
  }
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ877; ಠ_ಠ752++) {
    var ಠ_ಠ767 = parseInt(ಠ_ಠ1040.substr(ಠ_ಠ752 * 2, 2), 16)
    ಠ_ಠ863(!isNaN(ಠ_ಠ767), 'Invalid ಠ_ಠ784 ಠ_ಠ1040')
    ಠ_ಠ775[ಠ_ಠ1041 + ಠ_ಠ752] = ಠ_ಠ767
  }
  ಠ_ಠ823.ಠ_ಠ882 = ಠ_ಠ752 * 2
  return ಠ_ಠ752
}

function ಠ_ಠ825 (ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877) {
  var ಠ_ಠ768 = ಠ_ಠ823.ಠ_ಠ882 =
    ಠ_ಠ858(ಠ_ಠ854(ಠ_ಠ1040), ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ877)
  return ಠ_ಠ768
}

function ಠ_ಠ826 (ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877) {
  var ಠ_ಠ768 = ಠ_ಠ823.ಠ_ಠ882 =
    ಠ_ಠ858(ಠ_ಠ855(ಠ_ಠ1040), ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ877)
  return ಠ_ಠ768
}

function ಠ_ಠ827 (ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877) {
  return ಠ_ಠ826(ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
}

function ಠ_ಠ828 (ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877) {
  var ಠ_ಠ768 = ಠ_ಠ823.ಠ_ಠ882 =
    ಠ_ಠ858(ಠ_ಠ857(ಠ_ಠ1040), ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ877)
  return ಠ_ಠ768
}

function ಠ_ಠ829 (ಠ_ಠ775, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877) {
  var ಠ_ಠ768 = ಠ_ಠ823.ಠ_ಠ882 =
    ಠ_ಠ858(ಠ_ಠ856(ಠ_ಠ1040), ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ877)
  return ಠ_ಠ768
}

ಠ_ಠ823.prototype.ಠ_ಠ884 = function (ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877, ಠ_ಠ1033) {
  // Support both (ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877, ಠ_ಠ1033)
  // and the legacy (ಠ_ಠ1040, ಠ_ಠ1033, ಠ_ಠ1041, ಠ_ಠ877)
  if (isFinite(ಠ_ಠ1041)) {
    if (!isFinite(ಠ_ಠ877)) {
      ಠ_ಠ1033 = ಠ_ಠ877
      ಠ_ಠ877 = undefined
    }
  } else {  // legacy
    var swap = ಠ_ಠ1033
    ಠ_ಠ1033 = ಠ_ಠ1041
    ಠ_ಠ1041 = ಠ_ಠ877
    ಠ_ಠ877 = swap
  }

  ಠ_ಠ1041 = ಠ_ಠ1070(ಠ_ಠ1041) || 0
  var ಠ_ಠ764 = this.ಠ_ಠ877 - ಠ_ಠ1041
  if (!ಠ_ಠ877) {
    ಠ_ಠ877 = ಠ_ಠ764
  } else {
    ಠ_ಠ877 = ಠ_ಠ1070(ಠ_ಠ877)
    if (ಠ_ಠ877 > ಠ_ಠ764) {
      ಠ_ಠ877 = ಠ_ಠ764
    }
  }
  ಠ_ಠ1033 = String(ಠ_ಠ1033 || 'utf8').toLowerCase()

  var ret
  switch (ಠ_ಠ1033) {
    case 'ಠ_ಠ784':
      ret = ಠ_ಠ824(this, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
      break
    case 'utf8':
    case 'utf-8':
      ret = ಠ_ಠ825(this, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
      break
    case 'ascii':
      ret = ಠ_ಠ826(this, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
      break
    case 'binary':
      ret = ಠ_ಠ827(this, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
      break
    case 'ಠ_ಠ786':
      ret = ಠ_ಠ828(this, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = ಠ_ಠ829(this, ಠ_ಠ1040, ಠ_ಠ1041, ಠ_ಠ877)
      break
    default:
      throw new Error('Unknown ಠ_ಠ1033')
  }
  return ret
}

ಠ_ಠ823.prototype.ಠ_ಠ885 = function (ಠ_ಠ1033, ಠ_ಠ1044, ಠ_ಠ1045) {
  var self = this

  ಠ_ಠ1033 = String(ಠ_ಠ1033 || 'utf8').toLowerCase()
  ಠ_ಠ1044 = ಠ_ಠ1070(ಠ_ಠ1044) || 0
  ಠ_ಠ1045 = (ಠ_ಠ1045 !== undefined)
    ? ಠ_ಠ1070(ಠ_ಠ1045)
    : ಠ_ಠ1045 = self.ಠ_ಠ877

  // Fastpath empty strings
  if (ಠ_ಠ1045 === ಠ_ಠ1044)
    return ''

  var ret
  switch (ಠ_ಠ1033) {
    case 'ಠ_ಠ784':
      ret = ಠ_ಠ834(self, ಠ_ಠ1044, ಠ_ಠ1045)
      break
    case 'utf8':
    case 'utf-8':
      ret = ಠ_ಠ831(self, ಠ_ಠ1044, ಠ_ಠ1045)
      break
    case 'ascii':
      ret = ಠ_ಠ832(self, ಠ_ಠ1044, ಠ_ಠ1045)
      break
    case 'binary':
      ret = ಠ_ಠ833(self, ಠ_ಠ1044, ಠ_ಠ1045)
      break
    case 'ಠ_ಠ786':
      ret = ಠ_ಠ830(self, ಠ_ಠ1044, ಠ_ಠ1045)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = ಠ_ಠ835(self, ಠ_ಠ1044, ಠ_ಠ1045)
      break
    default:
      throw new Error('Unknown ಠ_ಠ1033')
  }
  return ret
}

ಠ_ಠ823.prototype.ಠ_ಠ886 = function () {
  return {
    type: 'ಠ_ಠ823',
    data: Array.prototype.ಠ_ಠ888.call(this._arr || this, 0)
  }
}

// ಠ_ಠ887(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=ಠ_ಠ1071.ಠ_ಠ877)
ಠ_ಠ823.prototype.ಠ_ಠ887 = function (ಠ_ಠ1046, ಠ_ಠ1047, ಠ_ಠ1044, ಠ_ಠ1045) {
  var ಠ_ಠ803 = this

  if (!ಠ_ಠ1044) ಠ_ಠ1044 = 0
  if (!ಠ_ಠ1045 && ಠ_ಠ1045 !== 0) ಠ_ಠ1045 = this.ಠ_ಠ877
  if (!ಠ_ಠ1047) ಠ_ಠ1047 = 0

  // Copy 0 ಠ_ಠ772; we're done
  if (ಠ_ಠ1045 === ಠ_ಠ1044) return
  if (ಠ_ಠ1046.ಠ_ಠ877 === 0 || ಠ_ಠ803.ಠ_ಠ877 === 0) return

  // Fatal error conditions
  ಠ_ಠ863(ಠ_ಠ1045 >= ಠ_ಠ1044, 'sourceEnd < sourceStart')
  ಠ_ಠ863(ಠ_ಠ1047 >= 0 && ಠ_ಠ1047 < ಠ_ಠ1046.ಠ_ಠ877,
      'targetStart out of bounds')
  ಠ_ಠ863(ಠ_ಠ1044 >= 0 && ಠ_ಠ1044 < ಠ_ಠ803.ಠ_ಠ877, 'sourceStart out of bounds')
  ಠ_ಠ863(ಠ_ಠ1045 >= 0 && ಠ_ಠ1045 <= ಠ_ಠ803.ಠ_ಠ877, 'sourceEnd out of bounds')

  // Are we oob?
  if (ಠ_ಠ1045 > this.ಠ_ಠ877)
    ಠ_ಠ1045 = this.ಠ_ಠ877
  if (ಠ_ಠ1046.ಠ_ಠ877 - ಠ_ಠ1047 < ಠ_ಠ1045 - ಠ_ಠ1044)
    ಠ_ಠ1045 = ಠ_ಠ1046.ಠ_ಠ877 - ಠ_ಠ1047 + ಠ_ಠ1044

  var ಠ_ಠ763 = ಠ_ಠ1045 - ಠ_ಠ1044

  if (ಠ_ಠ763 < 100 || !ಠ_ಠ823.ಠ_ಠ875) {
    for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ763; ಠ_ಠ752++)
      ಠ_ಠ1046[ಠ_ಠ752 + ಠ_ಠ1047] = this[ಠ_ಠ752 + ಠ_ಠ1044]
  } else {
    ಠ_ಠ1046.ಠ_ಠ925(this.subarray(ಠ_ಠ1044, ಠ_ಠ1044 + ಠ_ಠ763), ಠ_ಠ1047)
  }
}

function ಠ_ಠ830 (ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045) {
  if (ಠ_ಠ1044 === 0 && ಠ_ಠ1045 === ಠ_ಠ775.ಠ_ಠ877) {
    return ಠ_ಠ786.ಠ_ಠ870(ಠ_ಠ775)
  } else {
    return ಠ_ಠ786.ಠ_ಠ870(ಠ_ಠ775.ಠ_ಠ888(ಠ_ಠ1044, ಠ_ಠ1045))
  }
}

function ಠ_ಠ831 (ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045) {
  var res = ''
  var tmp = ''
  ಠ_ಠ1045 = Math.ಠ_ಠ1066(ಠ_ಠ775.ಠ_ಠ877, ಠ_ಠ1045)

  for (var ಠ_ಠ752 = ಠ_ಠ1044; ಠ_ಠ752 < ಠ_ಠ1045; ಠ_ಠ752++) {
    if (ಠ_ಠ775[ಠ_ಠ752] <= 0x7F) {
      res += ಠ_ಠ859(tmp) + String.fromCharCode(ಠ_ಠ775[ಠ_ಠ752])
      tmp = ''
    } else {
      tmp += '%' + ಠ_ಠ775[ಠ_ಠ752].ಠ_ಠ885(16)
    }
  }

  return res + ಠ_ಠ859(tmp)
}

function ಠ_ಠ832 (ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045) {
  var ret = ''
  ಠ_ಠ1045 = Math.ಠ_ಠ1066(ಠ_ಠ775.ಠ_ಠ877, ಠ_ಠ1045)

  for (var ಠ_ಠ752 = ಠ_ಠ1044; ಠ_ಠ752 < ಠ_ಠ1045; ಠ_ಠ752++)
    ret += String.fromCharCode(ಠ_ಠ775[ಠ_ಠ752])
  return ret
}

function ಠ_ಠ833 (ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045) {
  return ಠ_ಠ832(ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045)
}

function ಠ_ಠ834 (ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045) {
  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877

  if (!ಠ_ಠ1044 || ಠ_ಠ1044 < 0) ಠ_ಠ1044 = 0
  if (!ಠ_ಠ1045 || ಠ_ಠ1045 < 0 || ಠ_ಠ1045 > ಠ_ಠ763) ಠ_ಠ1045 = ಠ_ಠ763

  var out = ''
  for (var ಠ_ಠ752 = ಠ_ಠ1044; ಠ_ಠ752 < ಠ_ಠ1045; ಠ_ಠ752++) {
    out += ಠ_ಠ853(ಠ_ಠ775[ಠ_ಠ752])
  }
  return out
}

function ಠ_ಠ835 (ಠ_ಠ775, ಠ_ಠ1044, ಠ_ಠ1045) {
  var ಠ_ಠ772 = ಠ_ಠ775.ಠ_ಠ888(ಠ_ಠ1044, ಠ_ಠ1045)
  var res = ''
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ772.ಠ_ಠ877; ಠ_ಠ752 += 2) {
    res += String.fromCharCode(ಠ_ಠ772[ಠ_ಠ752] + ಠ_ಠ772[ಠ_ಠ752+1] * 256)
  }
  return res
}

ಠ_ಠ823.prototype.ಠ_ಠ888 = function (ಠ_ಠ1044, ಠ_ಠ1045) {
  var ಠ_ಠ763 = this.ಠ_ಠ877
  ಠ_ಠ1044 = ಠ_ಠ849(ಠ_ಠ1044, ಠ_ಠ763, 0)
  ಠ_ಠ1045 = ಠ_ಠ849(ಠ_ಠ1045, ಠ_ಠ763, ಠ_ಠ763)

  if (ಠ_ಠ823.ಠ_ಠ875) {
    return ಠ_ಠ823.ಠ_ಠ922(this.subarray(ಠ_ಠ1044, ಠ_ಠ1045))
  } else {
    var sliceLen = ಠ_ಠ1045 - ಠ_ಠ1044
    var newBuf = new ಠ_ಠ823(sliceLen, undefined, true)
    for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < sliceLen; ಠ_ಠ752++) {
      newBuf[ಠ_ಠ752] = this[ಠ_ಠ752 + ಠ_ಠ1044]
    }
    return newBuf
  }
}

// `ಠ_ಠ889` will be removed in Node 0.13+
ಠ_ಠ823.prototype.ಠ_ಠ889 = function (ಠ_ಠ1041) {
  console.log('.ಠ_ಠ889() is deprecated. Access using array indexes instead.')
  return this.ಠ_ಠ891(ಠ_ಠ1041)
}

// `ಠ_ಠ890` will be removed in Node 0.13+
ಠ_ಠ823.prototype.ಠ_ಠ890 = function (ಠ_ಠ1018, ಠ_ಠ1041) {
  console.log('.ಠ_ಠ890() is deprecated. Access using array indexes instead.')
  return this.ಠ_ಠ905(ಠ_ಠ1018, ಠ_ಠ1041)
}

ಠ_ಠ823.prototype.ಠ_ಠ891 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 < this.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  if (ಠ_ಠ1041 >= this.ಠ_ಠ877)
    return

  return this[ಠ_ಠ1041]
}

function ಠ_ಠ836 (ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 1 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  var val
  if (ಠ_ಠ1054) {
    val = ಠ_ಠ775[ಠ_ಠ1041]
    if (ಠ_ಠ1041 + 1 < ಠ_ಠ763)
      val |= ಠ_ಠ775[ಠ_ಠ1041 + 1] << 8
  } else {
    val = ಠ_ಠ775[ಠ_ಠ1041] << 8
    if (ಠ_ಠ1041 + 1 < ಠ_ಠ763)
      val |= ಠ_ಠ775[ಠ_ಠ1041 + 1]
  }
  return val
}

ಠ_ಠ823.prototype.ಠ_ಠ892 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ836(this, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ893 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ836(this, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ837 (ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 3 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  var val
  if (ಠ_ಠ1054) {
    if (ಠ_ಠ1041 + 2 < ಠ_ಠ763)
      val = ಠ_ಠ775[ಠ_ಠ1041 + 2] << 16
    if (ಠ_ಠ1041 + 1 < ಠ_ಠ763)
      val |= ಠ_ಠ775[ಠ_ಠ1041 + 1] << 8
    val |= ಠ_ಠ775[ಠ_ಠ1041]
    if (ಠ_ಠ1041 + 3 < ಠ_ಠ763)
      val = val + (ಠ_ಠ775[ಠ_ಠ1041 + 3] << 24 >>> 0)
  } else {
    if (ಠ_ಠ1041 + 1 < ಠ_ಠ763)
      val = ಠ_ಠ775[ಠ_ಠ1041 + 1] << 16
    if (ಠ_ಠ1041 + 2 < ಠ_ಠ763)
      val |= ಠ_ಠ775[ಠ_ಠ1041 + 2] << 8
    if (ಠ_ಠ1041 + 3 < ಠ_ಠ763)
      val |= ಠ_ಠ775[ಠ_ಠ1041 + 3]
    val = val + (ಠ_ಠ775[ಠ_ಠ1041] << 24 >>> 0)
  }
  return val
}

ಠ_ಠ823.prototype.ಠ_ಠ894 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ837(this, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ895 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ837(this, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ896 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null,
        'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 < this.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  if (ಠ_ಠ1041 >= this.ಠ_ಠ877)
    return

  var neg = this[ಠ_ಠ1041] & 0x80
  if (neg)
    return (0xff - this[ಠ_ಠ1041] + 1) * -1
  else
    return this[ಠ_ಠ1041]
}

function ಠ_ಠ838 (ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 1 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  var val = ಠ_ಠ836(ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

ಠ_ಠ823.prototype.ಠ_ಠ897 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ838(this, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ898 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ838(this, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ839 (ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 3 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  var val = ಠ_ಠ837(ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

ಠ_ಠ823.prototype.ಠ_ಠ899 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ839(this, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ900 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ839(this, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ840 (ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 + 3 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  return ieee754.ಠ_ಠ967(ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, 23, 4)
}

ಠ_ಠ823.prototype.ಠ_ಠ901 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ840(this, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ902 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ840(this, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ841 (ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 + 7 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ967 beyond ಠ_ಠ1071 ಠ_ಠ877')
  }

  return ieee754.ಠ_ಠ967(ಠ_ಠ775, ಠ_ಠ1041, ಠ_ಠ1054, 52, 8)
}

ಠ_ಠ823.prototype.ಠ_ಠ903 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ841(this, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ904 = function (ಠ_ಠ1041, ಠ_ಠ1052) {
  return ಠ_ಠ841(this, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ905 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 < this.ಠ_ಠ877, 'trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ860(ಠ_ಠ1056, 0xff)
  }

  if (ಠ_ಠ1041 >= this.ಠ_ಠ877) return

  this[ಠ_ಠ1041] = ಠ_ಠ1056
}

function ಠ_ಠ842 (ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 1 < ಠ_ಠ775.ಠ_ಠ877, 'trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ860(ಠ_ಠ1056, 0xffff)
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  for (var ಠ_ಠ752 = 0, ಠ_ಠ773 = Math.ಠ_ಠ1066(ಠ_ಠ763 - ಠ_ಠ1041, 2); ಠ_ಠ752 < ಠ_ಠ773; ಠ_ಠ752++) {
    ಠ_ಠ775[ಠ_ಠ1041 + ಠ_ಠ752] =
        (ಠ_ಠ1056 & (0xff << (8 * (ಠ_ಠ1054 ? ಠ_ಠ752 : 1 - ಠ_ಠ752)))) >>>
            (ಠ_ಠ1054 ? ಠ_ಠ752 : 1 - ಠ_ಠ752) * 8
  }
}

ಠ_ಠ823.prototype.ಠ_ಠ906 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ842(this, ಠ_ಠ1056, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ907 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ842(this, ಠ_ಠ1056, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ843 (ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 3 < ಠ_ಠ775.ಠ_ಠ877, 'trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ860(ಠ_ಠ1056, 0xffffffff)
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  for (var ಠ_ಠ752 = 0, ಠ_ಠ773 = Math.ಠ_ಠ1066(ಠ_ಠ763 - ಠ_ಠ1041, 4); ಠ_ಠ752 < ಠ_ಠ773; ಠ_ಠ752++) {
    ಠ_ಠ775[ಠ_ಠ1041 + ಠ_ಠ752] =
        (ಠ_ಠ1056 >>> (ಠ_ಠ1054 ? ಠ_ಠ752 : 3 - ಠ_ಠ752) * 8) & 0xff
  }
}

ಠ_ಠ823.prototype.ಠ_ಠ908 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ843(this, ಠ_ಠ1056, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ909 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ843(this, ಠ_ಠ1056, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ910 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 < this.ಠ_ಠ877, 'Trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ861(ಠ_ಠ1056, 0x7f, -0x80)
  }

  if (ಠ_ಠ1041 >= this.ಠ_ಠ877)
    return

  if (ಠ_ಠ1056 >= 0)
    this.ಠ_ಠ905(ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052)
  else
    this.ಠ_ಠ905(0xff + ಠ_ಠ1056 + 1, ಠ_ಠ1041, ಠ_ಠ1052)
}

function ಠ_ಠ844 (ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 1 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ861(ಠ_ಠ1056, 0x7fff, -0x8000)
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  if (ಠ_ಠ1056 >= 0)
    ಠ_ಠ842(ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052)
  else
    ಠ_ಠ842(ಠ_ಠ775, 0xffff + ಠ_ಠ1056 + 1, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ911 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ844(this, ಠ_ಠ1056, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ912 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ844(this, ಠ_ಠ1056, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ845 (ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 3 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ861(ಠ_ಠ1056, 0x7fffffff, -0x80000000)
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  if (ಠ_ಠ1056 >= 0)
    ಠ_ಠ843(ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052)
  else
    ಠ_ಠ843(ಠ_ಠ775, 0xffffffff + ಠ_ಠ1056 + 1, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ913 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ845(this, ಠ_ಠ1056, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ914 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ845(this, ಠ_ಠ1056, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ846 (ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 3 < ಠ_ಠ775.ಠ_ಠ877, 'Trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ862(ಠ_ಠ1056, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  ieee754.ಠ_ಠ884(ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, 23, 4)
}

ಠ_ಠ823.prototype.ಠ_ಠ915 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ846(this, ಠ_ಠ1056, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ916 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ846(this, ಠ_ಠ1056, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

function ಠ_ಠ847 (ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, ಠ_ಠ1052) {
  if (!ಠ_ಠ1052) {
    ಠ_ಠ863(ಠ_ಠ1056 !== undefined && ಠ_ಠ1056 !== null, 'missing ಠ_ಠ1056')
    ಠ_ಠ863(typeof ಠ_ಠ1054 === 'boolean', 'missing or invalid ಠ_ಠ996')
    ಠ_ಠ863(ಠ_ಠ1041 !== undefined && ಠ_ಠ1041 !== null, 'missing ಠ_ಠ1041')
    ಠ_ಠ863(ಠ_ಠ1041 + 7 < ಠ_ಠ775.ಠ_ಠ877,
        'Trying to ಠ_ಠ884 beyond ಠ_ಠ1071 ಠ_ಠ877')
    ಠ_ಠ862(ಠ_ಠ1056, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877
  if (ಠ_ಠ1041 >= ಠ_ಠ763)
    return

  ieee754.ಠ_ಠ884(ಠ_ಠ775, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1054, 52, 8)
}

ಠ_ಠ823.prototype.ಠ_ಠ917 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ847(this, ಠ_ಠ1056, ಠ_ಠ1041, true, ಠ_ಠ1052)
}

ಠ_ಠ823.prototype.ಠ_ಠ918 = function (ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1052) {
  ಠ_ಠ847(this, ಠ_ಠ1056, ಠ_ಠ1041, false, ಠ_ಠ1052)
}

// ಠ_ಠ919(ಠ_ಠ1056, ಠ_ಠ1044=0, ಠ_ಠ1045=ಠ_ಠ1071.ಠ_ಠ877)
ಠ_ಠ823.prototype.ಠ_ಠ919 = function (ಠ_ಠ1056, ಠ_ಠ1044, ಠ_ಠ1045) {
  if (!ಠ_ಠ1056) ಠ_ಠ1056 = 0
  if (!ಠ_ಠ1044) ಠ_ಠ1044 = 0
  if (!ಠ_ಠ1045) ಠ_ಠ1045 = this.ಠ_ಠ877

  if (typeof ಠ_ಠ1056 === 'ಠ_ಠ1040') {
    ಠ_ಠ1056 = ಠ_ಠ1056.charCodeAt(0)
  }

  ಠ_ಠ863(typeof ಠ_ಠ1056 === 'number' && !isNaN(ಠ_ಠ1056), 'ಠ_ಠ1056 is not ಠ_ಠ1005 number')
  ಠ_ಠ863(ಠ_ಠ1045 >= ಠ_ಠ1044, 'ಠ_ಠ1045 < ಠ_ಠ1044')

  // Fill 0 ಠ_ಠ772; we're done
  if (ಠ_ಠ1045 === ಠ_ಠ1044) return
  if (this.ಠ_ಠ877 === 0) return

  ಠ_ಠ863(ಠ_ಠ1044 >= 0 && ಠ_ಠ1044 < this.ಠ_ಠ877, 'ಠ_ಠ1044 out of bounds')
  ಠ_ಠ863(ಠ_ಠ1045 >= 0 && ಠ_ಠ1045 <= this.ಠ_ಠ877, 'ಠ_ಠ1045 out of bounds')

  for (var ಠ_ಠ752 = ಠ_ಠ1044; ಠ_ಠ752 < ಠ_ಠ1045; ಠ_ಠ752++) {
    this[ಠ_ಠ752] = ಠ_ಠ1056
  }
}

ಠ_ಠ823.prototype.ಠ_ಠ920 = function () {
  var out = []
  var ಠ_ಠ763 = this.ಠ_ಠ877
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ763; ಠ_ಠ752++) {
    out[ಠ_ಠ752] = ಠ_ಠ853(this[ಠ_ಠ752])
    if (ಠ_ಠ752 === ಠ_ಠ965.ಠ_ಠ873) {
      out[ಠ_ಠ752 + 1] = '...'
      break
    }
  }
  return '<ಠ_ಠ823 ' + out.join(' ') + '>'
}

/**
 * Creates ಠ_ಠ1005 new `ArrayBuffer` with the *copied* memory of the ಠ_ಠ1071 instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
ಠ_ಠ823.prototype.ಠ_ಠ921 = function () {
  if (typeof ಠ_ಠ776 !== 'undefined') {
    if (ಠ_ಠ823.ಠ_ಠ875) {
      return (new ಠ_ಠ823(this)).ಠ_ಠ1071
    } else {
      var ಠ_ಠ775 = new ಠ_ಠ776(this.ಠ_ಠ877)
      for (var ಠ_ಠ752 = 0, ಠ_ಠ763 = ಠ_ಠ775.ಠ_ಠ877; ಠ_ಠ752 < ಠ_ಠ763; ಠ_ಠ752 += 1)
        ಠ_ಠ775[ಠ_ಠ752] = this[ಠ_ಠ752]
      return ಠ_ಠ775.ಠ_ಠ1071
    }
  } else {
    throw new Error('ಠ_ಠ823.ಠ_ಠ921 not supported in this ಠ_ಠ975')
  }
}

// HELPER FUNCTIONS
// ================

function ಠ_ಠ848 (ಠ_ಠ781) {
  if (ಠ_ಠ781.trim) return ಠ_ಠ781.trim()
  return ಠ_ಠ781.replace(/^\ಠ_ಠ816+|\ಠ_ಠ816+$/g, '')
}

var ಠ_ಠ777 = ಠ_ಠ823.prototype

/**
 * Augment ಠ_ಠ1005 ಠ_ಠ776 *instance* (not the ಠ_ಠ776 class!) with ಠ_ಠ823 methods
 */
ಠ_ಠ823.ಠ_ಠ922 = function (ಠ_ಠ1058) {
  ಠ_ಠ1058.ಠ_ಠ878 = true

  // save reference to original ಠ_ಠ776 ಠ_ಠ889/ಠ_ಠ890 methods before overwriting
  ಠ_ಠ1058.ಠ_ಠ924 = ಠ_ಠ1058.ಠ_ಠ889
  ಠ_ಠ1058.ಠ_ಠ925 = ಠ_ಠ1058.ಠ_ಠ890

  // deprecated, will be removed in node 0.13+
  ಠ_ಠ1058.ಠ_ಠ889 = ಠ_ಠ777.ಠ_ಠ889
  ಠ_ಠ1058.ಠ_ಠ890 = ಠ_ಠ777.ಠ_ಠ890

  ಠ_ಠ1058.ಠ_ಠ884 = ಠ_ಠ777.ಠ_ಠ884
  ಠ_ಠ1058.ಠ_ಠ885 = ಠ_ಠ777.ಠ_ಠ885
  ಠ_ಠ1058.ಠ_ಠ930 = ಠ_ಠ777.ಠ_ಠ885
  ಠ_ಠ1058.ಠ_ಠ886 = ಠ_ಠ777.ಠ_ಠ886
  ಠ_ಠ1058.ಠ_ಠ887 = ಠ_ಠ777.ಠ_ಠ887
  ಠ_ಠ1058.ಠ_ಠ888 = ಠ_ಠ777.ಠ_ಠ888
  ಠ_ಠ1058.ಠ_ಠ891 = ಠ_ಠ777.ಠ_ಠ891
  ಠ_ಠ1058.ಠ_ಠ892 = ಠ_ಠ777.ಠ_ಠ892
  ಠ_ಠ1058.ಠ_ಠ893 = ಠ_ಠ777.ಠ_ಠ893
  ಠ_ಠ1058.ಠ_ಠ894 = ಠ_ಠ777.ಠ_ಠ894
  ಠ_ಠ1058.ಠ_ಠ895 = ಠ_ಠ777.ಠ_ಠ895
  ಠ_ಠ1058.ಠ_ಠ896 = ಠ_ಠ777.ಠ_ಠ896
  ಠ_ಠ1058.ಠ_ಠ897 = ಠ_ಠ777.ಠ_ಠ897
  ಠ_ಠ1058.ಠ_ಠ898 = ಠ_ಠ777.ಠ_ಠ898
  ಠ_ಠ1058.ಠ_ಠ899 = ಠ_ಠ777.ಠ_ಠ899
  ಠ_ಠ1058.ಠ_ಠ900 = ಠ_ಠ777.ಠ_ಠ900
  ಠ_ಠ1058.ಠ_ಠ901 = ಠ_ಠ777.ಠ_ಠ901
  ಠ_ಠ1058.ಠ_ಠ902 = ಠ_ಠ777.ಠ_ಠ902
  ಠ_ಠ1058.ಠ_ಠ903 = ಠ_ಠ777.ಠ_ಠ903
  ಠ_ಠ1058.ಠ_ಠ904 = ಠ_ಠ777.ಠ_ಠ904
  ಠ_ಠ1058.ಠ_ಠ905 = ಠ_ಠ777.ಠ_ಠ905
  ಠ_ಠ1058.ಠ_ಠ906 = ಠ_ಠ777.ಠ_ಠ906
  ಠ_ಠ1058.ಠ_ಠ907 = ಠ_ಠ777.ಠ_ಠ907
  ಠ_ಠ1058.ಠ_ಠ908 = ಠ_ಠ777.ಠ_ಠ908
  ಠ_ಠ1058.ಠ_ಠ909 = ಠ_ಠ777.ಠ_ಠ909
  ಠ_ಠ1058.ಠ_ಠ910 = ಠ_ಠ777.ಠ_ಠ910
  ಠ_ಠ1058.ಠ_ಠ911 = ಠ_ಠ777.ಠ_ಠ911
  ಠ_ಠ1058.ಠ_ಠ912 = ಠ_ಠ777.ಠ_ಠ912
  ಠ_ಠ1058.ಠ_ಠ913 = ಠ_ಠ777.ಠ_ಠ913
  ಠ_ಠ1058.ಠ_ಠ914 = ಠ_ಠ777.ಠ_ಠ914
  ಠ_ಠ1058.ಠ_ಠ915 = ಠ_ಠ777.ಠ_ಠ915
  ಠ_ಠ1058.ಠ_ಠ916 = ಠ_ಠ777.ಠ_ಠ916
  ಠ_ಠ1058.ಠ_ಠ917 = ಠ_ಠ777.ಠ_ಠ917
  ಠ_ಠ1058.ಠ_ಠ918 = ಠ_ಠ777.ಠ_ಠ918
  ಠ_ಠ1058.ಠ_ಠ919 = ಠ_ಠ777.ಠ_ಠ919
  ಠ_ಠ1058.ಠ_ಠ920 = ಠ_ಠ777.ಠ_ಠ920
  ಠ_ಠ1058.ಠ_ಠ921 = ಠ_ಠ777.ಠ_ಠ921

  return ಠ_ಠ1058
}

// ಠ_ಠ888(ಠ_ಠ1044, ಠ_ಠ1045)
function ಠ_ಠ849 (ಠ_ಠ1059, ಠ_ಠ763, ಠ_ಠ1060) {
  if (typeof ಠ_ಠ1059 !== 'number') return ಠ_ಠ1060
  ಠ_ಠ1059 = ~~ಠ_ಠ1059;  // Coerce to integer.
  if (ಠ_ಠ1059 >= ಠ_ಠ763) return ಠ_ಠ763
  if (ಠ_ಠ1059 >= 0) return ಠ_ಠ1059
  ಠ_ಠ1059 += ಠ_ಠ763
  if (ಠ_ಠ1059 >= 0) return ಠ_ಠ1059
  return 0
}

function ಠ_ಠ850 (ಠ_ಠ877) {
  // Coerce ಠ_ಠ877 to ಠ_ಠ1005 number (possibly NaN), round up
  // in case it'ಠ_ಠ816 fractional (ಠ_ಠ815.g. 123.456) then do ಠ_ಠ1005
  // double negate to ಠ_ಠ850 ಠ_ಠ1005 NaN to 0. Easy, right?
  ಠ_ಠ877 = ~~Math.ceil(+ಠ_ಠ877)
  return ಠ_ಠ877 < 0 ? 0 : ಠ_ಠ877
}

function ಠ_ಠ851 (ಠ_ಠ1032) {
  return (Array.ಠ_ಠ851 || function (ಠ_ಠ1032) {
    return Object.prototype.ಠ_ಠ885.call(ಠ_ಠ1032) === '[object Array]'
  })(ಠ_ಠ1032)
}

function ಠ_ಠ852 (ಠ_ಠ1032) {
  return ಠ_ಠ851(ಠ_ಠ1032) || ಠ_ಠ823.ಠ_ಠ864(ಠ_ಠ1032) ||
      ಠ_ಠ1032 && typeof ಠ_ಠ1032 === 'object' &&
      typeof ಠ_ಠ1032.ಠ_ಠ877 === 'number'
}

function ಠ_ಠ853 (ಠ_ಠ751) {
  if (ಠ_ಠ751 < 16) return '0' + ಠ_ಠ751.ಠ_ಠ885(16)
  return ಠ_ಠ751.ಠ_ಠ885(16)
}

function ಠ_ಠ854 (ಠ_ಠ781) {
  var byteArray = []
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ781.ಠ_ಠ877; ಠ_ಠ752++) {
    var ಠ_ಠ778 = ಠ_ಠ781.charCodeAt(ಠ_ಠ752)
    if (ಠ_ಠ778 <= 0x7F)
      byteArray.ಠ_ಠ819(ಠ_ಠ781.charCodeAt(ಠ_ಠ752))
    else {
      var ಠ_ಠ1044 = ಠ_ಠ752
      if (ಠ_ಠ778 >= 0xD800 && ಠ_ಠ778 <= 0xDFFF) ಠ_ಠ752++
      var ಠ_ಠ779 = encodeURIComponent(ಠ_ಠ781.ಠ_ಠ888(ಠ_ಠ1044, ಠ_ಠ752+1)).substr(1).split('%')
      for (var ಠ_ಠ773 = 0; ಠ_ಠ773 < ಠ_ಠ779.ಠ_ಠ877; ಠ_ಠ773++)
        byteArray.ಠ_ಠ819(parseInt(ಠ_ಠ779[ಠ_ಠ773], 16))
    }
  }
  return byteArray
}

function ಠ_ಠ855 (ಠ_ಠ781) {
  var byteArray = []
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ781.ಠ_ಠ877; ಠ_ಠ752++) {
    // Node'ಠ_ಠ816 ಠ_ಠ762 seems to be doing this and not & 0x7F..
    byteArray.ಠ_ಠ819(ಠ_ಠ781.charCodeAt(ಠ_ಠ752) & 0xFF)
  }
  return byteArray
}

function ಠ_ಠ856 (ಠ_ಠ781) {
  var ಠ_ಠ785, hi, lo
  var byteArray = []
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ781.ಠ_ಠ877; ಠ_ಠ752++) {
    ಠ_ಠ785 = ಠ_ಠ781.charCodeAt(ಠ_ಠ752)
    hi = ಠ_ಠ785 >> 8
    lo = ಠ_ಠ785 % 256
    byteArray.ಠ_ಠ819(lo)
    byteArray.ಠ_ಠ819(hi)
  }

  return byteArray
}

function ಠ_ಠ857 (ಠ_ಠ781) {
  return ಠ_ಠ786.ಠ_ಠ869(ಠ_ಠ781)
}

function ಠ_ಠ858 (ಠ_ಠ1061, ಠ_ಠ1062, ಠ_ಠ1041, ಠ_ಠ877) {
  var pos
  for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ877; ಠ_ಠ752++) {
    if ((ಠ_ಠ752 + ಠ_ಠ1041 >= ಠ_ಠ1062.ಠ_ಠ877) || (ಠ_ಠ752 >= ಠ_ಠ1061.ಠ_ಠ877))
      break
    ಠ_ಠ1062[ಠ_ಠ752 + ಠ_ಠ1041] = ಠ_ಠ1061[ಠ_ಠ752]
  }
  return ಠ_ಠ752
}

function ಠ_ಠ859 (ಠ_ಠ781) {
  try {
    return decodeURIComponent(ಠ_ಠ781)
  } catch (ಠ_ಠ1063) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the ಠ_ಠ1056 is ಠ_ಠ1005 valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed ಠ_ಠ1056.
 */
function ಠ_ಠ860 (ಠ_ಠ1056, ಠ_ಠ1064) {
  ಠ_ಠ863(typeof ಠ_ಠ1056 === 'number', 'cannot ಠ_ಠ884 ಠ_ಠ1005 non-number as ಠ_ಠ1005 number')
  ಠ_ಠ863(ಠ_ಠ1056 >= 0, 'specified ಠ_ಠ1005 negative ಠ_ಠ1056 for writing an unsigned ಠ_ಠ1056')
  ಠ_ಠ863(ಠ_ಠ1056 <= ಠ_ಠ1064, 'ಠ_ಠ1056 is larger than maximum ಠ_ಠ1056 for type')
  ಠ_ಠ863(Math.floor(ಠ_ಠ1056) === ಠ_ಠ1056, 'ಠ_ಠ1056 has ಠ_ಠ1005 fractional component')
}

function ಠ_ಠ861 (ಠ_ಠ1056, ಠ_ಠ1064, ಠ_ಠ1066) {
  ಠ_ಠ863(typeof ಠ_ಠ1056 === 'number', 'cannot ಠ_ಠ884 ಠ_ಠ1005 non-number as ಠ_ಠ1005 number')
  ಠ_ಠ863(ಠ_ಠ1056 <= ಠ_ಠ1064, 'ಠ_ಠ1056 larger than maximum allowed ಠ_ಠ1056')
  ಠ_ಠ863(ಠ_ಠ1056 >= ಠ_ಠ1066, 'ಠ_ಠ1056 smaller than minimum allowed ಠ_ಠ1056')
  ಠ_ಠ863(Math.floor(ಠ_ಠ1056) === ಠ_ಠ1056, 'ಠ_ಠ1056 has ಠ_ಠ1005 fractional component')
}

function ಠ_ಠ862 (ಠ_ಠ1056, ಠ_ಠ1064, ಠ_ಠ1066) {
  ಠ_ಠ863(typeof ಠ_ಠ1056 === 'number', 'cannot ಠ_ಠ884 ಠ_ಠ1005 non-number as ಠ_ಠ1005 number')
  ಠ_ಠ863(ಠ_ಠ1056 <= ಠ_ಠ1064, 'ಠ_ಠ1056 larger than maximum allowed ಠ_ಠ1056')
  ಠ_ಠ863(ಠ_ಠ1056 >= ಠ_ಠ1066, 'ಠ_ಠ1056 smaller than minimum allowed ಠ_ಠ1056')
}

function ಠ_ಠ863 (ಠ_ಠ1068, ಠ_ಠ1069) {
  if (!ಠ_ಠ1068) throw new Error(ಠ_ಠ1069 || 'Failed assertion')
}

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ಠ_ಠ1071/ಠ_ಠ1059.js","/../node_modules/ಠ_ಠ1071")
},{"ಠ_ಠ786-js":1,"ಠ_ಠ1071":2,"ieee754":5,"pBGvAp":8}],3:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
var charenc = {
  // UTF-8 ಠ_ಠ1033
  utf8: {
    // Convert ಠ_ಠ1005 ಠ_ಠ1040 to ಠ_ಠ1005 ಠ_ಠ767 array
    ಠ_ಠ990: function(ಠ_ಠ781) {
      return charenc.bin.ಠ_ಠ990(unescape(encodeURIComponent(ಠ_ಠ781)));
    },

    // Convert ಠ_ಠ1005 ಠ_ಠ767 array to ಠ_ಠ1005 ಠ_ಠ1040
    ಠ_ಠ991: function(ಠ_ಠ772) {
      return decodeURIComponent(escape(charenc.bin.ಠ_ಠ991(ಠ_ಠ772)));
    }
  },

  // Binary ಠ_ಠ1033
  bin: {
    // Convert ಠ_ಠ1005 ಠ_ಠ1040 to ಠ_ಠ1005 ಠ_ಠ767 array
    ಠ_ಠ990: function(ಠ_ಠ781) {
      for (var ಠ_ಠ772 = [], ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ781.ಠ_ಠ877; ಠ_ಠ752++)
        ಠ_ಠ772.ಠ_ಠ819(ಠ_ಠ781.charCodeAt(ಠ_ಠ752) & 0xFF);
      return ಠ_ಠ772;
    },

    // Convert ಠ_ಠ1005 ಠ_ಠ767 array to ಠ_ಠ1005 ಠ_ಠ1040
    ಠ_ಠ991: function(ಠ_ಠ772) {
      for (var ಠ_ಠ781 = [], ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ772.ಠ_ಠ877; ಠ_ಠ752++)
        ಠ_ಠ781.ಠ_ಠ819(String.fromCharCode(ಠ_ಠ772[ಠ_ಠ752]));
      return ಠ_ಠ781.join('');
    }
  }
};

ಠ_ಠ1008.ಠ_ಠ965 = charenc;

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/charenc/charenc.js","/../node_modules/charenc")
},{"ಠ_ಠ1071":2,"pBGvAp":8}],4:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    ಠ_ಠ994: function(ಠ_ಠ751, ಠ_ಠ778) {
      return (ಠ_ಠ751 << ಠ_ಠ778) | (ಠ_ಠ751 >>> (32 - ಠ_ಠ778));
    },

    // Bit-wise rotation right
    ಠ_ಠ995: function(ಠ_ಠ751, ಠ_ಠ778) {
      return (ಠ_ಠ751 << (32 - ಠ_ಠ778)) | (ಠ_ಠ751 >>> ಠ_ಠ778);
    },

    // Swap big-ಠ_ಠ996 to little-ಠ_ಠ996 and vice versa
    ಠ_ಠ996: function(ಠ_ಠ751) {
      // If number given, swap ಠ_ಠ996
      if (ಠ_ಠ751.constructor == ಠ_ಠ1070) {
        return crypt.ಠ_ಠ994(ಠ_ಠ751, 8) & 0x00FF00FF | crypt.ಠ_ಠ994(ಠ_ಠ751, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ751.ಠ_ಠ877; ಠ_ಠ752++)
        ಠ_ಠ751[ಠ_ಠ752] = crypt.ಠ_ಠ996(ಠ_ಠ751[ಠ_ಠ752]);
      return ಠ_ಠ751;
    },

    // Generate an array of any ಠ_ಠ877 of random ಠ_ಠ772
    ಠ_ಠ997: function(ಠ_ಠ751) {
      for (var ಠ_ಠ772 = []; ಠ_ಠ751 > 0; ಠ_ಠ751--)
        ಠ_ಠ772.ಠ_ಠ819(Math.floor(Math.random() * 256));
      return ಠ_ಠ772;
    },

    // Convert ಠ_ಠ1005 ಠ_ಠ767 array to big-ಠ_ಠ996 32-bit ಠ_ಠ782
    ಠ_ಠ998: function(ಠ_ಠ772) {
      for (var ಠ_ಠ782 = [], ಠ_ಠ752 = 0, ಠ_ಠ778 = 0; ಠ_ಠ752 < ಠ_ಠ772.ಠ_ಠ877; ಠ_ಠ752++, ಠ_ಠ778 += 8)
        ಠ_ಠ782[ಠ_ಠ778 >>> 5] |= ಠ_ಠ772[ಠ_ಠ752] << (24 - ಠ_ಠ778 % 32);
      return ಠ_ಠ782;
    },

    // Convert big-ಠ_ಠ996 32-bit ಠ_ಠ782 to ಠ_ಠ1005 ಠ_ಠ767 array
    ಠ_ಠ999: function(ಠ_ಠ782) {
      for (var ಠ_ಠ772 = [], ಠ_ಠ778 = 0; ಠ_ಠ778 < ಠ_ಠ782.ಠ_ಠ877 * 32; ಠ_ಠ778 += 8)
        ಠ_ಠ772.ಠ_ಠ819((ಠ_ಠ782[ಠ_ಠ778 >>> 5] >>> (24 - ಠ_ಠ778 % 32)) & 0xFF);
      return ಠ_ಠ772;
    },

    // Convert ಠ_ಠ1005 ಠ_ಠ767 array to ಠ_ಠ1005 ಠ_ಠ784 ಠ_ಠ1040
    ಠ_ಠ1000: function(ಠ_ಠ772) {
      for (var ಠ_ಠ784 = [], ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ772.ಠ_ಠ877; ಠ_ಠ752++) {
        ಠ_ಠ784.ಠ_ಠ819((ಠ_ಠ772[ಠ_ಠ752] >>> 4).ಠ_ಠ885(16));
        ಠ_ಠ784.ಠ_ಠ819((ಠ_ಠ772[ಠ_ಠ752] & 0xF).ಠ_ಠ885(16));
      }
      return ಠ_ಠ784.join('');
    },

    // Convert ಠ_ಠ1005 ಠ_ಠ784 ಠ_ಠ1040 to ಠ_ಠ1005 ಠ_ಠ767 array
    ಠ_ಠ1001: function(ಠ_ಠ784) {
      for (var ಠ_ಠ772 = [], ಠ_ಠ785 = 0; ಠ_ಠ785 < ಠ_ಠ784.ಠ_ಠ877; ಠ_ಠ785 += 2)
        ಠ_ಠ772.ಠ_ಠ819(parseInt(ಠ_ಠ784.substr(ಠ_ಠ785, 2), 16));
      return ಠ_ಠ772;
    },

    // Convert ಠ_ಠ1005 ಠ_ಠ767 array to ಠ_ಠ1005 base-64 ಠ_ಠ1040
    ಠ_ಠ1002: function(ಠ_ಠ772) {
      for (var ಠ_ಠ786 = [], ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ772.ಠ_ಠ877; ಠ_ಠ752 += 3) {
        var ಠ_ಠ787 = (ಠ_ಠ772[ಠ_ಠ752] << 16) | (ಠ_ಠ772[ಠ_ಠ752 + 1] << 8) | ಠ_ಠ772[ಠ_ಠ752 + 2];
        for (var ಠ_ಠ773 = 0; ಠ_ಠ773 < 4; ಠ_ಠ773++)
          if (ಠ_ಠ752 * 8 + ಠ_ಠ773 * 6 <= ಠ_ಠ772.ಠ_ಠ877 * 8)
            ಠ_ಠ786.ಠ_ಠ819(base64map.charAt((ಠ_ಠ787 >>> 6 * (3 - ಠ_ಠ773)) & 0x3F));
          else
            ಠ_ಠ786.ಠ_ಠ819('=');
      }
      return ಠ_ಠ786.join('');
    },

    // Convert ಠ_ಠ1005 base-64 ಠ_ಠ1040 to ಠ_ಠ1005 ಠ_ಠ767 array
    ಠ_ಠ857: function(ಠ_ಠ786) {
      // Remove non-base-64 characters
      ಠ_ಠ786 = ಠ_ಠ786.replace(/[^A-Z0-9+\/]/ig, '');

      for (var ಠ_ಠ772 = [], ಠ_ಠ752 = 0, ಠ_ಠ788 = 0; ಠ_ಠ752 < ಠ_ಠ786.ಠ_ಠ877;
          ಠ_ಠ788 = ++ಠ_ಠ752 % 4) {
        if (ಠ_ಠ788 == 0) continue;
        ಠ_ಠ772.ಠ_ಠ819(((base64map.indexOf(ಠ_ಠ786.charAt(ಠ_ಠ752 - 1))
            & (Math.pow(2, -2 * ಠ_ಠ788 + 8) - 1)) << (ಠ_ಠ788 * 2))
            | (base64map.indexOf(ಠ_ಠ786.charAt(ಠ_ಠ752)) >>> (6 - ಠ_ಠ788 * 2)));
      }
      return ಠ_ಠ772;
    }
  };

  ಠ_ಠ1008.ಠ_ಠ965 = crypt;
})();

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/crypt/crypt.js","/../node_modules/crypt")
},{"ಠ_ಠ1071":2,"pBGvAp":8}],5:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
ಠ_ಠ965.ಠ_ಠ967 = function (ಠ_ಠ1071, ಠ_ಠ1041, ಠ_ಠ1072, ಠ_ಠ790, ಠ_ಠ1073) {
  var ಠ_ಠ815, ಠ_ಠ791
  var eLen = ಠ_ಠ1073 * 8 - ಠ_ಠ790 - 1
  var ಠ_ಠ1074 = (1 << eLen) - 1
  var eBias = ಠ_ಠ1074 >> 1
  var nBits = -7
  var ಠ_ಠ752 = ಠ_ಠ1072 ? (ಠ_ಠ1073 - 1) : 0
  var ಠ_ಠ797 = ಠ_ಠ1072 ? -1 : 1
  var ಠ_ಠ816 = ಠ_ಠ1071[ಠ_ಠ1041 + ಠ_ಠ752]

  ಠ_ಠ752 += ಠ_ಠ797

  ಠ_ಠ815 = ಠ_ಠ816 & ((1 << (-nBits)) - 1)
  ಠ_ಠ816 >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; ಠ_ಠ815 = ಠ_ಠ815 * 256 + ಠ_ಠ1071[ಠ_ಠ1041 + ಠ_ಠ752], ಠ_ಠ752 += ಠ_ಠ797, nBits -= 8) {}

  ಠ_ಠ791 = ಠ_ಠ815 & ((1 << (-nBits)) - 1)
  ಠ_ಠ815 >>= (-nBits)
  nBits += ಠ_ಠ790
  for (; nBits > 0; ಠ_ಠ791 = ಠ_ಠ791 * 256 + ಠ_ಠ1071[ಠ_ಠ1041 + ಠ_ಠ752], ಠ_ಠ752 += ಠ_ಠ797, nBits -= 8) {}

  if (ಠ_ಠ815 === 0) {
    ಠ_ಠ815 = 1 - eBias
  } else if (ಠ_ಠ815 === ಠ_ಠ1074) {
    return ಠ_ಠ791 ? NaN : ((ಠ_ಠ816 ? -1 : 1) * Infinity)
  } else {
    ಠ_ಠ791 = ಠ_ಠ791 + Math.pow(2, ಠ_ಠ790)
    ಠ_ಠ815 = ಠ_ಠ815 - eBias
  }
  return (ಠ_ಠ816 ? -1 : 1) * ಠ_ಠ791 * Math.pow(2, ಠ_ಠ815 - ಠ_ಠ790)
}

ಠ_ಠ965.ಠ_ಠ884 = function (ಠ_ಠ1071, ಠ_ಠ1056, ಠ_ಠ1041, ಠ_ಠ1072, ಠ_ಠ790, ಠ_ಠ1073) {
  var ಠ_ಠ815, ಠ_ಠ791, ಠ_ಠ785
  var eLen = ಠ_ಠ1073 * 8 - ಠ_ಠ790 - 1
  var ಠ_ಠ1074 = (1 << eLen) - 1
  var eBias = ಠ_ಠ1074 >> 1
  var ಠ_ಠ789 = (ಠ_ಠ790 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var ಠ_ಠ752 = ಠ_ಠ1072 ? 0 : (ಠ_ಠ1073 - 1)
  var ಠ_ಠ797 = ಠ_ಠ1072 ? 1 : -1
  var ಠ_ಠ816 = ಠ_ಠ1056 < 0 || (ಠ_ಠ1056 === 0 && 1 / ಠ_ಠ1056 < 0) ? 1 : 0

  ಠ_ಠ1056 = Math.abs(ಠ_ಠ1056)

  if (isNaN(ಠ_ಠ1056) || ಠ_ಠ1056 === Infinity) {
    ಠ_ಠ791 = isNaN(ಠ_ಠ1056) ? 1 : 0
    ಠ_ಠ815 = ಠ_ಠ1074
  } else {
    ಠ_ಠ815 = Math.floor(Math.log(ಠ_ಠ1056) / Math.LN2)
    if (ಠ_ಠ1056 * (ಠ_ಠ785 = Math.pow(2, -ಠ_ಠ815)) < 1) {
      ಠ_ಠ815--
      ಠ_ಠ785 *= 2
    }
    if (ಠ_ಠ815 + eBias >= 1) {
      ಠ_ಠ1056 += ಠ_ಠ789 / ಠ_ಠ785
    } else {
      ಠ_ಠ1056 += ಠ_ಠ789 * Math.pow(2, 1 - eBias)
    }
    if (ಠ_ಠ1056 * ಠ_ಠ785 >= 2) {
      ಠ_ಠ815++
      ಠ_ಠ785 /= 2
    }

    if (ಠ_ಠ815 + eBias >= ಠ_ಠ1074) {
      ಠ_ಠ791 = 0
      ಠ_ಠ815 = ಠ_ಠ1074
    } else if (ಠ_ಠ815 + eBias >= 1) {
      ಠ_ಠ791 = (ಠ_ಠ1056 * ಠ_ಠ785 - 1) * Math.pow(2, ಠ_ಠ790)
      ಠ_ಠ815 = ಠ_ಠ815 + eBias
    } else {
      ಠ_ಠ791 = ಠ_ಠ1056 * Math.pow(2, eBias - 1) * Math.pow(2, ಠ_ಠ790)
      ಠ_ಠ815 = 0
    }
  }

  for (; ಠ_ಠ790 >= 8; ಠ_ಠ1071[ಠ_ಠ1041 + ಠ_ಠ752] = ಠ_ಠ791 & 0xff, ಠ_ಠ752 += ಠ_ಠ797, ಠ_ಠ791 /= 256, ಠ_ಠ790 -= 8) {}

  ಠ_ಠ815 = (ಠ_ಠ815 << ಠ_ಠ790) | ಠ_ಠ791
  eLen += ಠ_ಠ790
  for (; eLen > 0; ಠ_ಠ1071[ಠ_ಠ1041 + ಠ_ಠ752] = ಠ_ಠ815 & 0xff, ಠ_ಠ752 += ಠ_ಠ797, ಠ_ಠ815 /= 256, eLen -= 8) {}

  ಠ_ಠ1071[ಠ_ಠ1041 + ಠ_ಠ752 - ಠ_ಠ797] |= ಠ_ಠ816 * 128
}

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ieee754/ಠ_ಠ1059.js","/../node_modules/ieee754")
},{"ಠ_ಠ1071":2,"pBGvAp":8}],6:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
/*!
 * Determine if an object is ಠ_ಠ1005 ಠ_ಠ823
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The ಠ_ಠ878 check is for Safari 5-7 support, because it'ಠ_ಠ816 missing
// Object.prototype.constructor. Remove this eventually
ಠ_ಠ1008.ಠ_ಠ965 = function (ಠ_ಠ1082) {
  return ಠ_ಠ1082 != null && (ಠ_ಠ864(ಠ_ಠ1082) || ಠ_ಠ865(ಠ_ಠ1082) || !!ಠ_ಠ1082.ಠ_ಠ878)
}

function ಠ_ಠ864 (ಠ_ಠ1082) {
  return !!ಠ_ಠ1082.constructor && typeof ಠ_ಠ1082.constructor.ಠ_ಠ864 === 'function' && ಠ_ಠ1082.constructor.ಠ_ಠ864(ಠ_ಠ1082)
}

// For Node v0.10 support. Remove this eventually.
function ಠ_ಠ865 (ಠ_ಠ1082) {
  return typeof ಠ_ಠ1082.ಠ_ಠ901 === 'function' && typeof ಠ_ಠ1082.ಠ_ಠ888 === 'function' && ಠ_ಠ864(ಠ_ಠ1082.ಠ_ಠ888(0, 0))
}

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/is-ಠ_ಠ1071/ಠ_ಠ1059.js","/../node_modules/is-ಠ_ಠ1071")
},{"ಠ_ಠ1071":2,"pBGvAp":8}],7:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
(function(){
  var crypt = ಠ_ಠ1007('crypt'),
      utf8 = ಠ_ಠ1007('charenc').utf8,
      ಠ_ಠ864 = ಠ_ಠ1007('is-ಠ_ಠ1071'),
      bin = ಠ_ಠ1007('charenc').bin,

  // The core
  md5 = function (ಠ_ಠ1069, ಠ_ಠ1085) {
    // Convert to ಠ_ಠ767 array
    if (ಠ_ಠ1069.constructor == String)
      if (ಠ_ಠ1085 && ಠ_ಠ1085.ಠ_ಠ1033 === 'binary')
        ಠ_ಠ1069 = bin.ಠ_ಠ990(ಠ_ಠ1069);
      else
        ಠ_ಠ1069 = utf8.ಠ_ಠ990(ಠ_ಠ1069);
    else if (ಠ_ಠ864(ಠ_ಠ1069))
      ಠ_ಠ1069 = Array.prototype.ಠ_ಠ888.call(ಠ_ಠ1069, 0);
    else if (!Array.ಠ_ಠ851(ಠ_ಠ1069))
      ಠ_ಠ1069 = ಠ_ಠ1069.ಠ_ಠ885();
    // else, assume ಠ_ಠ767 array already

    var ಠ_ಠ791 = crypt.ಠ_ಠ998(ಠ_ಠ1069),
        l = ಠ_ಠ1069.ಠ_ಠ877 * 8,
        ಠ_ಠ1005 =  1732584193,
        ಠ_ಠ778 = -271733879,
        ಠ_ಠ785 = -1732584194,
        ಠ_ಠ797 =  271733878;

    // Swap ಠ_ಠ996
    for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ791.ಠ_ಠ877; ಠ_ಠ752++) {
      ಠ_ಠ791[ಠ_ಠ752] = ((ಠ_ಠ791[ಠ_ಠ752] <<  8) | (ಠ_ಠ791[ಠ_ಠ752] >>> 24)) & 0x00FF00FF |
             ((ಠ_ಠ791[ಠ_ಠ752] << 24) | (ಠ_ಠ791[ಠ_ಠ752] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    ಠ_ಠ791[l >>> 5] |= 0x80 << (l % 32);
    ಠ_ಠ791[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var ಠ_ಠ792 = md5.ಠ_ಠ968,
        GG = md5.ಠ_ಠ969,
        HH = md5.ಠ_ಠ970,
        II = md5.ಠ_ಠ971;

    for (var ಠ_ಠ752 = 0; ಠ_ಠ752 < ಠ_ಠ791.ಠ_ಠ877; ಠ_ಠ752 += 16) {

      var aa = ಠ_ಠ1005,
          bb = ಠ_ಠ778,
          cc = ಠ_ಠ785,
          dd = ಠ_ಠ797;

      ಠ_ಠ1005 = ಠ_ಠ792(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 0],  7, -680876936);
      ಠ_ಠ797 = ಠ_ಠ792(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 1], 12, -389564586);
      ಠ_ಠ785 = ಠ_ಠ792(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 2], 17,  606105819);
      ಠ_ಠ778 = ಠ_ಠ792(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 3], 22, -1044525330);
      ಠ_ಠ1005 = ಠ_ಠ792(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 4],  7, -176418897);
      ಠ_ಠ797 = ಠ_ಠ792(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 5], 12,  1200080426);
      ಠ_ಠ785 = ಠ_ಠ792(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 6], 17, -1473231341);
      ಠ_ಠ778 = ಠ_ಠ792(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 7], 22, -45705983);
      ಠ_ಠ1005 = ಠ_ಠ792(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 8],  7,  1770035416);
      ಠ_ಠ797 = ಠ_ಠ792(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 9], 12, -1958414417);
      ಠ_ಠ785 = ಠ_ಠ792(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+10], 17, -42063);
      ಠ_ಠ778 = ಠ_ಠ792(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+11], 22, -1990404162);
      ಠ_ಠ1005 = ಠ_ಠ792(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+12],  7,  1804603682);
      ಠ_ಠ797 = ಠ_ಠ792(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+13], 12, -40341101);
      ಠ_ಠ785 = ಠ_ಠ792(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+14], 17, -1502002290);
      ಠ_ಠ778 = ಠ_ಠ792(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+15], 22,  1236535329);

      ಠ_ಠ1005 = GG(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 1],  5, -165796510);
      ಠ_ಠ797 = GG(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 6],  9, -1069501632);
      ಠ_ಠ785 = GG(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+11], 14,  643717713);
      ಠ_ಠ778 = GG(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 0], 20, -373897302);
      ಠ_ಠ1005 = GG(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 5],  5, -701558691);
      ಠ_ಠ797 = GG(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+10],  9,  38016083);
      ಠ_ಠ785 = GG(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+15], 14, -660478335);
      ಠ_ಠ778 = GG(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 4], 20, -405537848);
      ಠ_ಠ1005 = GG(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 9],  5,  568446438);
      ಠ_ಠ797 = GG(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+14],  9, -1019803690);
      ಠ_ಠ785 = GG(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 3], 14, -187363961);
      ಠ_ಠ778 = GG(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 8], 20,  1163531501);
      ಠ_ಠ1005 = GG(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+13],  5, -1444681467);
      ಠ_ಠ797 = GG(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 2],  9, -51403784);
      ಠ_ಠ785 = GG(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 7], 14,  1735328473);
      ಠ_ಠ778 = GG(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+12], 20, -1926607734);

      ಠ_ಠ1005 = HH(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 5],  4, -378558);
      ಠ_ಠ797 = HH(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 8], 11, -2022574463);
      ಠ_ಠ785 = HH(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+11], 16,  1839030562);
      ಠ_ಠ778 = HH(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+14], 23, -35309556);
      ಠ_ಠ1005 = HH(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 1],  4, -1530992060);
      ಠ_ಠ797 = HH(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 4], 11,  1272893353);
      ಠ_ಠ785 = HH(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 7], 16, -155497632);
      ಠ_ಠ778 = HH(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+10], 23, -1094730640);
      ಠ_ಠ1005 = HH(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+13],  4,  681279174);
      ಠ_ಠ797 = HH(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 0], 11, -358537222);
      ಠ_ಠ785 = HH(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 3], 16, -722521979);
      ಠ_ಠ778 = HH(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 6], 23,  76029189);
      ಠ_ಠ1005 = HH(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 9],  4, -640364487);
      ಠ_ಠ797 = HH(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+12], 11, -421815835);
      ಠ_ಠ785 = HH(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+15], 16,  530742520);
      ಠ_ಠ778 = HH(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 2], 23, -995338651);

      ಠ_ಠ1005 = II(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 0],  6, -198630844);
      ಠ_ಠ797 = II(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 7], 10,  1126891415);
      ಠ_ಠ785 = II(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+14], 15, -1416354905);
      ಠ_ಠ778 = II(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 5], 21, -57434055);
      ಠ_ಠ1005 = II(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+12],  6,  1700485571);
      ಠ_ಠ797 = II(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+ 3], 10, -1894986606);
      ಠ_ಠ785 = II(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+10], 15, -1051523);
      ಠ_ಠ778 = II(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 1], 21, -2054922799);
      ಠ_ಠ1005 = II(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 8],  6,  1873313359);
      ಠ_ಠ797 = II(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+15], 10, -30611744);
      ಠ_ಠ785 = II(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 6], 15, -1560198380);
      ಠ_ಠ778 = II(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+13], 21,  1309151649);
      ಠ_ಠ1005 = II(ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ791[ಠ_ಠ752+ 4],  6, -145523070);
      ಠ_ಠ797 = II(ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ791[ಠ_ಠ752+11], 10, -1120210379);
      ಠ_ಠ785 = II(ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ791[ಠ_ಠ752+ 2], 15,  718787259);
      ಠ_ಠ778 = II(ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ1005, ಠ_ಠ791[ಠ_ಠ752+ 9], 21, -343485551);

      ಠ_ಠ1005 = (ಠ_ಠ1005 + aa) >>> 0;
      ಠ_ಠ778 = (ಠ_ಠ778 + bb) >>> 0;
      ಠ_ಠ785 = (ಠ_ಠ785 + cc) >>> 0;
      ಠ_ಠ797 = (ಠ_ಠ797 + dd) >>> 0;
    }

    return crypt.ಠ_ಠ996([ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797]);
  };

  // Auxiliary functions
  md5.ಠ_ಠ968  = function (ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ795, ಠ_ಠ816, ಠ_ಠ796) {
    var ಠ_ಠ751 = ಠ_ಠ1005 + (ಠ_ಠ778 & ಠ_ಠ785 | ~ಠ_ಠ778 & ಠ_ಠ797) + (ಠ_ಠ795 >>> 0) + ಠ_ಠ796;
    return ((ಠ_ಠ751 << ಠ_ಠ816) | (ಠ_ಠ751 >>> (32 - ಠ_ಠ816))) + ಠ_ಠ778;
  };
  md5.ಠ_ಠ969  = function (ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ795, ಠ_ಠ816, ಠ_ಠ796) {
    var ಠ_ಠ751 = ಠ_ಠ1005 + (ಠ_ಠ778 & ಠ_ಠ797 | ಠ_ಠ785 & ~ಠ_ಠ797) + (ಠ_ಠ795 >>> 0) + ಠ_ಠ796;
    return ((ಠ_ಠ751 << ಠ_ಠ816) | (ಠ_ಠ751 >>> (32 - ಠ_ಠ816))) + ಠ_ಠ778;
  };
  md5.ಠ_ಠ970  = function (ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ795, ಠ_ಠ816, ಠ_ಠ796) {
    var ಠ_ಠ751 = ಠ_ಠ1005 + (ಠ_ಠ778 ^ ಠ_ಠ785 ^ ಠ_ಠ797) + (ಠ_ಠ795 >>> 0) + ಠ_ಠ796;
    return ((ಠ_ಠ751 << ಠ_ಠ816) | (ಠ_ಠ751 >>> (32 - ಠ_ಠ816))) + ಠ_ಠ778;
  };
  md5.ಠ_ಠ971  = function (ಠ_ಠ1005, ಠ_ಠ778, ಠ_ಠ785, ಠ_ಠ797, ಠ_ಠ795, ಠ_ಠ816, ಠ_ಠ796) {
    var ಠ_ಠ751 = ಠ_ಠ1005 + (ಠ_ಠ785 ^ (ಠ_ಠ778 | ~ಠ_ಠ797)) + (ಠ_ಠ795 >>> 0) + ಠ_ಠ796;
    return ((ಠ_ಠ751 << ಠ_ಠ816) | (ಠ_ಠ751 >>> (32 - ಠ_ಠ816))) + ಠ_ಠ778;
  };

  // Package private blocksize
  md5.ಠ_ಠ972 = 16;
  md5.ಠ_ಠ973 = 16;

  ಠ_ಠ1008.ಠ_ಠ965 = function (ಠ_ಠ1069, ಠ_ಠ1085) {
    if (ಠ_ಠ1069 === undefined || ಠ_ಠ1069 === null)
      throw new Error('Illegal argument ' + ಠ_ಠ1069);

    var ಠ_ಠ800 = crypt.ಠ_ಠ999(md5(ಠ_ಠ1069, ಠ_ಠ1085));
    return ಠ_ಠ1085 && ಠ_ಠ1085.asBytes ? ಠ_ಠ800 :
        ಠ_ಠ1085 && ಠ_ಠ1085.asString ? bin.ಠ_ಠ991(ಠ_ಠ800) :
        crypt.ಠ_ಠ1000(ಠ_ಠ800);
  };

})();

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/md5/md5.js","/../node_modules/md5")
},{"ಠ_ಠ1071":2,"charenc":3,"crypt":4,"is-ಠ_ಠ1071":6,"pBGvAp":8}],8:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
// shim for using ಠ_ಠ801 in ಠ_ಠ975

var ಠ_ಠ801 = ಠ_ಠ1008.ಠ_ಠ965 = {};

ಠ_ಠ801.ಠ_ಠ866 = (function () {
    var ಠ_ಠ1088 = typeof window !== 'undefined'
    && window.setImmediate;
    var ಠ_ಠ1089 = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (ಠ_ಠ1088) {
        return function (ಠ_ಠ750) { return window.setImmediate(ಠ_ಠ750) };
    }

    if (ಠ_ಠ1089) {
        var ಠ_ಠ802 = [];
        window.addEventListener('ಠ_ಠ1069', function (ಠ_ಠ1090) {
            var ಠ_ಠ803 = ಠ_ಠ1090.ಠ_ಠ803;
            if ((ಠ_ಠ803 === window || ಠ_ಠ803 === null) && ಠ_ಠ1090.data === 'ಠ_ಠ801-tick') {
                ಠ_ಠ1090.stopPropagation();
                if (ಠ_ಠ802.ಠ_ಠ877 > 0) {
                    var ಠ_ಠ804 = ಠ_ಠ802.shift();
                    ಠ_ಠ804();
                }
            }
        }, true);

        return function ಠ_ಠ866(ಠ_ಠ804) {
            ಠ_ಠ802.ಠ_ಠ819(ಠ_ಠ804);
            window.postMessage('ಠ_ಠ801-tick', '*');
        };
    }

    return function ಠ_ಠ866(ಠ_ಠ804) {
        setTimeout(ಠ_ಠ804, 0);
    };
})();

ಠ_ಠ801.ಠ_ಠ974 = 'ಠ_ಠ975';
ಠ_ಠ801.ಠ_ಠ975 = true;
ಠ_ಠ801.ಠ_ಠ976 = {};
ಠ_ಠ801.ಠ_ಠ977 = [];

function ಠ_ಠ868() {}

ಠ_ಠ801.ಠ_ಠ978 = ಠ_ಠ868;
ಠ_ಠ801.ಠ_ಠ979 = ಠ_ಠ868;
ಠ_ಠ801.ಠ_ಠ980 = ಠ_ಠ868;
ಠ_ಠ801.ಠ_ಠ981 = ಠ_ಠ868;
ಠ_ಠ801.ಠ_ಠ982 = ಠ_ಠ868;
ಠ_ಠ801.ಠ_ಠ983 = ಠ_ಠ868;
ಠ_ಠ801.ಠ_ಠ984 = ಠ_ಠ868;

ಠ_ಠ801.ಠ_ಠ985 = function (ಠ_ಠ1092) {
    throw new Error('ಠ_ಠ801.ಠ_ಠ985 is not supported');
}

// TODO(shtylman)
ಠ_ಠ801.ಠ_ಠ986 = function () { return '/' };
ಠ_ಠ801.ಠ_ಠ987 = function (ಠ_ಠ1093) {
    throw new Error('ಠ_ಠ801.ಠ_ಠ987 is not supported');
};

}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/../node_modules/ಠ_ಠ801/ಠ_ಠ975.js","/../node_modules/ಠ_ಠ801")
},{"ಠ_ಠ1071":2,"pBGvAp":8}],9:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
// ಠ_ಠ1005 ಠ_ಠ1068 npm ಠ_ಠ1008 to check
var md5 = ಠ_ಠ1007('md5');

// import your custom files 
var ಠ_ಠ805 = ಠ_ಠ1007('./ಠ_ಠ805.js');

// my framework function
//	ಠ_ಠ988 function ಠ_ಠ1092 will be use as ಠ_ಠ1005 reference function after bundling
var ಠ_ಠ806 = window.ಠ_ಠ988 = function(){};

// ಠ_ಠ1068 for gulp replace
var ಠ_ಠ807 = "1.0.11";

ಠ_ಠ806.prototype.ಠ_ಠ989 = function(ಠ_ಠ1094){
	var ಠ_ಠ808 = md5(ಠ_ಠ1094);
	document.ಠ_ಠ884(ಠ_ಠ805.dateMs() + " :: md5 of " + ಠ_ಠ1094 + " is "+ಠ_ಠ808 + "<br>");
	document.ಠ_ಠ884("ಠ_ಠ807: "+ಠ_ಠ807);
}
// ಠ_ಠ1008.ಠ_ಠ965 = ಠ_ಠ806;
}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_852cdb52.js","/")
},{"./ಠ_ಠ805.js":10,"ಠ_ಠ1071":2,"md5":7,"pBGvAp":8}],10:[function(ಠ_ಠ1007,ಠ_ಠ1008,ಠ_ಠ965){
(function (ಠ_ಠ801,ಠ_ಠ1009,ಠ_ಠ823,ಠ_ಠ1010,ಠ_ಠ1011,ಠ_ಠ1012,ಠ_ಠ1013,ಠ_ಠ1014,ಠ_ಠ1015){
var dateInMillSec = function(){
  var ಠ_ಠ809 = new ಠ_ಠ810();
  var ಠ_ಠ811 = (ಠ_ಠ809).toISOString().substring(0, 10)+" "+ಠ_ಠ809.ಠ_ಠ885().split(" ")[4]+"."+ಠ_ಠ809.getMilliseconds();
  return ಠ_ಠ811;
}
var dateInSec = function(){
  var ಠ_ಠ809 = new ಠ_ಠ810();
  var ಠ_ಠ814 = (ಠ_ಠ809).toISOString().substring(0, 10)+" "+ಠ_ಠ809.ಠ_ಠ885().split(" ")[4];
  return ಠ_ಠ814;
}
ಠ_ಠ1008.ಠ_ಠ965 = {
	dateMs: dateInMillSec,
	dateSec : dateInSec
}
}).call(this,ಠ_ಠ1007("pBGvAp"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},ಠ_ಠ1007("ಠ_ಠ1071").ಠ_ಠ823,arguments[3],arguments[4],arguments[5],arguments[6],"/ಠ_ಠ805.js","/")
},{"ಠ_ಠ1071":2,"pBGvAp":8}]},{},[9])
//# sourceMappingURL=data:application/json;ಠ_ಠ786,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvZ3VscGRlbW8vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvZ3VscGRlbW8vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9ndWxwZGVtby9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9ndWxwZGVtby9ub2RlX21vZHVsZXMvY2hhcmVuYy9jaGFyZW5jLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9ndWxwZGVtby9ub2RlX21vZHVsZXMvY3J5cHQvY3J5cHQuanMiLCIvTGlicmFyeS9XZWJTZXJ2ZXIvRG9jdW1lbnRzL2d1bHBkZW1vL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9ndWxwZGVtby9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9ndWxwZGVtby9ub2RlX21vZHVsZXMvbWQ1L21kNS5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvZ3VscGRlbW8vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9MaWJyYXJ5L1dlYlNlcnZlci9Eb2N1bWVudHMvZ3VscGRlbW8vc2NyaXB0cy9mYWtlXzg1MmNkYjUyLmpzIiwiL0xpYnJhcnkvV2ViU2VydmVyL0RvY3VtZW50cy9ndWxwZGVtby9zY3JpcHRzL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInBCR3ZBcFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJwQkd2QXBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwicEJHdkFwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbm9kZV9tb2R1bGVzL2NoYXJlbmMvY2hhcmVuYy5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9jaGFyZW5jXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZTY0bWFwXG4gICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJyxcblxuICBjcnlwdCA9IHtcbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiBsZWZ0XG4gICAgcm90bDogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8IGIpIHwgKG4gPj4+ICgzMiAtIGIpKTtcbiAgICB9LFxuXG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gcmlnaHRcbiAgICByb3RyOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgKDMyIC0gYikpIHwgKG4gPj4+IGIpO1xuICAgIH0sXG5cbiAgICAvLyBTd2FwIGJpZy1lbmRpYW4gdG8gbGl0dGxlLWVuZGlhbiBhbmQgdmljZSB2ZXJzYVxuICAgIGVuZGlhbjogZnVuY3Rpb24obikge1xuICAgICAgLy8gSWYgbnVtYmVyIGdpdmVuLCBzd2FwIGVuZGlhblxuICAgICAgaWYgKG4uY29uc3RydWN0b3IgPT0gTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdC5yb3RsKG4sIDgpICYgMHgwMEZGMDBGRiB8IGNyeXB0LnJvdGwobiwgMjQpICYgMHhGRjAwRkYwMDtcbiAgICAgIH1cblxuICAgICAgLy8gRWxzZSwgYXNzdW1lIGFycmF5IGFuZCBzd2FwIGFsbCBpdGVtc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKVxuICAgICAgICBuW2ldID0gY3J5cHQuZW5kaWFuKG5baV0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcblxuICAgIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGFueSBsZW5ndGggb2YgcmFuZG9tIGJ5dGVzXG4gICAgcmFuZG9tQnl0ZXM6IGZ1bmN0aW9uKG4pIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW107IG4gPiAwOyBuLS0pXG4gICAgICAgIGJ5dGVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGJpZy1lbmRpYW4gMzItYml0IHdvcmRzXG4gICAgYnl0ZXNUb1dvcmRzOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgd29yZHMgPSBbXSwgaSA9IDAsIGIgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIGIgKz0gOClcbiAgICAgICAgd29yZHNbYiA+Pj4gNV0gfD0gYnl0ZXNbaV0gPDwgKDI0IC0gYiAlIDMyKTtcbiAgICAgIHJldHVybiB3b3JkcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBiaWctZW5kaWFuIDMyLWJpdCB3b3JkcyB0byBhIGJ5dGUgYXJyYXlcbiAgICB3b3Jkc1RvQnl0ZXM6IGZ1bmN0aW9uKHdvcmRzKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBiID0gMDsgYiA8IHdvcmRzLmxlbmd0aCAqIDMyOyBiICs9IDgpXG4gICAgICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGhleCBzdHJpbmdcbiAgICBieXRlc1RvSGV4OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgaGV4ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldID4+PiA0KS50b1N0cmluZygxNikpO1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gJiAweEYpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgaGV4IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBoZXhUb0J5dGVzOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGMgPSAwOyBjIDwgaGV4Lmxlbmd0aDsgYyArPSAyKVxuICAgICAgICBieXRlcy5wdXNoKHBhcnNlSW50KGhleC5zdWJzdHIoYywgMiksIDE2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgYmFzZS02NCBzdHJpbmdcbiAgICBieXRlc1RvQmFzZTY0OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgYmFzZTY0ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspXG4gICAgICAgICAgaWYgKGkgKiA4ICsgaiAqIDYgPD0gYnl0ZXMubGVuZ3RoICogOClcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKGJhc2U2NG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+IDYgKiAoMyAtIGopKSAmIDB4M0YpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBiYXNlNjQucHVzaCgnPScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2U2NC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJhc2UtNjQgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGJhc2U2NFRvQnl0ZXM6IGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgICAgLy8gUmVtb3ZlIG5vbi1iYXNlLTY0IGNoYXJhY3RlcnNcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5yZXBsYWNlKC9bXkEtWjAtOStcXC9dL2lnLCAnJyk7XG5cbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwLCBpbW9kNCA9IDA7IGkgPCBiYXNlNjQubGVuZ3RoO1xuICAgICAgICAgIGltb2Q0ID0gKytpICUgNCkge1xuICAgICAgICBpZiAoaW1vZDQgPT0gMCkgY29udGludWU7XG4gICAgICAgIGJ5dGVzLnB1c2goKChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkgLSAxKSlcbiAgICAgICAgICAgICYgKE1hdGgucG93KDIsIC0yICogaW1vZDQgKyA4KSAtIDEpKSA8PCAoaW1vZDQgKiAyKSlcbiAgICAgICAgICAgIHwgKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSkpID4+PiAoNiAtIGltb2Q0ICogMikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBjcnlwdDtcbn0pKCk7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwicEJHdkFwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbm9kZV9tb2R1bGVzL2NyeXB0L2NyeXB0LmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL2NyeXB0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwicEJHdkFwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanNcIixcIi8uLi9ub2RlX21vZHVsZXMvaWVlZTc1NFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInBCR3ZBcFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanNcIixcIi8uLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuKGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGNyeXB0ID0gcmVxdWlyZSgnY3J5cHQnKSxcclxuICAgICAgdXRmOCA9IHJlcXVpcmUoJ2NoYXJlbmMnKS51dGY4LFxyXG4gICAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpLFxyXG4gICAgICBiaW4gPSByZXF1aXJlKCdjaGFyZW5jJykuYmluLFxyXG5cclxuICAvLyBUaGUgY29yZVxyXG4gIG1kNSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIGJ5dGUgYXJyYXlcclxuICAgIGlmIChtZXNzYWdlLmNvbnN0cnVjdG9yID09IFN0cmluZylcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGluZyA9PT0gJ2JpbmFyeScpXHJcbiAgICAgICAgbWVzc2FnZSA9IGJpbi5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbWVzc2FnZSA9IHV0Zjguc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgIGVsc2UgaWYgKGlzQnVmZmVyKG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZSwgMCk7XHJcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJwQkd2QXBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvbWQ1L21kNS5qc1wiLFwiLy4uL25vZGVfbW9kdWxlcy9tZDVcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJwQkd2QXBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBhIHRlc3QgbnBtIG1vZHVsZSB0byBjaGVja1xudmFyIG1kNSA9IHJlcXVpcmUoJ21kNScpO1xuXG4vLyBpbXBvcnQgeW91ciBjdXN0b20gZmlsZXMgXG52YXIgaGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuLy8gbXkgZnJhbWV3b3JrIGZ1bmN0aW9uXG4vL1x0bXlDbGllbnQgZnVuY3Rpb24gbmFtZSB3aWxsIGJlIHVzZSBhcyBhIHJlZmVyZW5jZSBmdW5jdGlvbiBhZnRlciBidW5kbGluZ1xudmFyIENsaWVudCA9IHdpbmRvdy5teUNsaWVudCA9IGZ1bmN0aW9uKCl7fTtcblxuLy8gdGVzdCBmb3IgZ3VscCByZXBsYWNlXG52YXIgdmVyc2lvbiA9IFwiMS4wLjEwXCI7XG5cbkNsaWVudC5wcm90b3R5cGUubWQ1Q29udmVydGVyID0gZnVuY3Rpb24odGV4dCl7XG5cdHZhciBtZDVUZXh0ID0gbWQ1KHRleHQpO1xuXHRkb2N1bWVudC53cml0ZShoZWxwZXIuZGF0ZU1zKCkgKyBcIiA6OiBtZDUgb2YgXCIgKyB0ZXh0ICsgXCIgaXMgXCIrbWQ1VGV4dCArIFwiPGJyPlwiKTtcblx0ZG9jdW1lbnQud3JpdGUoXCJ2ZXJzaW9uOiBcIit2ZXJzaW9uKTtcbn1cbi8vIG1vZHVsZS5leHBvcnRzID0gQ2xpZW50O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJwQkd2QXBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlXzg1MmNkYjUyLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGRhdGVJbk1pbGxTZWMgPSBmdW5jdGlvbigpe1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBtc2RhdGUgPSAoZGF0ZSkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApK1wiIFwiK2RhdGUudG9TdHJpbmcoKS5zcGxpdChcIiBcIilbNF0rXCIuXCIrZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgcmV0dXJuIG1zZGF0ZTtcbn1cbnZhciBkYXRlSW5TZWMgPSBmdW5jdGlvbigpe1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBzZWNkYXRlID0gKGRhdGUpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKStcIiBcIitkYXRlLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzRdO1xuICByZXR1cm4gc2VjZGF0ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkYXRlTXM6IGRhdGVJbk1pbGxTZWMsXG5cdGRhdGVTZWMgOiBkYXRlSW5TZWNcbn1cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwicEJHdkFwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvaGVscGVyLmpzXCIsXCIvXCIpIl19
