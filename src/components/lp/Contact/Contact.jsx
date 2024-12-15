import React from 'react'
import section from '@/components/lp/Section/Section.module.scss'
import styles from '@/components/lp/Contact/Contact.module.scss'

function LpContact() {
    return (
        <div className={styles["contact"]} id="contact">
            <div className={`${section["section__inner "]} ${styles["contact__inner"]}`}>
                <h2 className={styles["contact__title"]}>お問い合わせフォーム</h2>
                <form className={styles["form"]} method="POST" action="/lp/email.php">
                    <dl>
                        <dt className={styles["required"]}><label htmlFor="username">お名前</label></dt>
                        <dd><input type="text" name="username" id="username" placeholder="お名前をご記入ください" required /></dd>
                    </dl>
                    <dl>
                        <dt className={styles["required"]}><label htmlFor="usercompany">会社名</label></dt>
                        <dd><input type="text" name="usercompany" id="usercompany" placeholder="会社名をご記入ください" required /></dd>
                    </dl>
                    <dl>
                        <dt className={styles["required"]}><label htmlFor="useremail">メールアドレス</label></dt>
                        <dd><input type="email" id="useremail" name="useremail" placeholder="例）example.repeats.jp" required /></dd>
                    </dl>
                    <dl>
                        <dt className={styles["any"]}><label htmlFor="usertel">電話番号</label></dt>
                        <dd><input type="tel" name="usertel" id="usertel" placeholder="例）03-0000-0000" /></dd>
                    </dl>
                    <dl className={styles["textarea"]}>
                        <dt className={styles["required"]}><label htmlFor="usercontact">お問い合わせ内容</label></dt>
                        <dd><textarea name="usercontact" id="usercontact" cols="30" rows="10" placeholder="お問い合わせ内容をご記入ください" required></textarea></dd>
                    </dl>
                    <div className={styles["form_privacy"]}>
                        <label>
                            <input type="checkbox" required />
                            <span>プライバシーポリシーに同意の上お問い合わせをお願いいたします</span>
                        </label>
                    </div>
                    <div className={styles["form__submit"]}>
                        <button type="submit">送信する</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LpContact