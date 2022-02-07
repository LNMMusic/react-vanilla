const Fetch = ({endpoint=null}) => {
    // Form State
    const [state, setState] = useState({
        method: "",         path: "",
        parameters: {},
        body: {},           authorization: ""
    });
    useEffect(() => {
        if (!(endpoint===null)) {
            setState(endpoint)
        }}, [endpoint]
    );  // change the initial values when props change [in case is not null]

    // Handlers
    function handleChange(e, objectKey=null) {
        const name  = e.target.getAttribute("name")
        let value = e.target.value
        
        if (objectKey) {
            const object = state[name]
            object[objectKey] = value
            value = object
        }
        setState(Object.assign({},
            state,
            {[name]: value}
        ))
    }
    function handleSubmit(e) {
        e.preventDefault();
        
        // parser [endpoint]
        let url = `${CONNECTION}${state.path}`
        Object.keys(state.parameters).map((key, _) => {
            url = url.replace(`{${key}}`, state.parameters[key])
        })

        // fetch
        switch (state.method) {
            case 'GET':
                getData(url)
                    .then(data => {alert(JSON.stringify(data))})
                break;
            case 'POST':
                postData(url, state.body)
                    .then(data => {alert(JSON.stringify(data))})
            break;
            default:
                break;
        }
    }

    return (
        <form className="uk-form-stacked fetch-form" onSubmit={(e) => handleSubmit(e)}>

            {/* Endpoint */}
            <div className="uk-margin">
                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Endpoint</label>
                <div uk-grid="true" className="uk-grid-small">
                    {/* Method */}
                    <div className="uk-width-1-4@s">

                        <select className="uk-select uk-text-muted uk-text-bold" id="form-stacked-select"
                        name="method" onChange={(e) => handleChange(e)} value={state.method}>
                            {["GET","POST"].map((method, index) => {
                                return <option key={index}>{method}</option>
                            })}
                        </select>
                    </div>
                    {/* Path */}
                    <div className="uk-width-expand@s">
                        <input className="uk-input" type="text" placeholder="/"
                        name="path" onChange={(e) => handleChange(e)}
                        defaultValue={state.path} key={1}
                        />
                    </div>
                </div>
            </div>

            {/* Parameters */}
            <div className="uk-margin">
                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Paremeters</label>
                <div uk-grid="true" className="uk-grid-small">
                    {Object.keys(state.parameters).map((parameter, index) => {
                        return (
                            <div className="uk-width-1-4@s" key={index}>
                                <input type="text" className="uk-input uk-form-blank" placeholder={parameter}
                                name="parameters" onChange={(e) => handleChange(e, parameter)}
                                required
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Body Request */}
            <div className="uk-margin">
                <label className="uk-form-label uk-text-bold" htmlFor="form-stacked-text">Body Request</label>
                {Object.keys(state.body).map((feature, index) => {
                    const label = feature
                    const value = state.body[feature]

                    return (
                        <div uk-grid="true" className="uk-grid-small" key={index}>
                            <div className="uk-width-1-4@s">
                                <input className="uk-input uk-text-center uk-form-small" type="text" placeholder={label} disabled={true} />
                            </div>
                            <div className="uk-width-expand@s">
                                <input className="uk-input uk-form-small" type="text" placeholder={value}
                                name="body" onChange={(e) => handleChange(e, label)}/>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button type="submit" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Submit</button>
        </form>
    )
};
