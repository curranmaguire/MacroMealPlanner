# MacroMealPlanner
following the tutorial here: https://www.youtube.com/watch?v=XSLm9PHnkxI&list=PL82C6-O4XrHcNJd4ejg8pX5fZaIDZmXyn

## TODO
- learn about REACT:
    - [x] Creating Components
    - [x] Rendering, refs and events
    - [x] Hooks
        - [x] useState
        - [x] useEffect
        - [x] useRef (basically just used to reference a item in the dom. can be used to focus items)
        - [ ] useCallback (for optimising rendering code so won't go over yet) useMemo (optimizing results of a function by caching unchanged values)
        - [x] useReducer (useState but with ability to alter values centrally (for example can be used to clean or validate a users input))
        - [ ] useContext
    - [ ] React Router
        - [ ] add routes to the pages used


- [x] scaffold basic ui with mock data
    - [x] create scaffold for Search page, user page, shopping list
- [ ] add the ingredients tally to the recipe cards using filter
- [ ] add macro bar to the recipe cards that shows what is included in each recipe
- [ ] manage search api call
- [ ] manage user login api call
- [x] setup a DB
- [ ] create mock data in DB
- [ ] attach DB to UI
- [ ] add authentication
- [ ] add uploading recipes, users, user data, ratings
- [ ] add routing
- [ ] add backend code