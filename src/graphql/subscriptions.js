/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter {
    onCreateCharacter {
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
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter {
    onUpdateCharacter {
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
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter {
    onDeleteCharacter {
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
export const onCreateRollLog = /* GraphQL */ `
  subscription OnCreateRollLog {
    onCreateRollLog {
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
export const onUpdateRollLog = /* GraphQL */ `
  subscription OnUpdateRollLog {
    onUpdateRollLog {
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
export const onDeleteRollLog = /* GraphQL */ `
  subscription OnDeleteRollLog {
    onDeleteRollLog {
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
