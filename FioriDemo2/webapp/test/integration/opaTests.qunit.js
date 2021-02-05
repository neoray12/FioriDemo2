/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/demo/FioriDemo2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
