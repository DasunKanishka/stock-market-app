export const NAV_ITEMS = [
    { href: "/", label: "Dashboard" },
    { href: "/search", label: "Search" },
    { href: "/watchlist", label: "Watchlist" },
]

export const MARKET_ASI_INFO_CONFIG = {
    "symbol": "CSELK:ASI",
    "colorTheme": "dark",
    "isTransparent": true,
    "locale": "en",
    "width": "100%"
}

export const MARKET_SL20_INFO_CONFIG = {
    "symbol": "CSELK:S&PSL20",
    "colorTheme": "dark",
    "isTransparent": true,
    "locale": "en",
    "width": "100%"
}

export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    "colorTheme": "dark",
    "dateRange": "12M",
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": true,
    "showFloatingTooltip": false,
    "plotLineColorGrowing": "rgba(15, 237, 190, 1)",
    "plotLineColorFalling": "rgba(15, 237, 190, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "#DBDBDB",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
        {
            "title": "Indices",
            "symbols": [
                {
                    "s": "CSELK:ASI",
                    "d": "CSELK:ASI",
                    "logoid": "indices/all-share",
                    "currency-logoid": "country/LK"
                },
                {
                    "s": "CSELK:S&PSL20",
                    "d": "CSELK:S&PSL20",
                    "currency-logoid": "country/LK"
                }
            ],
            "originalTitle": "Indices"
        }
    ],
    "backgroundColor": "#0f0f0f",
    "width": "100%",
    "height": "100%",
    "showSymbolLogo": true,
    "showChart": true
}

export const MARKET_HOTLISTS_CONFIG = {
    "exchange": "CSELK",
    "colorTheme": "dark",
    "dateRange": "12M",
    "showChart": true,
    "locale": "en",
    "largeChartUrl": "",
    "isTransparent": true,
    "showSymbolLogo": false,
    "showFloatingTooltip": false,
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(240, 243, 250, 0)",
    "scaleFontColor": "#DBDBDB",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "width": "100%",
    "height": "100%"
}

export const MARKET_TECHNICAL_ANALYSIS_CONFIG = {
    "colorTheme": "dark",
    "displayMode": "single",
    "isTransparent": true,
    "locale": "en",
    "interval": "1M",
    "disableInterval": false,
    "width": "100%",
    "height": "100%",
    "symbol": "CSELK:ASI",
    "showIntervalTabs": true
}