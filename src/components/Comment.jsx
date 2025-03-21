import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/erosMariano.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eros Mariano</strong>
                            <time title="19 de Março às 17:42h" datetime="2025-03-19 17:42:00">Publicado há 2h atrás</time>
                        </div>

                        <button title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Que delícia, Nat! Também quero!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}