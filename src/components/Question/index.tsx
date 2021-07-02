import { ReactNode } from 'react'

import './styles.scss';

type QuestionsProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;

}


export function Question({
    content,
    author,
    children,
}: QuestionsProps) {
    return (
        <div className="question">
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>

            </footer>
            <p>{content}</p>
            <div className="like">
                {children}
            </div>
        </div>
    )
}