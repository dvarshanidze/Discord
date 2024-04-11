"use client";
"use strict";
exports.__esModule = true;
exports.ActionTooltip = void 0;
var tooltip_1 = require("@/components/ui/tooltip");
// interface ActionTooltipProps
exports.ActionTooltip = function (_a) {
    var label = _a.label, children = _a.children, side = _a.side, align = _a.align;
    return (React.createElement(tooltip_1.TooltipProvider, null,
        React.createElement(tooltip_1.Tooltip, { delayDuration: 50 },
            React.createElement(tooltip_1.TooltipTrigger, { asChild: true }, children),
            React.createElement(tooltip_1.TooltipContent, { side: side, align: align },
                React.createElement("p", { className: "font-semibold text-sm capitalize" }, label.toLowerCase())))));
};
