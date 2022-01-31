class CommonUtility {
    constructor() {}

    /**
     * Method to check if string object
     */
     isJson (str: any) {
        try {
            JSON.parse(str);
        }
        catch(e) {
            return false;
        }
        return true;
    };
}

export const commonUtility = new CommonUtility();