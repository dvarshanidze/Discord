"use strict";
exports.__esModule = true;
exports.MobileToggle = void 0;
var lucide_react_1 = require("lucide-react");
var sheet_1 = require("@/components/ui/sheet");
var button_1 = require("@/components/ui/button");
var navigation_sidebar_1 = require("@/components/navigation/navigation-sidebar");
var server_sidebar_1 = require("@/components/server/server-sidebar");
// mobile toggle
exports.MobileToggle = function (_a) {
    var serverId = _a.serverId;
    return (React.createElement(sheet_1.Sheet, null,
        React.createElement(sheet_1.SheetTrigger, { asChild: true },
            React.createElement(button_1.Button, { variant: "ghost", size: "icon", className: "md:hidden" },
                React.createElement(lucide_react_1.Menu, null))),
        React.createElement(sheet_1.SheetContent, { side: "left", className: "p-0 flex gap-0" },
            React.createElement("div", { className: "w-[72px]" },
                React.createElement(navigation_sidebar_1.NavigationSidebar, null)),
            React.createElement(server_sidebar_1.ServerSidebar, { serverId: serverId }))));
};
