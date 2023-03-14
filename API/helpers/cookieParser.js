export const cookieParser = (cookieName, cookies) => {
    console.log(cookies)
    const cookieArray = cookies.split("; ")

    let requiredCookie = cookieArray.filter(cookie => cookie.indexOf(cookieName) == 0)[0]
    let cookie = requiredCookie.split("=")[1]
    console.log(cookie)
    return cookie
}