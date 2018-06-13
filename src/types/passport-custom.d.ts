declare module 'passport-custom' {
    import passport = require('passport');
    import express = require('express');

    class Strategy extends passport.Strategy {
        // Looking over the doc and declaration, looks like it seems to be this :)
        constructor(cb: (req: express.Request, done: (err: string|null, obj: any) => any) => any);
        /**
         * Performs authentication for the request.
         * Note: Virtual function - re-implement in the strategy.
         * @param req The request to authenticate.
         * @param options Options passed to the strategy.
         */
        authenticate(req: express.Request, options?: any): void;
    }
}
