

export enum Endpoint {

    //KNIVES
    KNIFE_BY_ID = "/api/knives/", // Real endpoint is '/api/knives/[knife]'
    ALL_KNIVES = "/api/knives/allKnives",
    ADD_NEW_KNIFE = "/api/knives/addKnife",
    EDIT_KNIFE = "/api/knives/editKnife",

    //STONES
    STONE_BY_ID = "/api/stones/", // Real endpoint is '/api/knives/[stones]'
    EDIT_STONE = "/api/stones/editStone",
    ALL_STONES = "api/stones/allStones",
    ADD_NEW_STONE = "/api/stones/addNewStone"
}