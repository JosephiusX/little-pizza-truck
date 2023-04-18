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

  app.get('/api/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        // Handle the error
        console.error(err);
        res.status(500).send('Error logging out');
      } else {
        // Redirect the user after a successful logout
        res.redirect('/');
      }
    });
  });

  app.get('/api/current_user',(req, res) => res.send(req.user)); 
};