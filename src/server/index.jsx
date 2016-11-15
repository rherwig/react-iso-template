import React from 'react';
import {renderToString} from 'react-dom/server';

import App from '../shared/components/App';

/**
 * Returns html content including rendered markup.
 * @param req
 * @param res
 * @returns {string}
 */
export default function render(req, res) {
    const isoMarkup = renderToString(<App/>);

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="//chayns-res.tobit.com/api/v3.1/css/chayns.min.css"/>
            
            <title>microshop</title>
        </head>
        <body>
          <div id="react-root">${isoMarkup}</div>
          
          <script src="//chayns-res.tobit.com/api/v3.1/js/chayns.min.js"></script>
          <script type="text/javascript" charset="utf-8" src="/public/client.bundle.js"></script>
        </body>
        </html>
    `;
}