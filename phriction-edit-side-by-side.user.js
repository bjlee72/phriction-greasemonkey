// ==UserScript==
// @name         Phriction Edit Side By Side
// @namespace    http://tampermonkey.net/
// @updateURL    https://raw.githubusercontent.com/bjlee72/phriction-greasemonkey/master/phriction-edit-side-by-side.user.js
// @version      0.1
// @description  try to take over the world!
// @author       byungjoon.lee@gmail.com
// @match        https://*.phacility.com/phriction/edit/*
// @grant        none
// ==/UserScript==

/*
 * Phriction edit with Preview side-by-side.
 *
 * This script make the Phriction wiki preview pane for edit 
 * displayed on the right side of edit textarea.
 */

(function() {
    'use strict';

    var el = document.querySelector('div.phui-two-column-content.phui-two-column-footer');
    el.style.display = 'flex';

    var left = document.querySelector('div.phui-box')
    left.style.flex = '48%';

    var right = document.querySelector('div.phui-remarkup-preview');
    right.style.flex = '48%';
    right.style.height = '90vh';
    right.style.overflow = 'scroll';

})();
