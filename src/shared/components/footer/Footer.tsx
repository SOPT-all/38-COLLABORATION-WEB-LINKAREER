import * as styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.text({ type: 'menu' })}>이용약관</span>
        <span className={styles.text({ type: 'menu' })}>개인정보처리방침</span>
        <span className={styles.text({ type: 'menu' })}>고객문의</span>
        <span className={styles.text({ type: 'menu' })}>서비스피드백</span>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.text({ type: 'copyright' })}>
          Copyright ⓒ
          <strong className={styles.text({ type: 'strong' })}>
            Linkareer Inc.
          </strong>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
