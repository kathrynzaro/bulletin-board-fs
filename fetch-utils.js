const SUPABASE_URL = 'https://iyzobpamomhqtsgqrmvm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5em9icGFtb21ocXRzZ3FybXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODU5MDMsImV4cCI6MTk2Nzg2MTkwM30.GdYfCjbuJD7LEkd_denWfb1xuQeGRk8sRe6SbpV-thg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}


export async function fetchPosts() {
    const response = await client.from('posts').select('*');
    console.log(response);
    return response.data;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function logout() {
    await client.auth.signOut();
    
    return (window.location.href = '/');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}