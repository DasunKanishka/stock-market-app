import TradingViewWidget from "@/components/TradingViewWidget";
import {
    MARKET_ASI_INFO_CONFIG, MARKET_SL20_INFO_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, MARKET_TECHNICAL_ANALYSIS_CONFIG,
    MARKET_HOTLISTS_CONFIG
} from "@/lib/constants";


const Home = () => {
    const scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-';

    return (
        <div className="flex min-h-screen home-wrapper">
            <section className="grid w-full gap-8 home-section">
                <div className="grid gap-8 md:col-span-1">
                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}symbol-info.js`}
                        config={MARKET_ASI_INFO_CONFIG}
                        className="custom-chart"
                    />

                    <TradingViewWidget
                        scriptUrl={`${scriptUrl}symbol-info.js`}
                        config={MARKET_SL20_INFO_CONFIG}
                        className="custom-chart"
                    />
                </div>

                <div className="md:col-span-1 xl:col-span-2">
                    <TradingViewWidget
                        title="Market Overview"
                        scriptUrl={`${scriptUrl}market-overview.js`}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        className="custom-chart"
                        height={522}
                    />
                </div>
            </section>

            <section className="grid w-full gap-8 home-section">
                <div className="h-full md:col-span-1 xl:col-span-2">
                    <TradingViewWidget
                        title="Market Hotlists"
                        scriptUrl={`${scriptUrl}hotlists.js`}
                        config={MARKET_HOTLISTS_CONFIG}
                        className="custom-chart"
                        height={400}
                    />
                </div>

                <div className="h-full md:col-span-1">
                    <TradingViewWidget
                        title="Technical Analysis"
                        scriptUrl={`${scriptUrl}technical-analysis.js`}
                        config={MARKET_TECHNICAL_ANALYSIS_CONFIG}
                        className="custom-chart"
                        height={400}
                    />
                </div>
            </section>
        </div>
    );
}

export default Home;