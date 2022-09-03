
import styles from './Sildebar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sildebar() {
    return <aside className={cx('wrapper')}>
        <h2>Side bar</h2>
    </aside>;
}

export default Sildebar;