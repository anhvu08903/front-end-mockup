import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('item-text')}>
                    <h2 className={cx('item-label')}>Giới thiệu</h2>
                    <div className={cx('item-body')}>
                        <p>Project 2</p>
                        <p>GVHD: thầy Thân Quang Khoát</p>
                    </div>
                </div>

                <div className={cx('item-text')}>
                    <h2 className={cx('item-label')}>Sản phẩm</h2>
                    <div className={cx('item-body')}>
                        <p>Đồng phục thể thao</p>
                        <p>Giày thể thao</p>
                        <p>Áo giữ nhiệt</p>
                        <p>Dụng cụ thể thao</p>
                        <p>Phụ kiện</p>
                    </div>
                </div>

                <div className={cx('item-text')}>
                    <h2 className={cx('item-label')}>Thành viên</h2>
                    <div className={cx('item-body')}>
                        <p>Vũ Ngọc Anh 20215313</p>
                    </div>
                </div>

                <div className={cx('item-contact')}>
                    <h2 className={cx('item-label')}>Liên hệ với chúng tôi</h2>
                    <div className={cx('social')}>
                        <img className={cx('icon-social')} src={images.fb_logo} alt="facebook" />
                        <img className={cx('icon-social')} src={images.ins_logo} alt="instagram" />
                        <img className={cx('icon-social')} src={images.tiktok_logo} alt="tiktok" />
                        <img className={cx('icon-social')} src={images.yt_logo} alt="youtube" />
                        <img className={cx('icon-social')} src={images.twitter_logo} alt="twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
