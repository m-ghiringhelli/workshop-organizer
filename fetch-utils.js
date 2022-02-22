const SUPABASE_URL = 'https://qurnakdkijnyhcuzbmgb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cm5ha2RraWpueWhjdXpibWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDMsImV4cCI6MTk1OTkxNzQ0M30.IltjE-P3qd05gdR8QTQqmRASPhJmLREfwTW5uFWm7c8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('../workshops');
    }
}

export async function enrollParticipant(user) {
    const response = await client.from('enrollees').insert(user);
    return checkError(response);
}

// export async function delete

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getWorkshops() {
    const response = await client.from('workshops').select(`*, enrollees (*)`);
    
    return checkError(response);
}
