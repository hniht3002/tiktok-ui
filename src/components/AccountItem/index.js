import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx("wrapper")}>

            <img src = "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3694a397d8cd35e79e4800469112733d~c5_100x100.jpeg?x-expires=1662645600&x-signature=PkZCm5F9gLjHFaEFX3qg%2F4QP6KM%3D"  className={cx("avatar")} alt = 'avatar'/>
            <div className={cx("info")}>
                <h4 className={cx("name")}>Nguyen Van A
                    <FontAwesomeIcon className={cx("check")} icon = {faCheckCircle} />
                </h4>
                <span className={cx("username")}>nguyenvana</span>
            </div>

        </div>
    );
}

export default AccountItem;