// @flow

import * as passport from 'passport';
import * as passportCustom from 'passport-custom';
import { Request } from 'express';

passport.use('custom', new passportCustom.Strategy((req: Request, done) => {
  return done(null, {});
}));

export default passport;
