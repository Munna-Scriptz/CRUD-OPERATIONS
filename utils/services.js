const generateRandomStrings = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let randomCharacters = ""


    for (let i = 0; i < 5; i++) {
        const randomStr = Math.floor(Math.random() * characters.length)

        randomCharacters += characters[randomStr]
    }

    return randomCharacters
}

module.exports = { generateRandomStrings }