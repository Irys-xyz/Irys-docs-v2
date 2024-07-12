import { GA_TRACKING_ID } from "../../lib/gtag";
import Script from "next/script";

console.log(`Analytics GA_TRACKING_ID=, ${GA_TRACKING_ID}`);

const Analytics = () => (
	<>
		<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
		<Script
			strategy="afterInteractive"
			id="analytics-page-identifier"
			dangerouslySetInnerHTML={{
				__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
			}}
		/>
	</>
);

export default Analytics;
