class CommonController {
    constructor() {}

    /**
     * Method to create success response
     */
    public successResponse (data:any) {
        return {
            status: 'Success',
            data: data
        }
    }

    /**
     * Method to create error response
     */
    public errorResponse (error:any) {
        return {
            status: 'Error',
            error
        }
    }
}

export const commonController = new CommonController();