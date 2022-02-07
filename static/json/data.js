const data = {
    "root": [
        {"method": "GET", "path": "/", "parameters": {}, "body": {}, "authorization": ""}
    ],

    "api": [
        {"method": "GET", "path": "/api", "parameters": {}, "body": {}, "authorization": ""}
    ],

    "models": [
        {"method": "GET", "path": "/models/user",
            "parameters": {},
            "body": {},
            "authorization": ""
        },
        {"method": "GET", "path": "/models/user/{id}",
            "parameters": {"id":""},
            "body": {},
            "authorization": ""
        },
        {"method": "POST", "path": "/models/user/create",
            "parameters": {},
            "body": {"username":"", "password":"", "name":"", "email":""},
            "authorization": ""
        },
        {"method": "PUT", "path": "/models/user/update/{id}",
            "parameters": {"id":""},
            "body": {"username":"", "password":"", "name":"", "email":""},
            "authorization": ""
        },
        {"method": "DELETE", "path": "/models/user/delete/{id}",
            "parameters": {"id":""},
            "body": {},
            "authorization": ""
        }
    ]
}