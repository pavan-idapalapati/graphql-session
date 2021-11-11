import {buildSchema} from 'graphql'

export const schema =  buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: [String]!
    }

    enum Gender {
        MALE
        FEMALE
    }
    
    input FriendInput {
        firstName: String
        lastName: String
        gender: Gender
        email: [String]!
    }

    input FriendUpdateInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: [String]!
    }

    type deleteResponse {
        id: ID
    }

    type Query {
        getFriend(id: String): Friend
        getFriends: [Friend]
    }

    

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendUpdateInput): Friend
        deleteFriend(id:ID): deleteResponse
    }
`)