import styles from './styles/header.module.css'

const Header = () => {
    return (
        <header className={`${styles.header} py-4`}>
            <div className={`${styles.box} container f jb ac px-6 py-2`}>
                <div className={styles.logo}>
                    Logo Here
                </div>
                <nav className={styles.nav}>
                    Nav Here
                </nav>
            </div>
        </header>
    );
};

export default Header;