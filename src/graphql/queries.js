/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      name
      character {
        items {
          id
          name
          class
          level
          str
          dex
          con
          wis
          int
          chr
          createdAt
          updatedAt
          profileCharacterId
        }
        nextToken
      }
      activeCharacter
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        character {
          nextToken
        }
        activeCharacter
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      profile {
        id
        name
        character {
          nextToken
        }
        activeCharacter
        createdAt
        updatedAt
      }
      rollLog {
        items {
          id
          timestamp
          text
          createdAt
          updatedAt
          characterRollLogId
        }
        nextToken
      }
      class
      level
      str
      dex
      con
      wis
      int
      chr
      createdAt
      updatedAt
      profileCharacterId
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        profile {
          id
          name
          activeCharacter
          createdAt
          updatedAt
        }
        rollLog {
          nextToken
        }
        class
        level
        str
        dex
        con
        wis
        int
        chr
        createdAt
        updatedAt
        profileCharacterId
      }
      nextToken
    }
  }
`;
export const getRollLog = /* GraphQL */ `
  query GetRollLog($id: ID!) {
    getRollLog(id: $id) {
      id
      character {
        id
        name
        profile {
          id
          name
          activeCharacter
          createdAt
          updatedAt
        }
        rollLog {
          nextToken
        }
        class
        level
        str
        dex
        con
        wis
        int
        chr
        createdAt
        updatedAt
        profileCharacterId
      }
      timestamp
      text
      createdAt
      updatedAt
      characterRollLogId
    }
  }
`;
export const listRollLogs = /* GraphQL */ `
  query ListRollLogs(
    $filter: ModelRollLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRollLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        character {
          id
          name
          class
          level
          str
          dex
          con
          wis
          int
          chr
          createdAt
          updatedAt
          profileCharacterId
        }
        timestamp
        text
        createdAt
        updatedAt
        characterRollLogId
      }
      nextToken
    }
  }
`;
