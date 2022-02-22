# PLAN

0) delete/create files
    A) Delete unnecessary given materials
    B) Create files and link them
        1) landing page
            a) index.html
                i) link to app.js
                ii) link to css folder
            b) app.js
            c) fetch-utils.js
                i) link to supabase
            d) render utils.js
        2) Signin
            a) index.html
                i) link to signin.js
                ii) link to signin.css
                iii) link to css folder
            b) signin.js
            c) signin.css  
        3) Signup
            a) index.html
                i) link to signup.js
                ii) link to signin.css
                iii) link to css folder
            b) signup.js
        4) workshops
            a) index.html
                i) link to workshops.js
                ii) link to workshops.css
                iii) link to css folder
            b) workshops.css
            c) workshops.js
        5) workshopsignup
            a) index.html
                i) link to workshopsignup.js
                ii) link to workshopsignup.css
                iii) link to css folder
            b) workshopsignup.css
            c) workshopsignup.js
I) Database
    A) Setup supabase tables
        1) Create workshops table
            a) id (generated)
            b) name
            c) location
        2) Create participants table
            a) name
            b) contact
            c) workshop_id
        3) Foreign key to connect workshop_id to workshops.id
    B) RLS
        1) (role() = 'authenticated'::text) for all CRUD
    C) Import into HTML/fetch-utils
        1) html link
        2) js url
        3) js key
II) Pages
    A) landing
        1) signin button
            a) <a> to signin
        2) signup button
            a) <a> to signup
        3) check auth
            a) redirect to workshops
    B) Sign in
        1) signin form
            a) event listener (submit)
            b) import signinUser
    C) Sign up
        1) signup form
            a) event listener
            b) import signupUser
    D) Workshops
        1) import renderWorkshop
        2) displayWorkshops
            a) for loop to render a workshop
            b) for loop to render the participants
                i) add eventlistener
                ii) remove from database on click
        3) div to hold workshops
        4) sample div to model renderWorkshop
        5) link to signout
        6) link to enroll
    E) Enroll
III) Functions
    A) Fetch utils
        1) Get workshops+participants
    B) Render utils
        1) renderWorkshop(workshop)
            a) takes in workshop object, creates div
    C) Event listeners
        1) sign in form
        2) sign up form
        3) enroll form
        4) on name so can delete
IV) Style
    A) Structure
        1) miro CHECK
    B) Colors
        1) coolors
        2) red yellow orange?
    C) Aesthetics
        1) background picture?
        2) icons / images?