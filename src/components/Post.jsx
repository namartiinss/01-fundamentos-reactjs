import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/namartiinss.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Nathalia Martins</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de Março às 17:42h" datetime="2025-03-19 17:42:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Oie pessu</p>
                <p> Vou tomar um chocolate quente em Sao Paulo hoje!</p>
                <p><a href="#">#Chocolate</a> <a href="#">#cafe</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}