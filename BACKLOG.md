- replace API call boiler plate with React/TanStack Query
- The weak spot is the nav displaying an email when the token is actually expired 
   but the user hasn't navigated or made an API call yet. 
   For future production standard you'd add a client-side timer that 
   calls /api/user/me periodically or checks the exp claim