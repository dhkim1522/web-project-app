function saveAuthToCookie(value) {
    document.cookie = `auth_key=${value}`;
}

function saveUserNicknameToCookie(value) {
    document.cookie = `user_nickname=${value}`;
}

function getAuthFromCookie() {
    return document
        .cookie
        .replace(/(?:(?:^|.*;\s*)auth_key\s*=\s*([^;]*).*$)|^.*$/, '$1',);
}

function getUserNicknameFromCookie() {
    return document
        .cookie
        .replace(/(?:(?:^|.*;\s*)user_nickname\s*=\s*([^;]*).*$)|^.*$/, '$1',);
}

function deleteCookie(value) {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
    saveAuthToCookie,
    saveUserNicknameToCookie,
    getAuthFromCookie,
    getUserNicknameFromCookie,
    deleteCookie
};