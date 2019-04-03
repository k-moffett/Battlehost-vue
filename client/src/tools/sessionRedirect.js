module.exports = (allCookies) => {
    let cookieObject = {}

        allCookies.map((cookie)=>{
            var tempCookie = cookie.split('=')
            cookieObject[tempCookie[0].trim()] = tempCookie[1].trim()
        })

    let keys = Object.keys(cookieObject)

        if(keys.includes('sessid')) {
            return {
                data: true,
                sessid: cookieObject.sessid
            }
        } else {
            return {message: false}
        }
}