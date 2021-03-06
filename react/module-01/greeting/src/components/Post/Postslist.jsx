import React, {Component, Fragment} from 'react';
import Post from './Post';

// import PropTypes from 'prop-types';

class Postslist extends Component {
    constructor(props){
        super(props);
        // debugger;
    }

    componentWillMount(){
        // debugger;
    }

    componentDidMount(){
        // debugger;
    }

    shouldComponentUpdate(nextProps, nextState){
        // debugger;
        return (alert('Внести изменения?'));
    }

    componentWillUpdate(nextProps, nextState){
        // debugger;
    }

    componentDidUpdate(nextProps, nextState){
        // debugger;
    }


    state = {
        posts: [{
            title: 'History',
            content: 'React was created by Jordan Walke, a software engineer at Facebook. He was influenced by XHP, an HTML component framework for PHP.[6] It was first deployed on Facebook\'s newsfeed in 2011 and later on Instagram.com in 2012.[7] It was open-sourced at JSConf US in May 2013.',
            likes: 0,
        }, {
            title: 'Basic usage',
            content: 'The following is a rudimentary example of React usage in HTML with JSX and JavaScript.',
            likes: 0,
        }, {
            title: 'Notable features',
            content: 'Properties (commonly, props) are passed to a component from the parent component. Components receive props as a single set of immutable values[10] (a JavaScript object). Whenever any prop value changes, the component\'s render function is called allowing the component to display the change.',
            likes: 0,
        },],
        title: "",
        content: "",
    };

    addPost = () => {
        this.setState((prevState) => {
            return {
                posts: [{
                    title: prevState.title,
                    content: prevState.content,
                    likes: 0
                }, ...prevState.posts]
            }
        })
    };

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    changeContent = (event) => {
        this.setState({
            content: event.target.value
        })
    };

    changeLikes(index, liked) {
        this.setState((prevState) => {
            const changer = liked ? 1 : -1;
            const copyPosts = [...prevState.posts];
            copyPosts[index].likes = prevState.posts[index].likes + changer;
            return {post: copyPosts}
        })
    };

    render() {
        return (
            <Fragment>
                <h2>All posts</h2>
                <input type="text"
                       placeholder="new title post"
                       value={this.state.title}
                       onChange={this.changeTitle}
                />
                <p>
                    <textarea placeholder="new text post"
                              onChange={this.changeContent}
                              value={this.state.content} />
                </p>
                <button onClick={this.addPost}>Add Post</button>
                {this.state.posts.map((post, index) => {
                    return <Post key={post.title}
                                 title={post.title}
                                 likes={post.likes}
                                 onLike={this.changeLikes.bind(this,index)}
                    >
                        {post.content}
                    </Post>
                })}
            </Fragment>
        )
    }
}

export default Postslist;
