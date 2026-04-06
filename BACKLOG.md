- potentially replace API call boiler plate with React/TanStack Query
- The weak spot is the nav displaying an email when the token is actually expired 
   but the user hasn't navigated or made an API call yet. 
   For future production standard you'd have the server push an SSE/WebSocket sign out event
   to client