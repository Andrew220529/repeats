import React from 'react'
import styles from '@/components/lp/Management/Management.module.scss'

function LpManagement() {
  return (
    <div className={styles["management"]}>
        <div className={styles["management__body"]}>
            <picture>
                <source srcSet="/lp/images/svg/management__body-sp.svg" media="(max-width: 768px)" />
                <img src="/lp/images/svg/management__body.svg" alt=""/>
            </picture>
        </div>
    </div>
  )
}

export default LpManagement