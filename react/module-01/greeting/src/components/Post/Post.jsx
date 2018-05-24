import React from 'react';
import PropTypes from 'prop-types';

export default class Post extends React.Component {
    static propTypes = {
        onLike: PropTypes.func,
        likes: PropTypes.number,
        title: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
    };
    static defaultProps = {
        onLike: () => {},
        likes: 0,
    };

    state = {
        liked: false,
    };

    // _addLikes = () => {
    //     this.setState(prevState => {
    //         return {likes: prevState.likes + 1}
    //     })
    // };

    // _removeLikes = () => {
    //     this.setState(prevState => {
    //         return {likes: prevState.likes - 1}
    //     })
    // };

    toggleLike = () => {
        this.setState((prevState) => {
            const liked = !prevState.liked;
            this.props.onLike(liked);
            return {liked: liked}
        })
    };

    render() {
        const {title, children, likes} = this.props;
        let opacity = this.state.liked ? 1 : 0.5;
        return (
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
                <div>
                    {likes}
                    <img src="/like.jpg" style={{opacity}} width="25" onClick={this.toggleLike} alt=""/>
                </div>
            </div>
        );
    }
}

// {<button onClick={this._addLikes}>Likes</button>}
// {<button onClick={this._removeLikes}>DisLikes</button>}