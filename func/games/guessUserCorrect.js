const User = require('../../database/user.js');

async function CorrectGame(id) {
    user = await User.findOne({ userID: id })
    if(!user) return;
    user.games.game++;
    user.save()
}

async function CorrectCity(id) {
    user = await User.findOne({ userID: id })
    if(!user) return;
    user.games.city++;
    user.save()
}

async function CorrectLogo(id) {
    user = await User.findOne({ userID: id })
    if(!user) return;
    user.games.logor++;
    user.save()
}

module.exports = {
    CorrectGame,
    CorrectCity,
    CorrectLogo
}