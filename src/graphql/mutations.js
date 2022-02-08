/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
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
export const createRollLog = /* GraphQL */ `
  mutation CreateRollLog(
    $input: CreateRollLogInput!
    $condition: ModelRollLogConditionInput
  ) {
    createRollLog(input: $input, condition: $condition) {
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
export const updateRollLog = /* GraphQL */ `
  mutation UpdateRollLog(
    $input: UpdateRollLogInput!
    $condition: ModelRollLogConditionInput
  ) {
    updateRollLog(input: $input, condition: $condition) {
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
export const deleteRollLog = /* GraphQL */ `
  mutation DeleteRollLog(
    $input: DeleteRollLogInput!
    $condition: ModelRollLogConditionInput
  ) {
    deleteRollLog(input: $input, condition: $condition) {
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
