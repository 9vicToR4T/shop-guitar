class Error{

    render(){

        const html = `
        <div class="error-container">
            <div class="error-message">
                <h3>Problems with conection</h3>
                <p>Try latter</p>
            </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();