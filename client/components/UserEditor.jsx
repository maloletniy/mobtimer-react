import React from 'react';
import UserInput from './UserInput.jsx';

export default class UserEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorVisible: false
        }
        this.toggleEditorInput.bind(this);
    }

    deleteUser(user) {
        this.props.onDeleteUser(user);
    }

    toggleEditorInput() {
        this.setState({
            editorVisible: !this.state.editorVisible
        })
    }

    addUser(userName) {
        let newID = Math.round(Math.random() * 1000);
        let newUser = { id: newID, name: userName };
        this.props.onAddUser(newUser);
        this.setState({
            editorVisible: false
        });
    }

    renderUser(user) {
        return (
            <tr key={user.id}>
                <td>
                    {user.name}
                </td>
                <td>
                    <button onClick={() => this.deleteUser(user)}>X</button>
                </td>
            </tr>
        );
    }

    render() {
        let users = [];
        this.props.users.forEach(user => {
            users.push(this.renderUser(user));
        });

        return (
            <div id={'users'}>
                <button disabled={this.props.disabled} onClick={() => this.toggleEditorInput()}>Add user</button>
                <UserInput visible={this.state.editorVisible} onSubmit={(value) => this.addUser(value)} />
                <table style={{ border: 0 }}>
                    <tbody>
                        {users}
                    </tbody>
                </table>
            </div>
        );
    }

}