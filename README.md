# PLAN

0) delete/create files
    A) Delete unnecessary given materials                   CHECK
    B) Create files and link them                           CHECK
        1) landing page                                     CHECK
            a) index.html                                   CHECK
                i) link to app.js                           CHECK
                ii) link to css folder                      CHECK
            b) app.js                                       CHECK
            c) fetch-utils.js                               CHECK
                i) link to supabase                         CHECK
            d) render utils.js                              CHECK
        2) Signin                                           CHECK
            a) index.html                                   CHECK
                i) link to signin.js                        CHECK  
                ii) link to signin.css                      CHECK
                iii) link to css folder                     CHECK
            b) signin.js                                    CHECK
            c) signin.css                                   CHECK
        3) Signup                                           CHECK
            a) index.html                                   CHECK
                i) link to signup.js                        CHECK
                ii) link to signin.css                      CHECK
                iii) link to css folder                     CHECK
            b) signup.js                                    CHECK
        4) workshops                                        CHECK
            a) index.html                                   CHECK
                i) link to workshops.js                     CHECK
                ii) link to workshops.css                   CHECK
                iii) link to css folder                     CHECK
            b) workshops.css                                CHECK
            c) workshops.js                                 CHECK
        5) enroll                                           CHECK
            a) index.html                                   CHECK
                i) link to enroll.js                        CHECK
                ii) link to enroll.css                      CHECK
                iii) link to css folder                     CHECK
            b) enroll.css                                   CHECK
            c) enroll.js                                    CHECK
I) Database                                                 CHECK
    A) Setup supabase tables                                CHECK
        1) Create workshops table                           CHECK
            a) id (generated)                               CHECK
            b) name                                         CHECK
            c) location                                     CHECK
        2) Create participants table                        CHECK
            a) name                                         CHECK
            b) contact                                      CHECK
            c) workshop_id                                  CHECK
    3) Foreign key to connect workshop_id to workshops.id   CHECK
    B) RLS                                                  CHECK
        1) (role() = 'authenticated'::text) for all CRUD    CHECK
    C) Import into HTML/fetch-utils                         CHECK
        1) html link                                        CHECK
        2) js url                                           CHECK
        3) js key                                           CHECK
II) Pages
    A) landing
        1) signin button                                    CHECK
            a) <a> to signin                                CHECK
        2) signup button                                    CHECK
            a) <a> to signup                                CHECK
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