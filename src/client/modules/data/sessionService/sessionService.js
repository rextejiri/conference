const URL = '/api/sessions';
let sessions = [];

export const getSessions = () => fetch(URL)
.then(response => {
    if (!response.ok) {
        throw new error('no response from server');
    }
    return response.json();
})
.then(result => {
    sessions = result.data;
    return sessions
});

export const getSession = (sessionId )=> {
    return sessions.find(session => {
        return session.id === sessionId
    })
}
