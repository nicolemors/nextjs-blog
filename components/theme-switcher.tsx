
import styles from './theme-switcher.module.css'
import Button from './button'

export default function Switcher () {
    return (
        <div className={styles.divider}>
            <div className={styles.switch}>
                <Button>Light Mode</Button>
            </div>
        </div>
    )
}