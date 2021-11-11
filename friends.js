import {randomBytes} from 'crypto'

let friends = [
    {
        id: "1",
        firstName: "Pavan",
        lastName: "Idapalapati",
        gender: "M",
        email: ["Pavan@divami.com"]
    }
]

export const getFriend = ({id}) => {
    return friends.find(e=> e.id == id)
}

export const getFriends = () => {
    return friends
}

export const createFriend = ({input}) => {
    const id =  randomBytes(10).toString('hex')
    friends = [...friends, {
        id: randomBytes(10).toString('hex'),
        ...input
    }]
return {...input, id}

}

export const updateFriend = ({input}) =>  {
    friends = friends.map(e => {
        if(e.id === input.id) {
            return {
                ...e,
                ...input
            }
        }
        return e
    })
    return input
}

export const deleteFriend = ({id}) => {
    friends = friends.filter(e => e.id !=id)
    return {id}
}