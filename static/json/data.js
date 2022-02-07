const data = {
    // groups
    root: [
        // endpoints
        {
            method: "GET",      path: "/",
            parameters: {},
            body: {},           authorization: ""
        }
    ],
    
    api: [
        {
            method: "GET",      path: "/api",
            parameters: {},
            body: {},           authorization: ""
        },
        {
            method: "GET",      path: "/api/users/get/{user_id}",
            parameters: {
                user_id: ""
            },
            body: {},           authorization: ""
        },
        {
            method: "POST",      path: "/api/users/edit/{user_id}",
            parameters: {
                user_id: ""
            },
            body: {
                name: "",
                email:""
            },           authorization: ""
        }
    ]
}