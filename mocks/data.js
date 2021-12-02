const { password } = require("./credentials")

const resetUsers = () => {
    users = [
        {
            id:1,
            name:'jay',
            password:'hey',
            role: 'guy',
            token:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        },
        {
            id:2,
            name:'pablo',
            password:'hey',
            role: 'guy',
            token:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
    ]
}

resetUsers()

const find = () => {
    return users
}



module.exports = {
    find,
    async create({name, password, role}) {
        const newUser = { id: getId(), name, password, role}
        users.push(newUser)
        return newUser
    }
}
