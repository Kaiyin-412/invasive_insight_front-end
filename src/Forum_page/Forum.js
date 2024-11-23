import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./forum.css";

function Forum() {
    const initialPosts = [
        { id: 1, topic: "Topic 1", content: "Content Content Content Content", username: "User1", comments: [] },
        { id: 2, topic: "Topic 2", content: "Content Content Content Content", username: "User2", comments: [] },
        { id: 3, topic: "Topic 3", content: "Content Content Content Content", username: "User3", comments: [] },
        { id: 4, topic: "Topic 4", content: "Content Content Content Content", username: "User4", comments: [] },
    ];

    const [posts, setPosts] = useState(initialPosts);
    const [likes, setLikes] = useState(
        initialPosts.reduce((acc, post) => ({ ...acc, [post.id]: 0 }), {})
    );
    const [likedPosts, setLikedPosts] = useState(
        initialPosts.reduce((acc, post) => ({ ...acc, [post.id]: false }), {})
    );

    const [newTopic, setNewTopic] = useState("");
    const [newContent, setNewContent] = useState("");
    const [commentInputs, setCommentInputs] = useState({});

    const toggleLike = (id) => {
        setLikedPosts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

        setLikes((prev) => ({
            ...prev,
            [id]: likedPosts[id] ? prev[id] - 1 : prev[id] + 1,
        }));
    };

    const addNewPost = () => {
        if (newTopic.trim() && newContent.trim()) {
            const newPost = {
                id: posts.length + 1,
                topic: newTopic,
                content: newContent,
                username: "New User",
                comments: [],
            };
            setPosts([newPost, ...posts]);
            setNewTopic("");
            setNewContent("");
        }
    };

    const addComment = (postId) => {
        if (!commentInputs[postId]?.trim()) return;

        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? {
                          ...post,
                          comments: [...post.comments, { username: "CurrentUser", text: commentInputs[postId] }],
                      }
                    : post
            )
        );

        setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    };

    const handleCommentInput = (postId, value) => {
        setCommentInputs((prev) => ({ ...prev, [postId]: value }));
    };

    return (
        <div className="forum">
            <div className="post-list">
                {/* Share Your Thoughts Section */}
                <div className="card input-card">
                    <input
                        type="text"
                        placeholder="Enter your topic here..."
                        value={newTopic}
                        onChange={(e) => setNewTopic(e.target.value)}
                        className="topic-input"
                    />
                    <textarea
                        placeholder="Share your thoughts here..."
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    ></textarea>
                    <button className="post-button" onClick={addNewPost}>
                        Post
                    </button>
                </div>

                {/* Posts */}
                {posts.map((post) => (
                    <div className="card" key={post.id}>
                        <h3>
                            {post.topic}
                            <div className="like-button-wrapper">
                                <span className="like-counter">{likes[post.id]}</span>
                                <button
                                    className={`like-button ${likedPosts[post.id] ? "liked" : ""}`}
                                    onClick={() => toggleLike(post.id)}
                                >
                                    <FaThumbsUp />
                                </button>
                            </div>
                        </h3>
                        <p className="content">{post.content}</p>

                        {/* Line above the username */}
                        <hr />

                        <p className="username">Username: {post.username}</p>

                        {/* Placeholder for comments */}
                        <div className="comments-list">
                            {post.comments.length === 0 ? (
                                <div className="comment-placeholder">Comment 1</div>
                            ) : (
                                post.comments.map((comment, index) => (
                                    <div key={index} className="comment-item">
                                        <strong>{comment.username}:</strong> {comment.text}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Add a Comment */}
                        <div className="comment-section">
                            <input
                                type="text"
                                placeholder="Comment here..."
                                value={commentInputs[post.id] || ""}
                                onChange={(e) => handleCommentInput(post.id, e.target.value)}
                            />
                            <button className="post-button" onClick={() => addComment(post.id)}>
                                Post
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;

