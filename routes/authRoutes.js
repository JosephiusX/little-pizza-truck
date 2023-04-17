import passport from 'passport';

export default (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/prices');
    }
  ); 

  app.get('/api/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user',(req, res) => res.send(req.user)); 
};