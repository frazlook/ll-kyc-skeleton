import React, { Component } from 'react';
import './Form.css';

class Upload extends Component {

    render() {
        return (
            <div className="card">
                <form>
                    <label for="fileupload"> Select a file to upload</label>
                    <input type="file" />

                </form>
            </div>
        )
    }
}

export default Upload;