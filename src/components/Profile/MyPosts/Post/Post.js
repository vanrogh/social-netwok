import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://preview.redd.it/ms4veit5nsh91.png?auto=webp&s=af677bf577e5d41ff9f3515eb4368d46f0891232' />
      post 1
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;