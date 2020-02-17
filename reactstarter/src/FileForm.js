import React, { Component } from 'react';
import axios from 'axios'

class FileForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Submitted");
        const file = document.getElementById("file-field").files[0]
        const file2 = document.getElementById("file-field2").files[0]
        // console.log(file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const data = new FormData();
        data.append('meme', file)
        data.append('meme', file2)
        const url = 'http://localhost:3000/uploadFiles'
        axios.post(url, data, config).then((response) => {
            console.log(response.data)
        })
    }

    render() {
        return (
            <div>
                <h1>Sanity Check</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="file-field" type="file" name="meme" />
                    <input id="file-field2" type="file" name="meme" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default FileForm;