import React from 'react'

class Create extends React.Component{
    state = {
        newDoText: ''
    }

    addDo = () => {
        this.props.addDo(this.state.newDoText)
        this.setState({newDoText: ''})
    }

    render() {
        return (
            <div className="form-group w-50 d-flex justify-content-around">
                <input
                    className="form-control w-75"
                    placeholder="Write what you need to do"
                    onChange={(e) => this.setState({ newDoText: e.currentTarget.value })}
                    value={this.state.newDoText}
                />
                <button className="btn btn-outline-primary " onClick={this.addDo}>Add</button>
            </div>
        )
    }
}

export default Create
